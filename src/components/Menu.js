import {useEffect, useState} from "react";

const Menu = () => {
    // [TO DO] Get from context
    const domain = 'http://bcwp.hltv.test';
    const pluginAPI = `${domain}/wp-json/rsfr-rendpoint/v1`;

    const [menuFile, setMenuFile] = useState('');

    useEffect(() => {
        fetch(`${pluginAPI}/menu`)
            .then(response => response.json())
            .then(data => {
                setMenuFile(JSON.parse(data.menu).replaceAll(domain, ''));
            });
    }, []);

    return (
        <div className="menu-wrapper" dangerouslySetInnerHTML={{ __html: menuFile }}></div>
    );
}

export default Menu;
