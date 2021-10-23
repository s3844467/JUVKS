package com.rmit.sept.bk_orderservices.services;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rmit.sept.bk_orderservices.Repositories.OrderRepository;
import com.rmit.sept.bk_orderservices.exceptions.IsbnUserAlreadyExistsException;
import com.rmit.sept.bk_orderservices.model.Order;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    public Order saveOrder (Order newOrder){
        try{
            return orderRepository.save(newOrder);
        }catch (Exception e){
            throw new IsbnUserAlreadyExistsException("The order already exists in database");
        }
    }
    
    public List<Order> getAllOrders(){
    	return (List<Order>) orderRepository.findAll();
    }

    public List<Order> searchByUserId(long userId){
    	return orderRepository.findOrdersByUserId(userId);
    }

    public void deleteByOrderId(long OrderId) {
        orderRepository.deleteById(OrderId);
    }
}
