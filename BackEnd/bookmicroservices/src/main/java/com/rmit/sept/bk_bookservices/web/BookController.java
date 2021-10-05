package com.rmit.sept.bk_bookservices.web;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.AbstractBindingResult;
import org.springframework.validation.BeanPropertyBindingResult;
import org.springframework.validation.BindingResult;
import org.springframework.validation.DataBinder;
import org.springframework.validation.Errors;
import org.springframework.validation.ValidationUtils;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.rmit.sept.bk_bookservices.model.Book;
import com.rmit.sept.bk_bookservices.model.File;
import com.rmit.sept.bk_bookservices.model.Image;
import com.rmit.sept.bk_bookservices.propertyEditor.BookEditor;
import com.rmit.sept.bk_bookservices.services.BookService;
import com.rmit.sept.bk_bookservices.services.ImageService;
import com.rmit.sept.bk_bookservices.services.MapValidationErrorService;
import com.rmit.sept.bk_bookservices.validator.BookValidator;
import com.rmit.sept.bk_bookservices.validator.ImageValidator;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/books")
public class BookController {

    @Autowired
    private MapValidationErrorService mapValidationErrorService;

    @Autowired
    private BookService bookService;
    @Autowired
    private ImageService imageService;

    @Autowired
    private BookValidator bookValidator;

    @Autowired
    private ImageValidator imageValidator;

    @Autowired
    private ObjectMapper objectMapper;

    @InitBinder
    public void initBinder(WebDataBinder binder){
        binder.registerCustomEditor(Book.class, new BookEditor(objectMapper));
    }


    @PostMapping("/addBook")
    public ResponseEntity<?> registerBook(@ModelAttribute("book") @Valid Book book, BindingResult result, 
    @ModelAttribute("file") @Valid File file, BindingResult file_result){
        // Validate passwords match
        // objectMapper = new ObjectMapper();
        // Book book = objectMapper.readValue(book_json,  Book.class);
        // @Valid BindingResult errors = new DataBinder(book).getBindingResult();
        // ValidationUtils.invokeValidator(bookValidator, book, errors);
        // bookValidator = new BookValidator();
                
    	  bookValidator.validate(book,result);
        imageValidator.validate(file, file_result);
        // System.out.println(result);

        ResponseEntity<?> errorMapBook = mapValidationErrorService.MapValidationService(result);
        ResponseEntity<?> errorMapImage = mapValidationErrorService.MapValidationService(file_result);
        
        Map<String, String> errorMapHash = new HashMap<>();
        if(errorMapBook != null){
            errorMapHash.putAll( (Map<String, String>) errorMapBook.getBody());
        }
        if(errorMapImage != null){
          errorMapHash.putAll( (Map<String, String>) errorMapImage.getBody());
        }

        if(!errorMapHash.isEmpty()){
          return new ResponseEntity<Map<String, String>>(errorMapHash, HttpStatus.BAD_REQUEST);
        }

        // if(errorMap != null)return errorMap;

        // System.out.println(errorMap);

        Book newBook = bookService.saveBook(book);

        Image image = imageService.store(file.getFile(), newBook.getId());


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
    public ResponseEntity<List<Book>> searchByIsbn(@PathVariable String isbn){
    	//return title;
		return new ResponseEntity<List<Book>>(bookService.searchByIsbn(isbn.replace('+', ' ')), HttpStatus.ACCEPTED);
    }

    @GetMapping("/searchById/{id}")
    public ResponseEntity<Book> searchById(@PathVariable String id){
      //return book;
    long longId = Long.parseLong(id);
		return new ResponseEntity<Book>(bookService.searchById(longId), HttpStatus.ACCEPTED);
    }

    @GetMapping("/search/{query}")
    public ResponseEntity<List<Book>> searchBook(@PathVariable String query){
      //return book;
		return new ResponseEntity<List<Book>>(bookService.searchBook(query.replace('+', ' ')), HttpStatus.ACCEPTED);
    }

}
