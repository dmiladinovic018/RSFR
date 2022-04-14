import { useEffect, useState } from "react";

function Body({ id, type, homepage }) {
    // [TO DO] Get from context
    const domain = 'http://bcwp.hltv.test';
    const restAPI = `${domain}/wp-json/wp/v2`;
    const pluginAPI = `${domain}/wp-json/rsfr-rendpoint/v1`;

    const [content, setContent] = useState(<></>);

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
        fetch(`${pluginAPI}/css`)
        .then(response => response.json())
        .then(data => {
            console.log(JSON.parse(data.css));
        });
    }, []);

    return (
        <body>
            <noscript>You need to enable JavaScript to run this app.</noscript>
            {content}
        </body>
    );
}

export default Body;
