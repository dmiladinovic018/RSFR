import {useEffect, useState} from "react";
import Constants from "./Constants";

const Menu = () => {

    const [menuFile, setMenuFile] = useState('');

    useEffect(() => {
        fetch(`${Constants().pluginAPI}/menu`)
            .then(response => response.json())
            .then(data => {
                setMenuFile(JSON.parse(data.menu).replaceAll(Constants().domain, ''));
            });
    }, []);

    return (
        <div className="menu-wrapper" dangerouslySetInnerHTML={{ __html: menuFile }}></div>
    );
}

export default Menu;
