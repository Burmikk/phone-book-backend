const { model, Schema } = require("mongoose");
const Joi = require("joi");
const handlerMongooseError = require("../helpers/handlerMongooseError");
const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            match: emailRegexp,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        token: {
            type: String,
            default: null,
        },
    },
    { versionKey: false, timestamps: false }
);
userSchema.post("save", handlerMongooseError);

const User = model("user", userSchema);

const userRegisterSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().pattern(emailRegexp).required(),
    password: Joi.string().min(7).required(),
});
const userLohinSchema = Joi.object({
    email: Joi.string().pattern(emailRegexp).required(),
    password: Joi.string().min(7).required(),
});

module.exports = {
    User,
    userRegisterSchema,
    userLohinSchema,
};
