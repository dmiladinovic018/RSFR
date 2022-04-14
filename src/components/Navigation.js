import { useEffect, useState } from "react";

function Navigation() {
    // [TO DO] Get from context
    const domain = 'http://bcwp.hltv.test';
    const restAPI = `${domain}/wp-json/wp/v2`;
    const pluginAPI = `${domain}/wp-json/rsfr-rendpoint/v1`;

    const [menu, setMenu] = useState('');

    useEffect(() => {
        fetch(`${pluginAPI}/menu`)
        .then(response => response.json())
        .then(data => {
            setMenu(JSON.parse(data.menu).replaceAll(domain, ''));
        });
    }, []);

    return (
        <div className="menu-wrapper" dangerouslySetInnerHTML={{ __html: menu }}></div>
    );
}

export default Navigation;
