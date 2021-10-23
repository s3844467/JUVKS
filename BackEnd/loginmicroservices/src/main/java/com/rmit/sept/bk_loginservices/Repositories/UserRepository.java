package com.rmit.sept.bk_loginservices.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.Query;

import com.rmit.sept.bk_loginservices.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.repository.query.Param;


@Repository
public interface UserRepository extends CrudRepository<User, Long> {

    @Query("SELECT u FROM User u WHERE u.username = :username")
    User findByUsername(@Param("username") String username);
    User getById(Long id);
	List<User> findByStatus(String status);
}
