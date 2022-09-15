package com.org.foodapp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.org.foodapp.dao.FoodOrderDao;
import com.org.foodapp.dao.UserDao;
import com.org.foodapp.dto.FoodOrder;
import com.org.foodapp.dto.User;
import com.org.foodapp.util.ResponseStructure;

@Service
public class FoodOrderService {
	
	@Autowired
	FoodOrderDao foodOrderDao;
	
	
	@Autowired
	UserDao userDao;
	
	
	public ResponseEntity<ResponseStructure<FoodOrder>> saveFoodOrder(FoodOrder foodOrder, int id){
		Optional<User> optional = userDao.getUserById(id);
		ResponseStructure<FoodOrder> structure = new ResponseStructure<>();
		if(optional.isEmpty()) {
			System.out.println("No id found");
			structure.setError(true);
			structure.setMessage("No id Found");
		}
		else {
			foodOrder.setUser(optional.get());
			
		}
		
		structure.setError(false);
		structure.setMessage("Food Order Placed");
		structure.setData(foodOrderDao.saveFoodOrder(foodOrder));
		
		return new ResponseEntity<ResponseStructure<FoodOrder>>(structure, HttpStatus.OK);
	}
	
	public ResponseEntity<ResponseStructure<List<FoodOrder>>> getFoodOrder(int userId) {
		ResponseStructure<List<FoodOrder>> structure = new ResponseStructure<>();
		Optional<User> optional = userDao.getUserById(userId);
		if(optional.isEmpty()) {
			structure.setError(true);
			structure.setMessage("No user found");
		}
		else {
			structure.setError(false);
			structure.setMessage("Food Order Retrived");
			structure.setData(optional.get().getFoodOrders());
		}
		return new ResponseEntity<ResponseStructure<List<FoodOrder>>>(structure, HttpStatus.OK);
	}

	public ResponseEntity<ResponseStructure<FoodOrder>> updateFoodOrder(FoodOrder foodOrder) {
		ResponseStructure<FoodOrder> structure = new ResponseStructure<>();
		
		structure.setError(false);
		structure.setMessage("Food Order Status Updated");
		structure.setData(foodOrderDao.updateFoodOrder(foodOrder));
		
		return new ResponseEntity<ResponseStructure<FoodOrder>>(structure, HttpStatus.OK);
	}
	
	public ResponseEntity<ResponseStructure<String>> deleteFoodOrderById(int id) {
		ResponseStructure<String> structure = new ResponseStructure<>();
		Optional<FoodOrder> optional = foodOrderDao.getFoodOrderById(id);
		if(optional.isEmpty()) {
			structure.setError(true);
			structure.setMessage("Food Order Not Found");
		}
		else {
			structure.setError(false);
			structure.setMessage("Food Order Deleted");
			foodOrderDao.deleteFoodOrderById(id);
		}
		
		return new ResponseEntity<ResponseStructure<String>>(structure, HttpStatus.OK);
	}
	

}
