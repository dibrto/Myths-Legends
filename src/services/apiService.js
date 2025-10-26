import Myth from "../models/Myth.js";

export async function getLastThreeMyths(){
    return Myth.find()
        .sort({ createdAt: -1 })
        .limit(3)
        .select({
          name: 1
          , origin: 1
          , role: 1
          , symbol: 1
          , era: 1
          , image: 1
          , owner: 1
          , createdAt: 1
        });
}