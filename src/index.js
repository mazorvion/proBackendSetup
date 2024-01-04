// require('dotenv').config({path: './env'})
// the above statement is working but in order to maintain
// code in es6 you can do this as well,
// checkout about dotenv/config --experimental-json-modules in package json experimentaljson is only required if you're using this es6 version to import dotenv

import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})


connectDB()


/*

************* APPROACH 1 to Connect to DB ************

import express from "express"
const app = express()
// ALWAYS WRAP IN TRY CATCH
// DB is always in another continent
// hence it takes time so use async await

;( async () => {

    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("ERROR", error)
            throw error
        })
    }catch(error) {
        console.error("ERROR: ", error)
        throw err
    }

    app.listen(process.env.PORT, () => {
        console.log(`App is listening on port ${process.env.PORT}`)
    })

})() // iife, immedietly invoked function expression
    // mostly professionals start iife with semicolon cuz what
    // if the other person forgot to add it before,
    // you can remove the semicolon if you know that there's
    // nothing written before iife

    */