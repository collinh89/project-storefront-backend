// const { MongoClient, ServerApiVersion } = require("mongodb");
import { MongoClient, ServerApiVersion } from "mongodb";
import pkg from "mongoose";
import express from "express";
import cors from "cors";
import productRoutes from "./routes/productRoutes.js";
import jsonpkg from "body-parser";

const { json } = jsonpkg;
const { connect } = pkg;
const app = express();
const PORT = 8081;

const dbURI =
	"mongodb+srv://collinh89:618Cash9209414@project-storefront-clus.dm3oiym.mongodb.net/Project-Storefront-Database?retryWrites=true&w=majority";

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
