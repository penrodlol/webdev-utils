interface IWebDevUtilsRoutes {
    path: string;
    icon: string;
    label: string;
    auth: boolean;
}

const routes: IWebDevUtilsRoutes[] = [
    { path: 'home', icon: 'home', label: 'Home', auth: false },
    { path: 'links', icon: 'link', label: 'Links', auth: true }
];

export { routes as WebDevUtilsRoutes };
