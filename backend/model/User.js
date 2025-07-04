import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        image: {
            type: String,
        },
        is_actif: {
            type: Boolean,
            default: true,
        },
        role: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Role",
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("User", userSchema);
