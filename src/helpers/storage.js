import { AsyncStorage } from 'react-native';

import { USER_DATA, prefix } from 'constants';


export const writeStorage = async (key, data) => {
    try{
        await AsyncStorage.setItem(`${prefix}${key}`, JSON.stringify(data));
    }catch(error){
        //TODO: Add alert modal
        console.log(error);
    }
};

export const readStorage = async (key) => {
    try{
        const storedData = await AsyncStorage.getItem(`${prefix}${key}`)
        const parsedData = JSON.parse(storedData);
        return parsedData;
    }catch(error){
        //TODO: Add alert modal
        console.log(error);
    }
};

export const clearStorage = async () => {
    try{
        await AsyncStorage.clear();
    }catch(error){
        //TODO: Add alert modal
        console.log(error)
    }
}
