interface IWebDevUtilsRoutes {
    path: string;
    icon: string;
    label: string;
}

const routes: IWebDevUtilsRoutes[] = [
    { path: '', icon: 'https', label: 'Login' }
]

export { routes as WebDevUtilsRoutes }