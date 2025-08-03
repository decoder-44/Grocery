package com.example.demo.entity.input;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ProductInput {
    private String productName;
    private int quantity;
    private float price;
    private boolean available;
}