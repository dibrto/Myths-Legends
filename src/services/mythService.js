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

export async function getAllMyths(){
    return Myth.find()
        .select({
            name: 1
            , origin: 1
            , role: 1
            , image: 1
        });
}