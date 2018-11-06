import { readStorage, writeStorage } from "./storage";

import { USER_DATA } from "constants";

export const saveUserData = async (data) => {
        return await writeStorage(USER_DATA, data);
};

export const getUserData = async() => {
    const userData = await readStorage(USER_DATA);
    return userData ? JSON.parse(userData) : null;
};

export const getAccessToken = async() => {
    const userData = await readStorage(USER_DATA);
    const accessToken = userData && userData.accessToken || null;
    return accessToken;
};
