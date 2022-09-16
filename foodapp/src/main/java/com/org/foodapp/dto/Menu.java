package com.org.foodapp.dto;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
public class Menu {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@JsonManagedReference
	@OneToMany(cascade = CascadeType.ALL,mappedBy = "menu")
	List<FoodProduct> foodProducts;
	
	@OneToOne
	@JoinColumn(nullable = false, unique=true)
	User user;
	//Manager

	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public List<FoodProduct> getFoodProducts() {
		return foodProducts;
	}
	public void setFoodProducts(List<FoodProduct> foodProducts) {
		this.foodProducts = foodProducts;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	
	
}
