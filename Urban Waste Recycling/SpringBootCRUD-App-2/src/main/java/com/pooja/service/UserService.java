package com.pooja.service;

import java.util.List;

import com.pooja.model.Product;
import com.pooja.model.User;

public interface UserService {
	void add(User user);  
	User getById(int id);
	List<User> getAll(); 
	String login(User user);
//	User getByEmailAndPassword(String email, String password);
}
