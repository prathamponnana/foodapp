package com.org.foodapp.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.org.foodapp.dto.Item;
import com.org.foodapp.repository.ItemRepository;

@Repository
public class ItemDao {
	
	@Autowired
    ItemRepository itemRepo;
    
    public Item saveItem(Item item) {
        return itemRepo.save(item);
    }



}
