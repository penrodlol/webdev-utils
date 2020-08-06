interface IWebDevUtilsRoutes {
    path: string;
    icon: string;
    label: string;
    isSvg: boolean;
    auth: boolean;
    info?: {
        title: string,
        description: string
    };
}

const routes: IWebDevUtilsRoutes[] = [
    { path: 'home', icon: 'home', label: 'Home', auth: false, isSvg: false },
    {
        path: 'links',
        icon: 'link',
        label: 'Links',
        isSvg: false,
        auth: true,
        info: {
            title: 'Archive Links',
            description: 'Create an archive of personal links for all your web development resources.'
        }
    },
    {
        path: '',
        icon: 'assets/svgs/code-json.svg',
        label: 'Json Parser',
        isSvg: true,
        auth: false,
        info: {
            title: 'Json Parser',
            description: ''
        }
    }
];

export { routes as WebDevUtilsRoutes, IWebDevUtilsRoutes };
