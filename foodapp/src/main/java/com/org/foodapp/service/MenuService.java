package com.org.foodapp.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.org.foodapp.dao.MenuDao;
import com.org.foodapp.dao.UserDao;
import com.org.foodapp.dto.Menu;
import com.org.foodapp.dto.User;
import com.org.foodapp.util.ResponseStructure;

@Service
public class MenuService {
	
	@Autowired
	MenuDao menuDao;
	
	@Autowired
	UserDao userDao;
	
	public ResponseEntity<ResponseStructure<Menu>> saveMenu(Menu menu, int id){
		
		Optional<User> optional = userDao.getUserById(id);
		if(optional.isEmpty()) {
			System.out.println("User Not Found");
		}
		else {
			menu.setUser(optional.get());
		}
		ResponseStructure<Menu> structure = new ResponseStructure<>();
		structure.setError(false);
		structure.setMessage("Menu saved");
		structure.setData(menuDao.saveMenu(menu));
		return new ResponseEntity<ResponseStructure<Menu>> (structure, HttpStatus.OK) ;
		
	}

}
