interface IWebDevUtilsRoutes {
    path: string;
    icon: {
        src: string;
        isSvg: boolean;
    };
    label: string;
    auth: boolean;
    info?: {
        title: string;
        description: string;
    };
}

const routes: IWebDevUtilsRoutes[] = [
    {
        path: 'home',
        icon: {
            src: 'home',
            isSvg: false
        },
        label: 'Home',
        auth: false
    },
    {
        path: 'links',
        icon: {
            src: 'link',
            isSvg: false
        },
        label: 'Links',
        auth: true,
        info: {
            title: 'Archive Links',
            description: 'Create an archive of personal links for all your web development resources.'
        }
    },
    {
        path: 'json-pretty',
        icon: {
            src: 'assets/svgs/code-json.svg',
            isSvg: true
        },
        label: 'Json Pretty',
        auth: false,
        info: {
            title: 'Json Pretty Printer',
            description: ''
        }
    }
];

export { routes as WebDevUtilsRoutes, IWebDevUtilsRoutes };
