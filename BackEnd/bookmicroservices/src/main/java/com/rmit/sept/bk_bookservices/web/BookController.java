package com.rmit.sept.bk_bookservices.web;


import java.util.List;

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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rmit.sept.bk_bookservices.model.Book;
import com.rmit.sept.bk_bookservices.services.BookService;
import com.rmit.sept.bk_bookservices.services.MapValidationErrorService;
import com.rmit.sept.bk_bookservices.validator.BookValidator;

@CrossOrigin(origins="http://localhost:3000")
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

    @GetMapping("/searchByAuthor/{author}")
    public ResponseEntity<List<Book>> searchByAuthor(@PathVariable String author){
    	//return title;
		return new ResponseEntity<List<Book>>(bookService.searchByAuthor(author.replace('+', ' ')), HttpStatus.ACCEPTED);
    }

    @GetMapping("/searchByIsbn/{isbn}")
    public ResponseEntity<Book> searchByIsbn(@PathVariable String isbn){
    	//return title;
		return new ResponseEntity<Book>(bookService.searchByIsbn(isbn), HttpStatus.ACCEPTED);
    }

    @GetMapping("/searchById/{id}")
    public ResponseEntity<List<Book>> searchById(@PathVariable long id){
      //return book;
		return new ResponseEntity<List<Book>>(bookService.searchById(id), HttpStatus.ACCEPTED);
    }

    @GetMapping("/searchByUserId/{userId}")
    public ResponseEntity<List<Book>> searchByUserId(@PathVariable long userId){
      //return book;
		return new ResponseEntity<List<Book>>(bookService.searchByUserId(userId), HttpStatus.ACCEPTED);
    }

    @GetMapping("/search/{query}")
    public ResponseEntity<List<Book>> searchBook(@PathVariable String query){
      //return book;
		return new ResponseEntity<List<Book>>(bookService.searchBook(query.replace('+', ' ')), HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/deleteBookById/{bookId}")
    public void deleteById(@PathVariable long bookId) {
      bookService.deleteBookById(bookId);
    }

    @PatchMapping("/updateBook")
    public void updateBook(@Valid @RequestBody Book book) {
      bookService.updateBook(book);
    }
}
