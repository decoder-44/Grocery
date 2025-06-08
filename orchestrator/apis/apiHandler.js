import { getAllProductsInfo } from "../apis/api/getAllProductsInfo.js"
import { createEmptyCartInfo } from "./api/createEmptyCartInfo.js";

export default function apiHandler(app) {
    app.post("/api/commerce/get-all-products", getAllProductsInfo);
    app.post("/api/commerce/create-empty-cart", createEmptyCartInfo);
}