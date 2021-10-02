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

    @Query(value = "SELECT r FROM Review r WHERE r.username = :username")
    List<Review> findByUsername(@Param("username") String username);

    @Query(value = "SELECT r FROM Review r WHERE r.username = :username AND r.book_id = :bookId")
    Review findByUsernameBookId(@Param("username") String username, @Param("bookId") String bookId);
}
