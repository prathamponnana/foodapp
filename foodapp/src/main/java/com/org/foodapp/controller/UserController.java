package com.org.foodapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.org.foodapp.dto.User;
import com.org.foodapp.service.UserService;
import com.org.foodapp.util.ResponseStructure;

@RestController
public class UserController {
	
	@Autowired
	UserService userService;
	
	@PostMapping("/user")
	public ResponseEntity<ResponseStructure<User>> saveUser(@RequestBody User user){
		return userService.saveUser(user);
	}

	
	@GetMapping("/staff")
	public ResponseEntity<ResponseStructure<User>> getUserByRole(@RequestBody User user){
		return userService.getUserByRole(user.getRole());
	}

	@GetMapping("/login")
	public ResponseEntity<ResponseStructure<User>> login(@RequestBody User user) {
		return userService.login(user.getName(),user.getPassword());
	}
	@PutMapping("/user")
	public ResponseEntity<ResponseStructure<User>> updateUser(@RequestBody User user){
		return userService.updateUser(user);
	}
	@DeleteMapping("/user/{userId}")
	public ResponseEntity<ResponseStructure<String>> deleteUser(@PathVariable int userId){
		return userService.deleteUser(userId);
	} 

//	@GetMapping("/login")
//	public ResponseEntity<ResponseStructure<User>> login(@RequestBody User user) {
//		return userService.login(user.getName() , user.getPassword());
//	}
}
