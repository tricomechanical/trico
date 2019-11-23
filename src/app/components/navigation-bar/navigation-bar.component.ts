import { Component } from '@angular/core';
import { MenuItem } from 'src/app/models/MenuItem';

@Component({
    selector: 'app-navigation-bar',
    templateUrl: './navigation-bar.component.html',
    styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent {
    public menuItems: MenuItem[] = [
        {
            label: 'Home',
            route: '/'
        },
        {
            label: 'Services & Specialties',
            route: '/services'
        },
        {
            label: 'Photo Gallery',
            route: '/photos'
        },
        {
            label: 'Customer References',
            route: '/references'
        },
        {
            label: 'Contact Us',
            route: '/contact'
        },
        {
            label: 'Apply for Work',
            route: '/apply'
        }
    ];

    constructor() { }

    /**
     * Checks if the selected menu item is a valid selection and then collapses the menu if it is
     *
     * @param {MenuItem} item
     * @memberof NavigationBar
     */
    public onMenuItemClick(item: MenuItem) {
        if (!item || !item.subItems || item.subItems.length === 0 && !item.disabled) {
            document.getElementById('navbarSupportedContent').className = 'navbar-collapse collapse';
        }
    }
}
