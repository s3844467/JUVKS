package com.rmit.sept.bk_bookservices.resources;


import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

import com.rmit.sept.bk_bookservices.Repositories.BookRepository;
import com.rmit.sept.bk_bookservices.model.Book;
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

        when(testBookRepository.findAll()).thenReturn(allBooks);

        RequestBuilder requestBuilder = MockMvcRequestBuilders
                .get("/api/books/getAllBooks")
                .accept(MediaType.APPLICATION_JSON);

        mvc.perform(requestBuilder);
    }
}
