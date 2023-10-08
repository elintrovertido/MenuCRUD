import mongoose from "mongoose";

const {Schema} = mongoose;

const menuSchema = new Schema(
    {
        dishName : String,
        dishDescription : String,
        dishPrice : Number
    },
    {
        timestamps : true
    }
);

const Menu = mongoose.models.Menu || mongoose.model("Menu", menuSchema);

export default Menu;