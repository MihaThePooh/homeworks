import axios from "axios";

export const hw13API = {
    postCheckbox(isChecked: boolean) {
        return axios.post("https://neko-cafe-back.herokuapp.com/auth/test", {success: isChecked})
    }
};