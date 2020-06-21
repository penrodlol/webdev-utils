export interface IAuthUserState {
    email: string;
    displayName?: string;
    photoURL?: string;
}

export const initialAuthUserState: IAuthUserState = {
    email: null,
    displayName: null,
    photoURL: null
}
