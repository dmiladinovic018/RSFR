import { useEffect, useState } from "react";

function Body({ id, type, homepage }) {
    // [TO DO] Get from context
    const domain = 'http://bcwp.hltv.test';
    const restAPI = `${domain}/wp-json/wp/v2`;
    const pluginAPI = `${domain}/wp-json/rsfr-rendpoint/v1`;

    const [content, setContent] = useState(<></>);
    const [menu, setMenu] = useState(<></>);
    const [jsFiles, setJsFiles] = useState({});

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
                setContent(<div dangerouslySetInnerHTML={{ __html: data.content.rendered }}></div>)
            });
        }

        fetch(`${pluginAPI}/menu`)
            .then(response => response.json())
            .then(data => {
                setMenu(<nav dangerouslySetInnerHTML={{ __html: JSON.parse(data.menu).replaceAll(domain, '') }}></nav>)
            });

        fetch(`${pluginAPI}/js`)
        .then(response => response.json())
        .then(data => {
            setJsFiles(JSON.parse(data.js));
        });
    }, []);

    return (
        <body>
            <noscript>You need to enable JavaScript to run this app.</noscript>
            {menu}
            {content}
            {Object.values(jsFiles).map((url, index) => <script key={index} src={url} />)}
        </body>
    );
}

export default Body;
