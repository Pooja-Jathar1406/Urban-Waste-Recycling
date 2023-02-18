package com.pooja.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.pooja.model.Feedback;
import com.pooja.model.Product;
 

@Repository
public interface FeedbackDao extends JpaRepository<Feedback, Integer> {
 
	 
	@Query(value = "select p from Feedback p where p.feedback = :feedback")
	public List<Feedback> selectByFeedback(@Param(value = "feedback") String feedback);
	
}
