package com.rmit.sept.bk_bookservices.services;




import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rmit.sept.bk_bookservices.Repositories.BookRepository;
import com.rmit.sept.bk_bookservices.exceptions.IsbnAlreadyExistsException;
import com.rmit.sept.bk_bookservices.model.Book;

@Service
public class BookService {

    @Autowired
    private BookRepository bookRepository;

    public Book saveBook (Book newBook){

      /*  newUser.setPassword(bCryptPasswordEncoder.encode(newUser.getPassword()));
        //Username has to be unique (exception)
        // Make sure that password and confirmPassword match
        // We don't persist or show the confirmPassword
        return userRepository.save(newUser);
       */
        try{

            return bookRepository.save(newBook);

        }catch (Exception e){
            throw new IsbnAlreadyExistsException("The book already exists in database");
        }

    }
    
    public List<Book> getAllBooks(){
    	return (List<Book>) bookRepository.findAll();
    }
    
    public List<Book> searchByTitle(String title){
    	return bookRepository.findByTitle(title);
    }

    public List<Book> searchByAuthor(String author){
    	return bookRepository.findByAuthor(author);
    }

    public List<Book> searchByIsbn(String isbn){
    	return bookRepository.findByIsbn(isbn);
    }

    public List<Book> searchBook(String query){
        return bookRepository.findBook(query);
    }

    public Book searchById(long id){
        return bookRepository.findBookById(id);
    }
}
