package com.example.demo.service.helperFunc;

import com.example.demo.repository.CartRepository;
import com.example.demo.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Random;

@Component
public class GenerateUniqueIds {

    @Autowired
    private ProductRepository ProductRepository;
    @Autowired
    private CartRepository CartRepository;

    private final Random random = new Random();

    public int generateUniqueId() {
        int id;
        do {
            id = 10000 + random.nextInt(90000);
        } while (ProductRepository.existsByUid(id));
        return id;
    }

    public String generateUniqueIdForCart() {
        String cartId;
        do {
            cartId = String.valueOf(1000000 + random.nextInt(9000000))+ (char) ('A' + random.nextInt(26))
                    + (char) ('a' + random.nextInt(26));;
        } while (CartRepository.existsByCartId(cartId));
        return cartId;
    }
}
