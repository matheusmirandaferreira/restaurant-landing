const mongoose = require('../../database')
const bcrypy = require('bcryptjs')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    passwordResetToken: {
        type: String,
        select: true,
    },
    passwordResetExpires: {
        type: Date,
        select: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

UserSchema.pre('save', async function (next) {
    const hash = await bcrypy.hash(this.password, 10)
    this.password = hash;

    next();
})

const User = mongoose.model('User', UserSchema)

module.exports = User;
