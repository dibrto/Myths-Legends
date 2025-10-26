import Myth from "../models/Myth.js";

export async function createMyth(mythData, user_ID){
    return Myth.create({
        ...mythData
        , owner: user_ID
    });
}