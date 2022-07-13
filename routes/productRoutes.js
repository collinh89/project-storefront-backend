import { Router } from "express";
import productController from "../controllers/productController.js";

const router = Router();

router.get("/getAll", productController.product_get_all);
router.get("/:id", productController.product_get_byID);
router.post("/", productController.product_create);
router.delete("/:id", productController.product_delete);

export default router;
