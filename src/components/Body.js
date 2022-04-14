import { useEffect, useState } from "react";
import Navigation from "./Navigation";

function Body({ id, type, homepage }) {
    // [TO DO] Get from context
    const domain = 'http://bcwp.hltv.test';
    const restAPI = `${domain}/wp-json/wp/v2`;
    const pluginAPI = `${domain}/wp-json/rsfr-rendpoint/v1`;

    const [header, setHeader] = useState('');
    const [content, setContent] = useState('');
    const [sidebar, setSidebar] = useState('');
    const [jsFiles, setJsFiles] = useState('');

    useEffect(() => {
        if(homepage === 'true') {
            fetch(`${restAPI}/posts`) // 10 by default
            .then(response => response.json())
            .then(data => {
                setContent(
                    <ul>
                        {data.map((post, index) => {
                            return (
                                <li key={index}><a href={post.link.replace(domain, '')}>{post.title.rendered}</a></li>
                            );
                        })}
                    </ul>
                );
            });
        }
        else {
            fetch(`${restAPI}/${type}s/${id}`)
            .then(response => response.json())
            .then(data => {
                const contentWrapper = document.createElement('div');
                contentWrapper.innerHTML = data.content.rendered;
                const asideWrapper = document.createElement('div');
                contentWrapper.querySelectorAll('[class*="widget_"]').forEach((widgetElement) => {
                    asideWrapper.appendChild(widgetElement);
                });
                setContent(<div className="content-wrapper col-12 col-lg-8" dangerouslySetInnerHTML={{ __html: contentWrapper.innerHTML }}></div>)
                setSidebar(<aside className="sidebar col-12 col-lg-4" dangerouslySetInnerHTML={{ __html: asideWrapper.innerHTML }}></aside>)
            });
        }

        fetch(`${pluginAPI}/js`)
        .then(response => response.json())
        .then(data => {
            setJsFiles(JSON.parse(data.js));
        });
    }, []);

    return (
        <body>
            <noscript>You need to enable JavaScript to run this app.</noscript>
            <Navigation />
            <main className="container">
                <div className="row justify-content-center">
                    {content}
                    {sidebar}
                </div>
            </main>
            {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></script> */}
            {Object.values(jsFiles).map((url, index) => <script key={index} src={url} />)}
        </body>
    );
}

export default Body;
