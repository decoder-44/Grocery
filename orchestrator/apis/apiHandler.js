import { getAllProductsInfo } from "../apis/api/getAllProductsInfo.js"

export default function apiHandler(app) {
    app.post("/api/commerce/get-all-products", getAllProductsInfo);
}