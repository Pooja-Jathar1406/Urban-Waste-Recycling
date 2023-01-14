package com.pooja.cntr;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.pooja.model.Admin;
import com.pooja.service.AdminService;
 

@RestController
@CrossOrigin
public class AdminController {
	@Autowired
	private AdminService adminService;
	
	@PostMapping(value = {"/admin/add"}) 
	public String AdminAdd(@RequestBody Admin admin) {
		adminService.add(admin);
		return "success";
	} 
	
	@GetMapping(value = {"/admin/{uid}"})
	public Admin AdminGet(@PathVariable int uid) {
		return adminService.getById(uid);
	}
	
	@GetMapping(value = {"/admin/get"})
	public List<Admin> AdminList(){
		return adminService.getAll();
	}
	
	
	@PostMapping(value = {"/admin/login"})
	public String AdminLogin(@RequestBody Admin admin) {
		return adminService.login(admin);
	} 
	
	
//	@PostMapping(value = {"/Admin/loginbyemail"})
//	public boolean getByEmailAndPassword(@RequestBody Admin Admin){
//		Admin u = AdminService.getByEmailAndPassword(Admin.getEmail(),Admin.getPassword());
//		return u == null;
//	}
}
 
 
