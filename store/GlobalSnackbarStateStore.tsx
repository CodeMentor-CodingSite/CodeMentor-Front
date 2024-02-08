import {atom} from "recoil";
import {type SnackbarType} from "@/utils/type";

interface GlobalSnackbarState {
    show: boolean;
    type: SnackbarType;
    message: string;
    duration?: number;
}

const globalSnackbarStateStore = atom<GlobalSnackbarState>({
    key: 'globalSnackbarState',
    default: {
        show: false,
        type: 'SUCCESS',
        message: '',
        duration: 3000
    }
});

export default globalSnackbarStateStore;