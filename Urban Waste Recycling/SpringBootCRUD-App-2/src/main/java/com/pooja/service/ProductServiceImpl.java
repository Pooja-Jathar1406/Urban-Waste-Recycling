package com.pooja.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pooja.dao.ProductDao;
import com.pooja.model.Product;

@Service
public class ProductServiceImpl implements ProductService {
	
	@Autowired
	private ProductDao productDao;

	@Override
	public void add(Product product) {
		productDao.save(product);
	}

	@Override
	public void modify(Product product) {
		productDao.save(product);
	}

	@Override
	public void removeById(int id) {
		productDao.deleteById(id); 
	}

	@Override
	public Product getById(int id) {
		Optional<Product> opt = productDao.findById(id);
		if(opt.isPresent()) {
			return opt.get();
		}
		return null;
	}

	@Override
	public List<Product> getAll() {
		Iterable<Product> itr = productDao.findAll();
		List<Product> lst = new ArrayList<Product>();
		itr.forEach(ele->lst.add(ele));
		return lst;
	}
	
	@Override
	public List<Product> getAllByName(String name) {
		return productDao.findByName(name);
	}

	@Override
	public List<Product> getBySalary(float price) {
		return productDao.selectBySalary(price);
	}

	@Override
	public List<Product> getByCategory(String category) { 
		return productDao.selectByCategory(category);
	}

}
