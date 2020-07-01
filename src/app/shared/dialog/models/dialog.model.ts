export interface DialogData {
    title: string,
    type: 'general' | 'confirmation' | 'warning' | 'error',
    message?: string,
    component?: any,
    button1?: string,
    button2?: string,
    sharedData?: any;
};
