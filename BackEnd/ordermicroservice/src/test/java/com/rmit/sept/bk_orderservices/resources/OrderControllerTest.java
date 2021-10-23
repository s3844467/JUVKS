package com.rmit.sept.bk_orderservices.resources;


import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

import com.rmit.sept.bk_orderservices.Repositories.OrderRepository;
import com.rmit.sept.bk_orderservices.model.Order;
import com.rmit.sept.bk_orderservices.services.OrderService;
import com.rmit.sept.bk_orderservices.web.OrderController;

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
@WebMvcTest(value = OrderController.class)
public class OrderControllerTest {

    @Autowired
    private MockMvc mvc;

    @MockBean
    private OrderRepository testOrderRepository;

    @MockBean
    private OrderService testOrderService;

    @MockBean
    private OrderController testOrderController;

    @Test
    public void getAllCreatedOrders() throws Exception {
        Order testOrder = new Order();
        testOrder.setId((long) 1);
        testOrder.setOrderNumber((long) 1);
        testOrder.setUser_id((long) 1);
        testOrder.setFullName("Vincent Tso");
        testOrder.setUsername("user@user.com");
        testOrder.setPhone("0400000000");
        testOrder.setAddress("123 Example Street");
        testOrder.setCity("Melbourne");
        testOrder.setState("Victoria");
        testOrder.setZipCode(3000);
        testOrder.setTotal_price(30);
        testOrder.setInstructions("Leave at door.");

        List<Order> allOrders = new ArrayList<>();
        allOrders.add(testOrder);

        when(testOrderRepository.findAll()).thenReturn(allOrders);

        RequestBuilder requestBuilder = MockMvcRequestBuilders
                .get("/api/carts/getAllOrders")
                .accept(MediaType.APPLICATION_JSON);

        mvc.perform(requestBuilder);
    }
}
