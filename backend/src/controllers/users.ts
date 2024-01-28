import createHttpError from "http-errors";
import UserModel from "../models/user";
import { RequestHandler } from "express";
import bcrypt from "bcrypt"

// // this does not work for me, retrieving logged in users
// export const getAuthenticatedUserData: RequestHandler = async (req, res, next) => {
//     // get currently logged user out of sessions
//     const authenticatedUser = req.session.userId

//     try {
//         if (!authenticatedUser) { throw createHttpError(401, "User not authenticated") }

//         const user = await UserModel.findById(req.session.userId).select("+email").exec();
//         res.status(200).json(user);
//     } catch (error) {
//         next(error)
//     }
// }

export const getAuthenticatedUser: RequestHandler = async (req, res, next) => {
    const authenticatedUser = req.session.userId
    try {
        if (!authenticatedUser) { throw createHttpError(401, "User not authenticated") }

        const user = await UserModel.findById(req.session.userId).select("+email").exec();
        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
};

interface SignUpBody {
    username?: string,
    email?: string,
    password?: string,
}

export const signUp: RequestHandler<unknown, unknown, SignUpBody, unknown> = async (req, res, next) => {
    const username = req.body.username;
    const email = req.body.email;
    // passwordRaw, because for security, you should never store passwords in plan text in your db.
    // you have to hash them.
    const passwordRaw = req.body.password;

    try {
        if (!username || !email || !passwordRaw) { throw createHttpError(400, "400 Bad request. Credentials missing!") }

        const existingUser = await UserModel.findOne({ username: username }).exec();

        if (existingUser) { throw createHttpError(409, "409 Conflict. Username already taken.") }

        const existingEmail = await UserModel.findOne({ email: email }).exec();

        if (existingEmail) { throw createHttpError(409, "409 Conflict. Email already registered. Log in instead.") }

        // 10 is the salting rounds, another security mechanism.
        //there is a way to figure out the pass from a hashed one, with somethign called "rainbow tables", if its a commonly used password.
        const passwordHashed = await bcrypt.hash(passwordRaw, 10)

        const newUser = await UserModel.create({
            username: username,
            email: email,
            password: passwordHashed,
        })
        // (5:30min on yt)here we establish a session.  on req.session we can store data, we store the id of the user that just signed up
        req.session.userId = newUser._id

        res.status(201).json(newUser);
    } catch (error) {
        next(error)
    }
}

interface LoginBody {
    username?: string,
    password?: string,
}

export const login: RequestHandler<unknown, unknown, LoginBody, unknown> = async (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    try {
        if (!username || !password) {
            throw createHttpError(400, "Parameters missing");
        }

        const user = await UserModel.findOne({ username: username }).select("+password +email").exec();

        if (!user) {
            throw createHttpError(401, "Invalid credentials");
        }

        const passwordMatch = await bcrypt.compare(password, user.password!);

        if (!passwordMatch) {
            throw createHttpError(401, "Invalid credentials");
        }

        req.session.userId = user._id;
        res.status(201).json(user);
    } catch (error) {
        next(error);
    }
};

export const logout: RequestHandler = (req, res, next) => {
    req.session.destroy(error => {
        if (error) {
            next(error);
        } else {
            res.sendStatus(200);
        }
    });
};