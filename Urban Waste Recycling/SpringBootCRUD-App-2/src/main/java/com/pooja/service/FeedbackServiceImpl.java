package com.pooja.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pooja.dao.FeedbackDao;
import com.pooja.dao.ProductDao;
import com.pooja.model.Feedback;
import com.pooja.model.Product;

@Service
public class FeedbackServiceImpl implements FeedbackService {
	
	@Autowired
	private FeedbackDao feedbackDao;

	@Override
	public void add(Feedback feedback) {
		feedbackDao.save(feedback);
	}
 
	@Override
	public List<Feedback> getAll() {
		Iterable<Feedback> itr = feedbackDao.findAll();
		List<Feedback> lst = new ArrayList<Feedback>();
		itr.forEach(ele->lst.add(ele));
		return lst;
	}
	 
}
