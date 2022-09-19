package com.org.foodapp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.org.foodapp.dto.FoodProduct;

public interface FoodProductRepository extends JpaRepository<FoodProduct, Integer>{
	@Query("SELECT f from FoodProduct f WHERE menu_id = :menu_id")
	  List<FoodProduct> getFoodProductsInMenu(@Param("menu_id") int menu_id);
}
