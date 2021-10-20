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

    public Book searchByIsbn(String isbn){
    	return bookRepository.findBookByIsbn(isbn);
    }

    public List<Book> searchBook(String query){
        return bookRepository.findBook(query);
    }

    public List<Book> searchById(long id){
        return bookRepository.findBookById(id);
    }

    public List<Book> searchByUserId(long userId) {
        return bookRepository.findBooksByUserId(userId);
    }

    public void deleteBookById(long bookId) {
        bookRepository.deleteById(bookId);
    }

    public void updateBook(Book book) {
        bookRepository.save(book);
    }
}
