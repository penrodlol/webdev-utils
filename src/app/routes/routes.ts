interface IWebDevUtilsRoutes {
    path: string;
    icon: string;
    label: string;
}

const routes: IWebDevUtilsRoutes[] = [
    { path: 'home', icon: 'home', label: 'Home' },
    { path: 'cookie', icon: 'engineering', label: 'Cookies' }
]

export { routes as WebDevUtilsRoutes }