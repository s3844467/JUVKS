package com.rmit.sept.bk_reviewservices.resources;


import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.ArrayList;
import java.util.List;
import java.util.Date;  

import com.rmit.sept.bk_reviewservices.Repositories.ReviewRepository;
import com.rmit.sept.bk_reviewservices.model.Review;
import com.rmit.sept.bk_reviewservices.services.ReviewService;
import com.rmit.sept.bk_reviewservices.web.ReviewController;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

@RunWith(SpringRunner.class)
@WebMvcTest(value = ReviewController.class)
public class ReviewControllerTest {

    @Autowired
    private MockMvc mvc;

    @MockBean
    private ReviewRepository testReviewRepository;

    @MockBean
    private ReviewService testReviewService;

    @MockBean
    private ReviewController testReviewController;

    @Test
    public void getAllCreatedReviews() throws Exception {
        Review testReview = new Review();
        testReview.setId((long) 1);
        testReview.setComment("This book was amazing. From the first page I was hooked in, and over the course of three days I managed to complete the book and find myself desiring more. I 100% recommend reading this book if you have the chance.");
        testReview.setUsername("user@user.com");
        testReview.setBook_id("1");
        Date newDate = new Date();
        testReview.setDate_added(newDate.toString());

        List<Review> allReviews = new ArrayList<>();
        allReviews.add(testReview);

        when(testReviewRepository.findAll()).thenReturn(allReviews);

        RequestBuilder requestBuilder = MockMvcRequestBuilders
                .get("/api/reviews/getAllReviews")
                .accept(MediaType.APPLICATION_JSON);

        mvc.perform(requestBuilder);

        // RequestBuilder requestBuilder = MockMvcRequestBuilders
        //         .get("/api/reviews/getAllReviews")
        //         .accept(MediaType.APPLICATION_JSON);

        // String expected = "[{id:1,title:test review,author:test author,isbn:123456789,category:test category}]";
        // MvcResult result = mvc.perform(requestBuilder)
        //                         .andExpect(status().isOk())
        //                         .andReturn();

        // JSONObject jsonObj = new JSONObject(result.getResponse().getContentAsString());
        // JSONAssert.assertEquals(expected, jsonObj, false);
    }
}
