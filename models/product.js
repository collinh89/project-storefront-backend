import pkg from "mongoose";
const { Schema: _Schema, model } = pkg;

const Schema = _Schema;

const productSchema = new Schema(
	{
		product_name: { type: String, required: true },
		product_desc: { type: String, required: true },
		product_price: { type: Number, required: true },
		// product_pic: { type: Array, required: true },
	},
	{
		timestamps: true,
	}
);

const Product = model("Product", productSchema);

export default Product;
