package com.org.foodapp.dao;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.org.foodapp.dto.User;
import com.org.foodapp.repository.UserRepository;

@Repository
public class UserDao {
	
	@Autowired
	UserRepository userRepo;
	
	public User saveUser(User user) {
		return userRepo.save(user);
	}
	
	public Optional<User> getUserById(int id) {
		return userRepo.findById(id);
	}
	
	public User getUserByRole(String role) {
		return userRepo.getUserByRole(role);
	}
	

}
