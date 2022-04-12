import { useEffect, useState } from "react";

function Content({ id, type, homepage }) {
    // [TO DO] Get from context
    const domain = 'http://bcwp.hltv.test';
    const API = `${domain}/wp-json/wp/v2`;

    const [content, setContent] = useState('fetching...');
    const [latestPosts, setLatestPosts] = useState([]);

    useEffect(() => {
        if(!homepage) {
            fetch(`${API}/${type}s/${id}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setContent(data.content.rendered);
            });
        }
        else {
            fetch(`${API}/posts`) // 10 by default
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setLatestPosts(data);
            });
        }
    }, []);

    return (
        <div className="Content">
            {!homepage && <div dangerouslySetInnerHTML={{ __html: content }}></div>}
            {
                homepage &&
                <ul>
                    {latestPosts.map((post, index) => {
                        return (
                            <li key={index}><a href={post.link.replace(domain, '')}>{post.title.rendered}</a></li>
                        );
                    })}
                </ul>
            }
        </div>
    );
}

export default Content;
