import {useEffect, useState} from "react";
import Menu from "./Menu";
import Footer from "./Footer";
import Constants from "./Constants";

function Body({id, type, homepage}) {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [sidebar, setSidebar] = useState('');
    const [jsFiles, setJsFiles] = useState('');

    useEffect(() => {
        if(homepage === 'true') {
            fetch(`${Constants().restAPI}/posts`) // 10 by default
            .then(response => response.json())
            .then(data => {
                setContent(
                    <ul>
                        {data.map((post, index) => {
                            return (
                                <li key={index}><a href={post.link.replace(Constants().domain, '')}>{post.title.rendered}</a></li>
                            );
                        })}
                    </ul>
                );
            });
        }
        else {
            fetch(`${Constants().restAPI}/${type}s/${id}`)
            .then(response => response.json())
            .then(data => {
                const contentWrapper = document.createElement('div');
                contentWrapper.innerHTML = data.content.rendered;

                const sidebarWrapper = document.createElement('div');
                contentWrapper.querySelectorAll('[class*="widget_"]').forEach((widgetElement) => {
                    sidebarWrapper.appendChild(widgetElement);
                });

                setTitle(<h1 dangerouslySetInnerHTML={{ __html: data.title.rendered }}></h1>)
                setContent(<div className="content col-12 col-lg-8" dangerouslySetInnerHTML={{ __html: contentWrapper.innerHTML }}></div>)
                setSidebar(<aside className="sidebar col-12 col-lg-4" dangerouslySetInnerHTML={{ __html: sidebarWrapper.innerHTML }}></aside>)
            });
        }

        fetch(`${Constants().pluginAPI}/js`)
        .then(response => response.json())
        .then(data => {
            setJsFiles(JSON.parse(data.js));
        });
    }, []);

    return (
        <body>
            <noscript>You need to enable JavaScript to run this app.</noscript>

            <header>
                <Menu />
            </header>

            <main className="container">
                <div className="row justify-content-center">
                    {title}
                    {content}
                    {sidebar}
                </div>
            </main>

            <Footer />

            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></script>
            {
                Object.entries(jsFiles)
                .filter(([handle, url]) => {
                    return handle === 'bcb-script' || handle === 'bcsb-script' || handle === 'bc-b-localization';
                })
                .map(([handle, url], index) => {
                    return (<script key={index} src={url} />);
                })
            }
        </body>
    );
}

export default Body;
