package com.org.foodapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.org.foodapp.dto.User;

public interface UserRepository extends JpaRepository<User, Integer>{

}
