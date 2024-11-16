const httpError = require("../helpers/httpError");

const validateBody = (schema) => {
    const func = (req, res, next) => {
        const { error } = schema.validate(req.body);
        if (error) {
            next(httpError(400, error.message));
        }
        next();
    };
    return func;
};

const validateRegister = (schema) => {
    const func = (req, res, next) => {
        const { error } = schema.validate(req.body);
        if (error) {
            const value = error.details[0];
            console.log("value--->", value);
            const message = value.path[0] === "email" ? "Email must be a valid email" : value.message;
            console.log("message--->", message);
            next(httpError(400, message));
        }
        next();
    };

    return func;
};

module.exports = { validateBody, validateRegister };
