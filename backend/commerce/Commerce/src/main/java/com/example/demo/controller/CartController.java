package com.example.demo.controller;

import com.example.demo.entity.Cart;
import com.example.demo.entity.CartProducts;
import com.example.demo.entity.Products;
import com.example.demo.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
public class CartController {
    @Autowired
    private CartService CartService;

    @MutationMapping
    public Cart createEmptyCart() {
        return CartService.createEmptyCart();
    }

    @MutationMapping
    public CartProducts addProductToCart(@Argument String cartId, @Argument int productId) {
        return CartService.addProductToCart(cartId, productId);
    }

    @QueryMapping
    public List<Products> getCartProductsByCartId(@Argument String cartId) {
        return CartService.getCartProductsByCartId(cartId);
    }
}
