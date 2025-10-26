import Myth from "../models/Myth.js";

export async function createMyth(mythData, user_ID){
    return Myth.create({
        ...mythData
        , owner: user_ID
    });
}

export async function getLastThreeMyths(){
    return Myth.find()
        .sort({ id: -1 })
        .limit(3)
        .select({
            name: 1
            , origin: 1
            , image: 1
        });
}