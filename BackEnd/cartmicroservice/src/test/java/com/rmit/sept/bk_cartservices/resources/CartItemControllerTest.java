package com.rmit.sept.bk_cartservices.resources;


import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

import com.rmit.sept.bk_cartservices.Repositories.CartItemRepository;
import com.rmit.sept.bk_cartservices.model.CartItem;
import com.rmit.sept.bk_cartservices.services.CartItemService;
import com.rmit.sept.bk_cartservices.web.CartItemController;

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
@WebMvcTest(value = CartItemController.class)
public class CartItemControllerTest {

    @Autowired
    private MockMvc mvc;

    @MockBean
    private CartItemRepository testCartItemRepository;

    @MockBean
    private CartItemService testCartItemService;

    @MockBean
    private CartItemController testCartItemController;

    @Test
    public void getAllCreatedCartItems() throws Exception {
        CartItem testCartItem = new CartItem();
        testCartItem.setId((long) 1);
        testCartItem.setUser_id((long) 1);
        testCartItem.setQuantity(1);
        testCartItem.setBook_id((long) 1);
        testCartItem.setUsername("user@user.com");
        testCartItem.setTitle("Test book");
        testCartItem.setPrice_per(5);
        testCartItem.setTotal_price(5);

        List<CartItem> allCartItems = new ArrayList<>();
        allCartItems.add(testCartItem);

        when(testCartItemRepository.findAll()).thenReturn(allCartItems);

        RequestBuilder requestBuilder = MockMvcRequestBuilders
                .get("/api/carts/getAllCartItems")
                .accept(MediaType.APPLICATION_JSON);

        mvc.perform(requestBuilder);
    }
}
