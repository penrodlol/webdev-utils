interface IWebDevUtilsRoutes {
    path: string;
    icon: string;
    label: string;
    auth: boolean;
    info?: {
        title: string,
        description: string
    };
}

const routes: IWebDevUtilsRoutes[] = [
    { path: 'home', icon: 'home', label: 'Home', auth: false },
    {
        path: 'links',
        icon: 'link',
        label: 'Links',
        auth: true,
        info: {
            title: 'Archive Links',
            description: 'Create an archive of personal links for all your web development resources.'
        }
    }
];

export { routes as WebDevUtilsRoutes, IWebDevUtilsRoutes };
