package com.rmit.sept.bk_reviewservices.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.rmit.sept.bk_reviewservices.model.Review;

@Repository
public interface ReviewRepository extends CrudRepository<Review, Long> {

    @Query(value = "SELECT r from Review r WHERE r.isbn = :isbn")
    List<Review> findByIsbn(@Param("isbn") String isbn);

    @Query(value = "SELECT r from Review r WHERE r.username = :username")
    List<Review> findByUsername(@Param("username") String username);
}
