package com.example.demo.service;

import com.example.demo.entity.ProductInput;
import com.example.demo.entity.Products;
import com.example.demo.repository.ProductRepository;
import com.example.demo.service.helperFunc.GenerateUniqueIds;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductService {

    @Autowired
    private ProductRepository ProductRepository;

    @Autowired
    private GenerateUniqueIds generateUniqueIds;

    public Iterable<Products> getAllProducts() {
        return ProductRepository.findAll();
    }

    public Products createOrAddProduct(ProductInput productInput) {
        int uid = generateUniqueIds.generateUniqueId();
        String iid = uid + "-" + generateUniqueIds.generateUniqueId();

        Products product = new Products();
        product.setProductName(productInput.getProductName());
        product.setUid(uid);
        product.setIid(iid);
        product.setQuantity(productInput.getQuantity());
        product.setPrice(productInput.getPrice());
        product.setAvailable(productInput.isAvailable());

        return ProductRepository.save(product);
    }

    public Products getProductById(int id) {
        return ProductRepository.getReferenceById(id);
    }
}
