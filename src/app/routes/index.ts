interface IWebDevUtilsRoutes {
    path: string;
    icon: string;
    label: string;
}

const routes: IWebDevUtilsRoutes[] = [
    { path: '', icon: 'home', label: 'Home' },
    { path: 'auth', icon: 'https', label: 'Login' }
]

export { routes as WebDevUtilsRoutes }