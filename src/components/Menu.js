import {useEffect, useState} from "react";
import setupMenu from '../utils/menu';
import Constants from "./Constants";

const Menu = () => {

    const [menuFile, setMenuFile] = useState('');

    useEffect(() => {
        fetch(`${Constants().pluginAPI}/menu`)
            .then(response => response.json())
            .then(data => {
                const menuWrapper = document.createElement('div');
                menuWrapper.innerHTML = JSON.parse(data.menu).replaceAll(Constants().domain, '');
                setupMenu(menuWrapper);
                setMenuFile(<div className="container-fluid" dangerouslySetInnerHTML={{ __html: menuWrapper.innerHTML }}></div>)
            });
    }, []);

    useEffect(() => {
        if(menuFile) {
            const bootstrapScript = document.createElement('script');
            bootstrapScript.setAttribute('src', 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js');
            bootstrapScript.setAttribute('integrity', 'sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM');
            bootstrapScript.setAttribute('crossorigin', 'anonymous');
            document.body.appendChild(bootstrapScript);

            document.querySelectorAll('.dropdown-button').forEach((button) => {
                button.addEventListener('click', (event) => {
                    if(window.innerWidth < 992) {
                        const dropdownMenu = event.target.closest('li').querySelector(':scope > .dropdown-menu');
                        const wasShown = dropdownMenu.classList.contains('show');

                        document.querySelectorAll('.nav-item.dropdown > .dropdown-menu').forEach((menu) => {
                            menu.classList.remove('show');
                        });

                        if(!wasShown) dropdownMenu.classList.add('show');
                    }
                });
            });
        }
    }, [menuFile]);

    return (
        <div className="navbar navbar-expand-lg navbar-light bg-light">
            {menuFile}
        </div>
    );
}

export default Menu;
