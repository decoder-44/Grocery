package com.example.demo.service;

import com.example.demo.entity.Cart;
import com.example.demo.entity.CartProducts;
import com.example.demo.entity.Products;
import com.example.demo.repository.CartProductRepository;
import com.example.demo.repository.CartRepository;
import com.example.demo.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.service.helperFunc.GenerateUniqueIds;
import java.util.*;
import java.util.stream.Collectors;

@Service
public class CartService {

    @Autowired
    private CartRepository CartRepository;
    @Autowired
    private GenerateUniqueIds GenerateUniqueIds;
    @Autowired
    private CartProductRepository CartProductRepository;
    @Autowired
    private ProductRepository ProductRepository;

    public Cart createEmptyCart() {
        String cartId = GenerateUniqueIds.generateUniqueIdForCart();
        Cart cart = new Cart();
        cart.setCartId(cartId);
        return CartRepository.save(cart);
    }

    public CartProducts addProductToCart(String cartId, int productId) {
        CartProducts cartProducts = new CartProducts();
        Cart cart = CartRepository.findByCartId(cartId);
        Products products = ProductRepository.getProductById(productId);
        cartProducts.setCart(cart);
        cartProducts.setProducts(products);
        return CartProductRepository.save(cartProducts);
    }

    public List<Products> getCartProductsByCartId(String cartId) {
        List<CartProducts> cartProducts = CartProductRepository.findByCart_CartId(cartId);
        return cartProducts.stream()
                .map(CartProducts::getProducts)
                .collect(Collectors.toList());
    }
}
