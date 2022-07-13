// const { MongoClient, ServerApiVersion } = require("mongodb");
import { MongoClient, ServerApiVersion } from "mongodb";
import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import productRoutes from "./routes/productRoutes.js";
import jsonpkg from "body-parser";
import dotenv from "dotenv";
dotenv.config();

const { json } = jsonpkg;
const { connect } = mongoose;
const app = express();
const PORT = 8081;

const dbURI = process.env.DB_URL;

connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(function (result) {
		console.log("Database is connected");
	})
	.catch((err) => console.log(err));

// Apply CORS policy
app.use(cors());

// "Hello from homepage" is shown  when visiting http://localhost:8081/
app.get("/", (req, res) => res.send("Hello from homepage."));

// Assign the PORT to our app
app.listen(PORT, () =>
	console.log(`Server Running on port: http://localhost:${PORT}`)
);

/**bodyParser.json(options)
 * Parses the text as JSON and exposes the resulting object on req.body.
 */
app.use(json());

//product routes
app.use("/product", productRoutes);
app.use("/product/getAll", productRoutes);
