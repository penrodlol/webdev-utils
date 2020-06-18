interface IWebDevUtilsRoutes {
    path: string;
    icon: string;
    label: string;
}

const routes: IWebDevUtilsRoutes[] = [
    { path: 'home', icon: 'home', label: 'Home' },
    { path: 'links', icon: 'link', label: 'Links' },
]

export { routes as WebDevUtilsRoutes }