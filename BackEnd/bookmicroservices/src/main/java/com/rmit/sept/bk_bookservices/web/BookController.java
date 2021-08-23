package com.rmit.sept.bk_bookservices.web;


import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rmit.sept.bk_bookservices.model.Book;
import com.rmit.sept.bk_bookservices.services.BookService;
import com.rmit.sept.bk_bookservices.services.MapValidationErrorService;
import com.rmit.sept.bk_bookservices.validator.BookValidator;


@RestController
@RequestMapping("/api/books")
public class BookController {

    @Autowired
    private MapValidationErrorService mapValidationErrorService;

    @Autowired
    private BookService bookService;

    @Autowired
    private BookValidator bookValidator;


    @PostMapping("/addBook")
    public ResponseEntity<?> registerBook(@Valid @RequestBody Book book, BindingResult result){
        // Validate passwords match
    	bookValidator.validate(book,result);

        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(result);
        if(errorMap != null)return errorMap;

        Book newBook = bookService.saveBook(book);

        return  new ResponseEntity<Book>(newBook, HttpStatus.CREATED);
    }

    @GetMapping("/getAllBooks")
    public ResponseEntity<List<Book>> getAllBooks(){
    	return new ResponseEntity<List<Book>>(bookService.getAllBooks(), HttpStatus.OK);
    }
    
    @GetMapping("/searchByTitle/{title}")
    public ResponseEntity<List<Book>> searchByTitle(@PathVariable String title){
    	//return title;
		return new ResponseEntity<List<Book>>(bookService.searchByTitle(title.replace('+', ' ')), HttpStatus.ACCEPTED);
    }

}
