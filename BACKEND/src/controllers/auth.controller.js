import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/user.model.js'
import dotenv from 'dotenv';



dotenv.config();

const SALT_ROUNDS = 10;

export const register = async(req, res) => {
    try {
        const {name, email, password} = req.body;

        if( !email )    return res.json({ message: 'Email not provided' });
        if( !name )     return res.json({ message: 'User name not provided' });
        if( !password )     return res.json({ message: 'Password not provided' });

        const existingUser = await User.findOne({where: {email} });
        if(existingUser){
            return res.json({message: 'User is already registered'});
        }

        const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
        await User.create({ name, email, password: hashedPassword });

        return res.json({ isSuccess: true, message: `User created successfully` });

    } catch (error) {
        return res.status(500).json({message: `Server error, user not created. ${error}: ${error.message}`});
    }
}