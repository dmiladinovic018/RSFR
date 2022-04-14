import { useEffect, useState } from "react";

function Head() {
    // [TO DO] Get from context
    const domain = 'http://bcwp.hltv.test';
    const restAPI = `${domain}/wp-json/wp/v2`;
    const pluginAPI = `${domain}/wp-json/rsfr-rendpoint/v1`;

    const [cssFiles, setCssFiles] = useState({});

    useEffect(() => {
        fetch(`${pluginAPI}/css`)
        .then(response => response.json())
        .then(data => {
            setCssFiles(JSON.parse(data.css));
        });
    }, []);

    return (
        <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#000000" />
            <meta
                name="description"
                content="Web site created using create-react-app"
            />
            <title>React App</title>
            <link rel="stylesheet" href={window.location.origin+"/App.css"}/>
            {Object.values(cssFiles).filter(url => url).map((url, index) => <link key={index} rel="stylesheet" href={url} />)}
        </head>
    );
}

export default Head;
