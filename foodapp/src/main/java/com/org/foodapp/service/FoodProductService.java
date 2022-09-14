package com.org.foodapp.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.org.foodapp.dao.FoodProductDao;
import com.org.foodapp.dao.MenuDao;
import com.org.foodapp.dto.FoodProduct;
import com.org.foodapp.dto.Menu;
import com.org.foodapp.util.ResponseStructure;

@Service
public class FoodProductService {
	
	@Autowired
	FoodProductDao foodProductDao;
	@Autowired
	MenuDao menuDao;
	
	public  ResponseEntity<ResponseStructure<FoodProduct>> savefFoodProduct(FoodProduct foodProduct, int menuId) {
		ResponseStructure<FoodProduct> structure = new ResponseStructure<>();
		Optional<Menu> optional = menuDao.getMenuById(menuId); 
		if(optional.isEmpty()) {
			structure.setError(true);
			structure.setMessage("No menu Id found");
			System.out.println("No menu with that id");
		}else {
			foodProduct.setMenu(optional.get());
			structure.setError(false);
			structure.setMessage("Food Product Saved");
			structure.setData(foodProductDao.saveFoodProduct(foodProduct));
		}		
		return new ResponseEntity<ResponseStructure<FoodProduct>>(structure, HttpStatus.OK);
	}

}
