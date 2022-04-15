const setupMenu = (menuElement) => {
    menuElement.querySelectorAll('button').forEach((button) => {
        button.remove();
    });

    const navbarToggler = document.createElement('button');
    navbarToggler.classList.add('navbar-toggler');
    navbarToggler.setAttribute('type', 'button');
    navbarToggler.dataset.bsToggle = 'collapse';
    navbarToggler.dataset.bsTarget = '#navbarNavDropdown';

    const navbarTogglerIcon = document.createElement('span');
    navbarTogglerIcon.classList.add('navbar-toggler-icon');
    navbarToggler.appendChild(navbarTogglerIcon);
    menuElement.insertBefore(navbarToggler, menuElement.firstChild);

    const navbarDropdown = menuElement.querySelector(':scope > div:first-of-type');
    navbarDropdown.classList.add('collapse', 'navbar-collapse', 'collapse-on-hover');
    navbarDropdown.setAttribute('id', 'navbarNavDropdown');

    const navbarDropdownList = navbarDropdown.querySelector(':scope > ul:first-of-type');
    navbarDropdownList.classList.add('navbar-nav');

    navbarDropdownList.querySelectorAll(':scope > li').forEach((listItem) => {
        listItem.classList.add('nav-item');

        const listItemLink = listItem.querySelector(':scope > a:first-of-type');
        listItemLink.classList.add('nav-link');
        if(listItemLink.getAttribute('href') === window.location.pathname) {
            listItemLink.classList.add('active');
            listItemLink.setAttribute('href', '#');
        }

        const listItemDropdown = listItem.querySelector(':scope > ul:first-of-type');
        if(listItemDropdown) {
            listItem.classList.add('dropdown');

            const listItemDropdownLink = listItem.querySelector(':scope > a:first-of-type');
            listItemDropdownLink.classList.add('dropdown-toggle');
            listItemDropdownLink.dataset.bsToggle = 'dropwdown';
            listItemDropdown.classList.add('dropdown-menu');

            const listItemDropdownLinkWrapper = document.createElement('div');
            listItemDropdownLinkWrapper.classList.add('d-flex', 'align-items-center', 'w-100');
            listItemDropdownLinkWrapper.appendChild(listItemDropdownLink.cloneNode(true));

            const dropdownArrow = document.createElement('button');
            dropdownArrow.classList.add('dropdown-button', 'dropdown-toggle');
            listItemDropdownLinkWrapper.appendChild(dropdownArrow);

            listItemDropdownLink.remove();
            listItem.insertBefore(listItemDropdownLinkWrapper, listItem.firstChild);

            listItemDropdown.querySelectorAll(':scope > li > a').forEach((dropdownItemLink) => {
                dropdownItemLink.classList.add('dropdown-item');
            });
        }
    });
}

export default setupMenu;
