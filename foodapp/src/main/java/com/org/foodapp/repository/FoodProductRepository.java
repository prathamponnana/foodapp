package com.org.foodapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.org.foodapp.dto.FoodProduct;

public interface FoodProductRepository extends JpaRepository<FoodProduct, Integer>{

}
