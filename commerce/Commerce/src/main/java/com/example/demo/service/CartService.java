package com.example.demo.service;

import com.example.demo.entity.Cart;
import com.example.demo.repository.CartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.service.helperFunc.GenerateUniqueIds;

@Service
public class CartService {

    @Autowired
    private CartRepository CartRepository;
    @Autowired
    private GenerateUniqueIds GenerateUniqueIds;

    public Cart createEmptyCart() {
        String cartId = GenerateUniqueIds.generateUniqueIdForCart();
        Cart cart = new Cart();
        cart.setCartId(cartId);
        return CartRepository.save(cart);
    }
}
