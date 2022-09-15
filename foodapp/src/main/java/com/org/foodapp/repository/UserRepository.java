package com.org.foodapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.org.foodapp.dto.User;

public interface UserRepository extends JpaRepository<User, Integer>{

	
	@Query("SELECT u FROM User u WHERE role =:role")
	User getUserByRole(@Param("role") String role);
	
	@Query("SELECT u FROM User u WHERE name =:name AND password =:password")
	User login(@Param("name") String name, @Param("password") String password);


  @Query("SELECT u FROM User u WHERE name =:name AND password =:password")
  User getByNameAndPassword(@Param("name") String name, @Param("password") String password);

}



