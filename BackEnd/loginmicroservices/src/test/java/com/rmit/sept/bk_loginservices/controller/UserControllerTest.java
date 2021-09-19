package com.rmit.sept.bk_loginservices.controller;


import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.rmit.sept.bk_loginservices.model.User;
import com.rmit.sept.bk_loginservices.security.JwtAuthenticationEntryPoint;
import com.rmit.sept.bk_loginservices.security.JwtTokenProvider;
import com.rmit.sept.bk_loginservices.services.CustomUserDetailsService;
import com.rmit.sept.bk_loginservices.web.UserController;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.skyscreamer.jsonassert.JSONAssert;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import static org.mockito.BDDMockito.given;
import static org.hamcrest.collection.IsCollectionWithSize.hasSize;
import static org.hamcrest.core.Is.is;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;

@RunWith(SpringRunner.class)
@WebMvcTest(value = UserController.class)
public class UserControllerTest {

   @Autowired
   private MockMvc mvc;

   @MockBean
   private UserController userController;

   @MockBean
   private JwtAuthenticationEntryPoint testEntryPoint;

   @MockBean
   private CustomUserDetailsService testDetailsService;

   @MockBean
   private JwtTokenProvider testTokenProvider;
   
   User testUser = new User();

    @Test
    public void getUsername() throws Exception {
        // Create test user
        testUser.setId((long) 1);
        testUser.setUsername("user@user.com");
        testUser.setFullName("user");
        testUser.setPassword("password");
        testUser.setConfirmPassword("password");
        testUser.setAccountType("Public");
        testUser.setCreate_At(new Date());
        testUser.setUpdate_At(new Date());

        List<User> allUsers = new ArrayList<>();
        allUsers.add(testUser);

       given(userController.getAllUsers()).willReturn(allUsers);

        ObjectMapper mapper = new ObjectMapper();       
        String testUserJson = mapper.writeValueAsString(testUser);
        mvc.perform(get("/api/users/allUsers")
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(testUserJson)
                    )
            .andExpect(status().isOk())
            .andExpect(jsonPath("$", hasSize(1)))
            .andExpect(jsonPath("$[0].username", is(testUser.getUsername())));
    }

    @Test
    public void getName() throws Exception {

    }

    @Test
    public void getStreet() throws Exception {

    }

    @Test
    public void getMobile() throws Exception {

    }

}
