import { MongoClient } from "mongodb";
import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()

// const client = new MongoClient(process.env.ATLAS_URI);

// let conn;
// try {
//   conn = await client.connect();
// } catch (e) {
//   console.error(e);
// }

// const db = conn.db("sample_training");

const db = mongoose.connection
mongoose.connect(`${process.env.ATLAS_URI}/sample_training`)

export default db;
