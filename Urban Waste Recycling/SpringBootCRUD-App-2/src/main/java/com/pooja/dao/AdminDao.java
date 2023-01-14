package com.pooja.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.pooja.model.Admin;

 
@Repository
public interface AdminDao extends JpaRepository<Admin, Integer> {
	public List<Admin> findByName(@Param(value = "name") String name);
	
//	@Query(value = "select p from admin p where p.email = :email")
//	public List<Admin> selectByEmail(@Param(value = "email") String email);
//	
//	@Query(value = "select p from admin p where p.password = :password")
//	public List<Admin> selectByPassword(@Param(value = "password") String password);
	
	@Query(value = "SELECT * FROM admin a WHERE a.email = :email and a.password=:password", nativeQuery = true)
	List<Admin> findAllActiveAdminsNative(@Param(value = "email") String email, @Param(value = "password") String password);

//    @Query(value = "select p from Admin p where p.email= :email and p.password=:password" )
//    public Admin findByEmailAndPhone(@Param(value = "email") String email,@Param(value = "password") String password);

}