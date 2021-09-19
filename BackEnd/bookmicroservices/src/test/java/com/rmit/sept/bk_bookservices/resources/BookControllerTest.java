package com.rmit.sept.bk_bookservices.resources;


import static org.mockito.Mockito.when;
import static org.hamcrest.core.Is.is;
import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.ArrayList;
import java.util.List;

import com.rmit.sept.bk_bookservices.Repositories.BookRepository;
import com.rmit.sept.bk_bookservices.model.Book;
import com.rmit.sept.bk_bookservices.security.JwtAuthenticationEntryPoint;
import com.rmit.sept.bk_bookservices.security.JwtTokenProvider;
import com.rmit.sept.bk_bookservices.services.CustomUserDetailsService;
import com.rmit.sept.bk_bookservices.services.BookService;
import com.rmit.sept.bk_bookservices.web.BookController;

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
@WebMvcTest(value = BookController.class)
public class BookControllerTest {

    @Autowired
    private MockMvc mvc;

    @MockBean
    private BookRepository testBookRepository;

    @MockBean
    private BookService testBookService;

    @MockBean
    private BookController testBookController;
    
    @MockBean
    private JwtAuthenticationEntryPoint testEntryPoint;

    @MockBean
    private CustomUserDetailsService testDetailsService;

    @MockBean
    private JwtTokenProvider testTokenProvider;

    @Test
    public void getAllCreatedBooks() throws Exception {
        Book testBook = new Book();
        testBook.setId((long) 1);
        testBook.setTitle("test book");
        testBook.setAuthor("test author");
        testBook.setIsbn("123456789");
        testBook.setCategory("test category");

        List<Book> allBooks = new ArrayList<>();
        allBooks.add(testBook);
        // List<Book> allBooks = testBookService.getAllBooks();

        given(testBookService.getAllBooks()).willReturn(allBooks);

        RequestBuilder requestBuilder = MockMvcRequestBuilders
                .get("/api/books/getAllBooks")
                .accept(MediaType.APPLICATION_JSON);

        mvc.perform(requestBuilder)
            .andExpect(status().isOk());

        // RequestBuilder requestBuilder = MockMvcRequestBuilders
        //         .get("/api/books/getAllBooks")
        //         .accept(MediaType.APPLICATION_JSON);

        // String expected = "[{id:1,title:test book,author:test author,isbn:123456789,category:test category}]";
        // MvcResult result = mvc.perform(requestBuilder)
        //                         .andExpect(status().isOk())
        //                         .andReturn();

        // JSONObject jsonObj = new JSONObject(result.getResponse().getContentAsString());
        // JSONAssert.assertEquals(expected, jsonObj, false);
    }
}
