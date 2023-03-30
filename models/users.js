const mongoose = require('mongoose');
const Schema = mongoose.Schema
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Please enter your name'],
    },
    email: {
        type: String,
        required: [true, 'Please enter an email'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please enter a valid email']
    },
    password: {
        type: String,
        required: [true, 'Please enter a password'],
        minlength: [8, 'Minimum password length is 6 characters']
    },
    privilige: {
        type: Number,
        required: true
    },
    rating: {
        type: mongoose.Types.Decimal128,
        required: false,
    }
}, {timestamps: true});

// Before user created
userSchema.pre('save', async function(next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    
    next();
})

// After user created
userSchema.post('save', function(doc, next) {
    console.log('new user was created', doc)
    next();
})

// Static method to log in user
userSchema.statics.login = async function(email, password) {
    const user = await this.findOne({ email })
    if (user)
    {
        const auth = await bcrypt.compare(password, user.password);

        if (auth) 
        {
            return user;
        }
        
        throw Error('incorrect password')
    }
    throw Error('incorrect email')
}

const Users = mongoose.model('user', userSchema);
module.exports = Users;