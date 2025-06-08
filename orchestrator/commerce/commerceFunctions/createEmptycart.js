import { CommerceRequestService } from "./commerceRequestOps.js";
import { CREATE_EMPTY_CART } from "../commerceMutations/createEmptyCartMutation.js"
import { HTTP_METHOD } from "../constants/constants.js";

export class CreateEmptyCart {
    constructor() {
        this.commerceRequestService = new CommerceRequestService();
    }

    async createEmptyCart() {
        try{
            const response = this.commerceRequestService.performQuery(
                HTTP_METHOD.POST,
                CREATE_EMPTY_CART,
                {}
            );
            return response;
        }catch(error){
            return error.message;
        }
    }
}