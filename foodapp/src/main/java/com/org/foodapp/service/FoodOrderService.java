package com.org.foodapp.service;

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
		if(optional.isEmpty()) {
			System.out.println("No id found");
		}
		else {
			foodOrder.setUser(optional.get());
		}
		
		ResponseStructure<FoodOrder> structure = new ResponseStructure<>();
		structure.setError(false);
		structure.setMessage("Food Order Placed");
		structure.setData(foodOrderDao.saveFoodOrder(foodOrder));
		
		return new ResponseEntity<ResponseStructure<FoodOrder>>(structure, HttpStatus.OK);
	}

}
