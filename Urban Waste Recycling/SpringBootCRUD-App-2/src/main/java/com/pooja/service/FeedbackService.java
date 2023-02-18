package com.pooja.service;

import java.util.List;

import com.pooja.model.Feedback; 

public interface FeedbackService {
	void add(Feedback feedback);  
	List<Feedback> getAll();  
}
