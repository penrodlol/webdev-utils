interface IWebDevUtilsRoutes {
    path: string;
    icon: string;
    label: string;
}

const routes: IWebDevUtilsRoutes[] = [
    { path: 'home', icon: 'home', label: 'Home' }
]

export { routes as WebDevUtilsRoutes }