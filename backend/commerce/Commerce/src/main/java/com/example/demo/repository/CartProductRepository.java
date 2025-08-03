package com.example.demo.repository;

import com.example.demo.entity.CartProducts;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CartProductRepository extends JpaRepository<CartProducts, Long> {
    List<CartProducts> findByCart_CartId(String cartId);
}
