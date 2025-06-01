import { GET_ALL_PRODUCTS } from "../commerceQueries/getAllProductsQuery.js"
import { HTTP_METHOD } from "../constants/constants.js";
import { CommerceRequestService } from "./commerceRequestOps.js"

export class GetAllProducts {
    constructor() {
        this.commerceRequestService = new CommerceRequestService();
    }

    async getProducts(inputData) {
        const variables = {
            ...(inputData ?? {})
        }
        try {
            const response = await this.commerceRequestService.performQuery(
                HTTP_METHOD.POST,
                GET_ALL_PRODUCTS,
                variables
            )
            return response;
        } catch (error) {
            return error.message;
        }
    }
}