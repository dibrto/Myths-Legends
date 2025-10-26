import Myth from "../models/Myth.js";

export async function getLastThreeMyths(){
    return Myth.find()
        .sort({ createdAt: -1 })
        .limit(3)
        .select("name origin role symbol era image owner createdAt")
        .populate("owner", "email");
}