export type SnackbarType = "INFO" | "ERROR" | "SUCCESS";

export interface FormActionState {
    result:string;
    name?:string;
    message: string;
}