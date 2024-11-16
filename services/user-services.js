const httpError = require("../helpers/httpError");
const { User } = require("../models/user");
const bcrypt = require("bcryptjs");

const createUser = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
        throw httpError(409, "Email in use");
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ ...req.body, password: hashPassword });
    return newUser;
};

module.exports = {
    createUser,
};
