package com.org.foodapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.org.foodapp.dto.Menu;
import com.org.foodapp.service.MenuService;
import com.org.foodapp.util.ResponseStructure;

@RestController
public class MenuController {
	
	@Autowired
	MenuService menuService;
	
	@PostMapping("/menu")
	public ResponseEntity<ResponseStructure<Menu>> saveMenu(@RequestBody Menu menu){
		return menuService.saveMenu(menu, 2);
	}
	@DeleteMapping("/menu/{menuId}")
	public ResponseEntity<ResponseStructure<String>> deleteUser(@PathVariable int menuId){
		return menuService.deleteMenu(menuId);
	}

}
