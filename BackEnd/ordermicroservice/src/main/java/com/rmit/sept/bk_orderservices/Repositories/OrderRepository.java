package com.rmit.sept.bk_orderservices.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.rmit.sept.bk_orderservices.model.Order;

@Repository
public interface OrderRepository extends CrudRepository<Order, Long> {

    @Query(value = "SELECT o from Order o WHERE o.user_id = :userId")
    List<Order> findOrdersByUserId(@Param("userId") long userId);
}
