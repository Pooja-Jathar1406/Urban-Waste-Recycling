package com.pooja.cntr;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.pooja.model.Feedback;
import com.pooja.model.Product;
import com.pooja.service.FeedbackService;
import com.pooja.service.ProductService;

@RestController
@CrossOrigin
public class FeedbackController {
	
	@Autowired
	private FeedbackService feedbackService;
	
	@PostMapping(value = {"/feedback/add"}) 
	public String productAdd(@RequestBody Feedback feedback) {
		feedbackService.add(feedback);
		return "success";
	} 
	
	@GetMapping(value = {"/feedback"})
	public List<Feedback> productList(){
		return feedbackService.getAll();
	} 
	
}
