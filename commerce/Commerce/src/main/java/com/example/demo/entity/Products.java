package com.example.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
public class Products {
    @Id
    @GeneratedValue(strategy  = GenerationType.IDENTITY)
    int id;
    String productName;
    int uid;
    String iid;
    int quantity;
    float price;
    boolean available;
}