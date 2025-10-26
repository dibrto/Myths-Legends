import Myth from "../models/Myth.js";

export async function createMyth(mythData, user_ID){
    return Myth.create({
        ...mythData
        , owner: user_ID
    });
}

export async function getLastThreeMyths(){
    return Myth.find()
        .sort({ createdAt: -1 })
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

export async function getOneMyth(myth_ID){
    return Myth.findById(myth_ID);
}

export async function likeMyth(myth_ID, user_ID){
    return Myth.findByIdAndUpdate(myth_ID, {$push: {likedList: user_ID}});
}

export async function updateMyth(myth_ID, mythData){
    return Myth.findByIdAndUpdate(myth_ID, mythData, {runValidators: true});
}

export async function deleteMyth(myth_ID){
    return Myth.findByIdAndDelete(myth_ID);
}


