package com.rmit.sept.bk_reviewservices.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rmit.sept.bk_reviewservices.Repositories.ReviewRepository;
import com.rmit.sept.bk_reviewservices.exceptions.IsbnUserAlreadyExistsException;
import com.rmit.sept.bk_reviewservices.model.Review;

@Service
public class ReviewService {

    @Autowired
    private ReviewRepository reviewRepository;

    public Review saveReview (Review newReview){
        try{
            return reviewRepository.save(newReview);
        }catch (Exception e){
            throw new IsbnUserAlreadyExistsException("The Review already exists in database");
        }
    }
    
    public List<Review> getAllReviews(){
    	return (List<Review>) reviewRepository.findAll();
    }

    public List<Review> searchByUsername(String username){
    	return reviewRepository.findByUsername(username);
    }

    public List<Review> searchByIsbn(String isbn){
    	return reviewRepository.findByIsbn(isbn);
    }
}
