package com.rmit.sept.bk_reviewservices.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.rmit.sept.bk_reviewservices.model.Review;

@Repository
public interface ReviewRepository extends CrudRepository<Review, Long> {

    @Query(value = "SELECT r FROM Review r WHERE r.book_id = :bookId")
    List<Review> findReviewsByBookId(@Param("bookId") String bookId);

    @Query(value = "SELECT r FROM Review r WHERE r.user_id = :user_id")
    List<Review> findReviewsByUserId(@Param("user_id") String user_id);

    @Query(value = "SELECT r FROM Review r WHERE r.user_id = :userId AND r.book_id = :bookId")
    Review findByUserIdBookId(@Param("userId") String userId, @Param("bookId") String bookId);
}
