import { useEffect, useState } from "react";

function Content({ id, type, homepage }) {
    // [TO DO] Get from context
    const domain = 'http://bcwp.hltv.test';
    const restAPI = `${domain}/wp-json/wp/v2`;
    const pluginAPI = `${domain}/wp-json/rsfr`;

    const [content, setContent] = useState(<></>);

    useEffect(() => {
        if(homepage) {
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
    }, []);

    return (
        <div className="Content">
            {content}
        </div>
    );
}

export default Content;
