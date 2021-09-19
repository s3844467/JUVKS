package com.rmit.sept.bk_loginservices.controller;


import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.rmit.sept.bk_loginservices.model.User;
import com.rmit.sept.bk_loginservices.security.JwtAuthenticationEntryPoint;
import com.rmit.sept.bk_loginservices.security.JwtTokenProvider;
import com.rmit.sept.bk_loginservices.services.CustomUserDetailsService;
import com.rmit.sept.bk_loginservices.services.UserService;
import com.rmit.sept.bk_loginservices.web.UserController;
import com.rmit.sept.bk_loginservices.Repositories.UserRepository;

import org.junit.Test;
import org.skyscreamer.jsonassert.JSONAssert;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.util.StringUtils;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.RequestBuilder;

import static org.mockito.Mockito.when;
import static org.hamcrest.core.Is.is;
import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@WebMvcTest(value = UserController.class)
public class UserControllerTest {

    @Autowired
    private MockMvc mvc;

    @MockBean
    private UserRepository testUserRepository;

    @MockBean
    private UserController testUserController;

    @MockBean
    private JwtAuthenticationEntryPoint testEntryPoint;

    @MockBean
    private UserService testUserService;

    @MockBean
    private CustomUserDetailsService testDetailsService;

    @MockBean
    private JwtTokenProvider testTokenProvider;

    @Test
    public void getAllCreatedUsers() throws Exception {
        // Create test user
        User testUser = new User();
        testUser.setId((long) 1);
        testUser.setUsername("testuser@user.com");
        testUser.setFullName("testuser");
        testUser.setPassword("password");
        testUser.setConfirmPassword("password");
        testUser.setAccountType("Public");

        List<User> allUsers = new ArrayList<>();
        allUsers.add(testUser);

        when(testUserController.getAllUsers()).thenReturn(allUsers);

        RequestBuilder requestBuilder = MockMvcRequestBuilders
                .get("/api/users/allUsers")
                .accept(MediaType.APPLICATION_JSON);

        String expected = "1";
        MvcResult result = mvc.perform(requestBuilder)
                                .andExpect(status().isOk())
                                .andReturn();

        int count = StringUtils.countOccurrencesOf(result.getResponse().getContentAsString(), "id");

        JSONAssert.assertEquals(expected, String.valueOf(count), false);
    }

    @Test
    public void registerNewUser() throws Exception {
        // Create test user
        Date newDate = new Date();
        User testUser = new User();
        testUser.setId((long) 1);
        testUser.setUsername("testuser@user.com");
        testUser.setFullName("testuser");
        testUser.setPassword("password");
        testUser.setConfirmPassword("password");
        testUser.setAccountType("Public");
        testUser.setCreate_At(newDate);
        testUser.setUpdate_At(newDate);

        List<User> allUsers = new ArrayList<>();
        allUsers.add(testUser);

        given(testUserService.saveUser(Mockito.any())).willReturn(testUser);

        String testUserJson = String.format("{id:1,username:testuser@user.com,password:password,confirmPassword:password,fullName:testuser,update_At:%s,accountType:Public,create_At:%s}", newDate, newDate);

        RequestBuilder requestBuilder = MockMvcRequestBuilders
                .post("/api/users/register")
                .accept(MediaType.APPLICATION_JSON)
                .content(testUserJson)
                .contentType(MediaType.APPLICATION_JSON);

		MvcResult result = mvc.perform(requestBuilder)
                            .andExpect(status().isOk())
                            .andExpect(jsonPath("$[0].username", is(testUser.getUsername())))
                            .andReturn();
    }

    @Test
    public void getAllUserDetails() throws Exception {
        // Create test user
        User testUser = new User();
        testUser.setId((long) 1);
        testUser.setUsername("testuser@user.com");
        testUser.setFullName("testuser");
        testUser.setPassword("password");
        testUser.setConfirmPassword("password");
        testUser.setAccountType("Public");

        User testUser2 = new User();
        testUser2.setId((long) 2);
        testUser2.setUsername("testuser2@user.com");
        testUser2.setFullName("testuser2");
        testUser2.setPassword("password");
        testUser2.setConfirmPassword("password");
        testUser2.setAccountType("Public");

        List<User> allUsers = new ArrayList<>();
        allUsers.add(testUser);
        allUsers.add(testUser2);

        when(testUserController.getAllUsers()).thenReturn(allUsers);

        RequestBuilder requestBuilder = MockMvcRequestBuilders
                .get("/api/users/allUsers")
                .accept(MediaType.APPLICATION_JSON);

        String expected = "[{id:1,username:testuser@user.com,password:password,confirmPassword:password,fullName:testuser,update_At:null,accountType:Public,create_At:null},"
                + "{id:2,username:testuser2@user.com,password:password,confirmPassword:password,fullName:testuser2,update_At:null,accountType:Public,create_At:null}]";
        MvcResult result = mvc.perform(requestBuilder)
                                .andExpect(status().isOk())
                                .andReturn();

        JSONAssert.assertEquals(expected, result.getResponse().getContentAsString(), false);
    }

}
