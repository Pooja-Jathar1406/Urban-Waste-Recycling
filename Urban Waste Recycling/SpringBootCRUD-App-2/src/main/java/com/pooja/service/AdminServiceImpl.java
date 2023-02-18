package com.pooja.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pooja.dao.AdminDao;
import com.pooja.model.Admin;

@Service
public class AdminServiceImpl implements AdminService {
	
	@Autowired
	private AdminDao adminDao; 
	
	@Override
	public void add(Admin Admin) {
		adminDao.save(Admin); 
	}
  
	@Override
	public List<Admin> getAll() {
		Iterable<Admin> itr = adminDao.findAll();
		List<Admin> lst = new ArrayList<Admin>();
		itr.forEach(ele->lst.add(ele));
		return lst;
	}

	@Override
	public Admin getById(int id) {
		Optional<Admin> opt = adminDao.findById(id);
		if(opt.isPresent()) {
			return opt.get();
		}
		return null;
	}

	@Override
	public String login(Admin Admin) { 
		List<Admin> lst = new ArrayList<Admin>();
		lst =adminDao.findAllActiveAdminsNative(Admin.getEmail(),Admin.getPassword());
		if (lst.isEmpty() || lst==null) {
			return "Invalid Admin";
		}
		else {
			return "Login successful";
		}
		
	}
 	
  
}
