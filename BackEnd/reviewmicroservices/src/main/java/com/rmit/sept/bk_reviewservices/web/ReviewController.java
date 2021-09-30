package com.rmit.sept.bk_reviewservices.web;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rmit.sept.bk_reviewservices.model.Review;
import com.rmit.sept.bk_reviewservices.services.ReviewService;
import com.rmit.sept.bk_reviewservices.services.MapValidationErrorService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/reviews")
public class ReviewController {

    @Autowired
    private MapValidationErrorService mapValidationErrorService;

    @Autowired
    private ReviewService reviewService;


    @PostMapping("/addReview")
    public ResponseEntity<?> registerReview(@Valid @RequestBody Review review, BindingResult result){
        // Validate passwords match
    	// reviewValidator.validate(review,result);

        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(result);
        if(errorMap != null)return errorMap;

        Review newReview = reviewService.saveReview(review);

        return  new ResponseEntity<Review>(newReview, HttpStatus.CREATED);
    }

    @GetMapping("/getAllReviews")
    public ResponseEntity<List<Review>> getAllReviews(){
    	return new ResponseEntity<List<Review>>(reviewService.getAllReviews(), HttpStatus.OK);
    }

    @GetMapping("/getReviewsByBookId/{bookId}")
    public ResponseEntity<List<Review>> getReviewsByBookId(@PathVariable String bookId){
        // long longId = Long.parseLong(bookId);
        // System.out.println(longId);

    	return new ResponseEntity<List<Review>>(reviewService.searchByBookId(bookId), HttpStatus.OK);
    }
    
    @GetMapping("/getReviewsByUser/{userId}")
    public ResponseEntity<List<Review>> getReviewsByUsername(@PathVariable String username){
    	//return username;
		return new ResponseEntity<List<Review>>(reviewService.searchByUsername(username), HttpStatus.ACCEPTED);
    }
}
