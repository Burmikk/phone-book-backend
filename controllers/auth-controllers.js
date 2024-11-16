const { createUser } = require("../services/user-services");
const ctrlWrapper = require("../utils/ctrlWrapper");

const register = async (req, res) => {
    await createUser(req, res);
    res.status(201).json({ message: "User created" });
};

module.exports = {
    register: ctrlWrapper(register),
};
