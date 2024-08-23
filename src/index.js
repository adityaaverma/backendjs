import dotenv from 'dotenv'
import mongoos from 'mongoose'
import { DB_NAME } from './constants'
import express from 'express'
import connectDB from "./db"
dotenv.config({
    path:'./env'
})
