package com.org.foodapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.org.foodapp.dto.FoodProduct;
import com.org.foodapp.service.FoodProductService;
import com.org.foodapp.util.ResponseStructure;

@RestController
public class FoodProductController {
	
	@Autowired
	FoodProductService foodProductService;
	
	@PostMapping("/foodproduct")
	public ResponseEntity<ResponseStructure<FoodProduct>> saveFoodProduct(@RequestBody FoodProduct foodProduct){
		return foodProductService.savefFoodProduct(foodProduct, 2);
	}
	@DeleteMapping("/foodproduct/{foodProdId}")
	public ResponseEntity<ResponseStructure<String>> deleteProduct(@PathVariable int foodProdId){
		return foodProductService.deleteFoodProduct(foodProdId);
	}	

}
