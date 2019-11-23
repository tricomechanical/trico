export class MenuItem {
    label: string;
    link?: string;
    route?: string;
    subItems?: MenuItem[];
    disabled?: boolean;
    newSection?: boolean;
}
