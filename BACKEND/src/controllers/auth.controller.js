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


export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if( !email || !password ) return res.json({isSuccess: false, message: 'User information not provided'});


        const user = await User.findOne({where: {email} });
        if(!user) return res.json({ isSuccess: false, message: 'User is not registered yet' })

        const match = await bcrypt.compare(password, user.password);
        if (!match) return res.json({ isSuccess: false, message: 'User password incorrect' })

        const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRES_IN});


        return res.json({ isSuccess: true, token });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error' });
    }
}