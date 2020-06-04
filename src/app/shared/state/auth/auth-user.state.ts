export interface IAuthUserState {
    uid: string;
    email: string;
    displayName?: string;
    photoURL?: string;
}

export const initialAuthUserState: IAuthUserState = {
    uid: null,
    email: null,
    displayName: null,
    photoURL: null
}
