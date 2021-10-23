package com.rmit.sept.bk_orderservices.web;

import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rmit.sept.bk_orderservices.model.Order;
import com.rmit.sept.bk_orderservices.services.OrderService;
import com.rmit.sept.bk_orderservices.services.MapValidationErrorService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/orders")
public class OrderController {

    @Autowired
    private MapValidationErrorService mapValidationErrorService;

    @Autowired
    private OrderService orderService;


    @PostMapping("/addOrder")
    public ResponseEntity<?> addOrder(@Valid @RequestBody Order order, BindingResult result){
        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(result);
        if(errorMap != null)return errorMap;

        Order newOrder = orderService.saveOrder(order);

        return  new ResponseEntity<Order>(newOrder, HttpStatus.CREATED);
    }

    @GetMapping("/getAllOrders")
    public ResponseEntity<List<Order>> getAllOrders(){
    	return new ResponseEntity<List<Order>>(orderService.getAllOrders(), HttpStatus.OK);
    }

    @GetMapping("/getOrdersByUser/{userId}")
    public ResponseEntity<List<Order>> getOrdersByUser(@PathVariable long userId){
    	return new ResponseEntity<List<Order>>(orderService.searchByUserId(userId), HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/deleteOrder/{orderId}")
    public void deleteOrderFromUser(@PathVariable long orderId) {
        orderService.deleteByOrderId(orderId);
    }
}
