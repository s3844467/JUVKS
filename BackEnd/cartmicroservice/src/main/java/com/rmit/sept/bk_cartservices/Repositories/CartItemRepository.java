package com.rmit.sept.bk_cartservices.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.rmit.sept.bk_cartservices.model.CartItem;

@Repository
public interface CartItemRepository extends CrudRepository<CartItem, Long> {

    @Query(value = "SELECT c from CartItem c WHERE c.user_id = :userId")
    List<CartItem> findCartItemsByUserId(@Param("userId") long userId);
}
