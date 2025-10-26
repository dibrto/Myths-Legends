import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

// TODO: Fix user 
const userSchema = new Schema({
    email: {
        type: String
        , required: [true, "Email is required"]
        , minLength: [10, "Email need to be at least 10 characters long"]
    }

    , password: {
        type: String
        , required: [true, "Password is required"]
        , minLength: [4, "Password need to be at least 4 characters long"]
    }
});

userSchema.pre("save", async function (){
    this.password = await bcrypt.hash(this.password, 10);
});

const User = model("User", userSchema);

export default User;