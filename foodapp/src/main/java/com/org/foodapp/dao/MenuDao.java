package com.org.foodapp.dao;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.org.foodapp.dto.Menu;
import com.org.foodapp.repository.MenuRepository;

@Repository
public class MenuDao {
	
	@Autowired
	MenuRepository menuRepository;
	
	public Menu saveMenu(Menu menu) {
		return menuRepository.save(menu);
	}
	public Optional getMenuById(int id) {
		return menuRepository.findById(id);
	}

}
