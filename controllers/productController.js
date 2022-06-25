import Product from "../models/product.js";

const product_get_all = (req, res) => {
	Product.find()
		.sort({ createdAt: -1 })
		.then((result) => {
			res.status(200).send(result);
		})
		.catch((err) => {
			res
				.status(400)
				.send(`There is an error in the server while loading products`);
		});
};

const product_get_byID = (req, res) => {
	const id = req.params.id;
	Product.findById(id)
		.then((result) => {
			res.status(200).send(result);
		})
		.catch((err) => {
			res.status(400).send(err);
		});
};
const product_create = (req, res) => {
	const product = new Product(req.body);
	product
		.save()
		.then((result) => {
			res.status(201).send(result);
		})
		.catch((err) => {
			res.status(400).send(err);
		});
};

const product_delete = (req, res) => {
	const id = req.params.id;
	Product.findByIdAndDelete(id)
		.then((result) => {
			res.status(200).send(result);
		})
		.catch((err) => {
			res.status(400).send(err);
		});
};

export default {
	product_get_all,
	product_get_byID,
	product_create,
	product_delete,
};
