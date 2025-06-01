package com.example.demo.controller;

import com.example.demo.entity.ProductInput;
import com.example.demo.entity.Products;
import com.example.demo.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
public class ProductController {

    @Autowired
    private ProductService ProductService;

    @QueryMapping
    public List<Products> getAllProducts() {
        return (List<Products>) ProductService.getAllProducts();
    }

    @MutationMapping
    public Products createOrAddProduct(@Argument ProductInput productInput) {
        return ProductService.createOrAddProduct(productInput);
    }

    @QueryMapping
    public Products getProductById(@Argument int id){
        return ProductService.getProductById(id);
    }
}
