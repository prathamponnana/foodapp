package com.org.foodapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.org.foodapp.dto.Menu;

public interface MenuRepository extends JpaRepository<Menu, Integer>{

}
