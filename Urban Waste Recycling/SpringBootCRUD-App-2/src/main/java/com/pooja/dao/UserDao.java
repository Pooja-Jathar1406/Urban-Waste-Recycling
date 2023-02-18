package com.pooja.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.pooja.model.Product;
import com.pooja.model.User;
 

@Repository
public interface UserDao extends JpaRepository<User, Integer> {
	public List<User> findByName(@Param(value = "name") String name);
	
	@Query(value = "select p from User p where p.email = :email")
	public List<User> selectByEmail(@Param(value = "email") String email);
	
	@Query(value = "select p from User p where p.password = :password")
	public List<User> selectByPassword(@Param(value = "password") String password);
	
	@Query(value = "SELECT * FROM user u WHERE u.email = :email and u.password=:password", nativeQuery = true)
	List<User> findAllActiveUsersNative(@Param(value = "email") String email, @Param(value = "password") String password);
 
}
