import {useEffect, useState} from "react";
import Constants from "./Constants";

const Head = () => {

    const [cssFiles, setCssFiles] = useState('');

    useEffect(() => {
        fetch(`${Constants().pluginAPI}/css`)
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
            <title>RSFR</title>
            <link rel="stylesheet" href={window.location.origin+"/App.css"}/>
            {
                Object.entries(cssFiles)
                .filter(([handle, url]) => {
                    return handle === 'bcb-style' || handle === 'bcsb-style' || handle === 'bcb-localization';
                })
                .map(([handle, url], index) => {
                    return (<link key={index} rel="stylesheet" href={url} />);
                })
            }
        </head>
    );
}

export default Head;
