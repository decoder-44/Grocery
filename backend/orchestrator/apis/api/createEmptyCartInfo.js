import { CreateEmptyCart } from "../../commerce/commerceFunctions/createEmptycart.js"

export const createEmptyCartInfo = async (req, res) => {
    try {
        const createEmptyCart = new CreateEmptyCart();
        const response = await createEmptyCart.createEmptyCart();
        return res.status(200).json(response);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};