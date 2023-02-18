package com.pooja.service;

import java.util.List;
 
import com.pooja.model.Admin;

public interface AdminService {
	void add(Admin admin);  
	Admin getById(int id);
	List<Admin> getAll(); 
	String login(Admin admin); 
}
