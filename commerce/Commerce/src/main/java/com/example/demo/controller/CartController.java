package com.example.demo.controller;

import com.example.demo.entity.Cart;
import com.example.demo.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.stereotype.Controller;

@Controller
public class CartController {
    @Autowired
    private CartService CartService;

    @MutationMapping
    public Cart createEmptyCart() {
        return CartService.createEmptyCart();
    }
}
