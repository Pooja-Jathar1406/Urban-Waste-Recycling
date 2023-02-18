package com.pooja.service;

import java.util.List;

import com.pooja.model.Product;

public interface ProductService {
	void add(Product product);
	void modify(Product product);
	void removeById(int id);
	Product getById(int id);
	List<Product> getAll();
	List<Product> getAllByName(String name);
	List<Product> getByCategory(String category);
}
