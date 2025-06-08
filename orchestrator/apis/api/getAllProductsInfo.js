import { GetAllProducts } from "../../commerce/commerceFunctions/getAllProducts.js";

export const getAllProductsInfo = (async (req, res) => {
    const inputdata = req.body?.input ?? null;
    try {
        const getAllProducts = new GetAllProducts();
        const response = await getAllProducts.getProducts(inputdata);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
});