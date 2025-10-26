import { Schema, model } from "mongoose";

const mythSchema = new Schema({
    name: {
        type: String
        , required: [true, "Name is required"]
        , minLength: [2, "Name must be at least 2 characters long"]
    }

    , origin: {
        type: String
        , required: [true, "Origin is required"]
        , minLength: [3, "Name must be at least 3 characters long"]
    }

    , role: {
        type: String
        , required: [true, "Role is required"]
        , minLength: [2, "Name must be at least 2 characters long"]
    }

    , image: {
        type: String
        , required: [true, "Image is required"]
        , match: [/^https?:\/\//, 'Image Url is invalid!'],
    }

    , symbol: {
        type: String
        , required: [true, "Symbol is required"]
        , minLength: [3, "Name must be at least 3 characters long"]
        , maxLength: [40, "Name must be at least 40 characters long"]
    }

    , era: {
        type: String
        , required: [true, "Era is required"]
        , minLength: [5, "Name must be at least 5 characters long"]
        , maxLength: [15, "Name must be at least 15 characters long"]
    }

    , description: {
        type: String
        , required: [true, "Description is required"]
        , minLength: [10, "Name must be at least 10 characters long"]
    }

    , owner: {
        type: Schema.Types.ObjectId
        , ref: "User"
    }

    , likedList: [{
        type: Schema.Types.ObjectId
        , ref: "User"
    }]
});

const Myth = model("Myth", mythSchema);

export default Myth;