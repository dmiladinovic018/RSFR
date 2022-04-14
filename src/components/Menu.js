import {useEffect, useState} from "react";

function Menu() {
    console.log("wesh");

    // [TO DO] Get from context
    const domain = 'http://bcwp.hltv.test';
    const pluginAPI = `${domain}/wp-json/rsfr-rendpoint/v1`;

    const [menuFile, setMenuFile] = useState({});

    useEffect(() => {
        fetch(`${pluginAPI}/menu`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setMenuFile(JSON.parse(data.menu));
            });
    }, []);

    return (
        <>
            {menuFile}
        </>
    );
}

export default Menu;
