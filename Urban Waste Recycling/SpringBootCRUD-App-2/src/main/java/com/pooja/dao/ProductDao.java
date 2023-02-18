package com.pooja.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.pooja.model.Product;
 

@Repository
public interface ProductDao extends JpaRepository<Product, Integer> {
	public List<Product> findByName(@Param(value = "name") String name);
	
	 
	@Query(value = "select p from Product p where p.category = :category")
	public List<Product> selectByCategory(@Param(value = "category") String category);
	
}
