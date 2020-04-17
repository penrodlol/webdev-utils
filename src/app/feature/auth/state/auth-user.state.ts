export interface IAuthUserState {
    uid: string;
    displayName: string;
    photoURL: string;
    email: string;
}

export const initialAuthUserState: IAuthUserState = {
    uid: null,
    displayName: null,
    photoURL: null,
    email: null
}
