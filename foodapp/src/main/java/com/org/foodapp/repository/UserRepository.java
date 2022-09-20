package com.org.foodapp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.org.foodapp.dto.User;

public interface UserRepository extends JpaRepository<User, Integer>{
  @Query("SELECT u FROM User u WHERE name =:name AND password =:password AND role = :role")
  User getByNameAndPassword(@Param("name") String name, @Param("password") String password, @Param("role") String role);
  
  @Query("SELECT u FROM User u WHERE role = :role")
  List<User> getAllStaffs(@Param("role") String role);
  
  @Query("SELECT u FROM User u WHERE email =:email AND password =:password")
  User getByNameAndPasswordBackup(@Param("email") String email, @Param("password") String password);
 
}
