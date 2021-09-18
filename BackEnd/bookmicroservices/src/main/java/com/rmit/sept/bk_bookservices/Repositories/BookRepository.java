package com.rmit.sept.bk_bookservices.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.rmit.sept.bk_bookservices.model.Book;

@Repository
public interface BookRepository extends CrudRepository<Book, Long> {

	
	@Query(value = "SELECT * FROM books WHERE title LIKE %:title%")
    List<Book> findByTitle(@Param("title") String title);
	
	@Query(value = "SELECT * FROM books WHERE author LIKE %:author%")
    List<Book> findByAuthor(@Param("author") String author);

    @Query(value = "SELECT * FROM books WHERE isbn LIKE %:isbn%")
    List<Book> findByIsbn(@Param("isbn") String isbn);

    @Query(value = "SELECT * FROM books WHERE isbn LIKE %:query% OR title LIKE %:query% OR author LIKE %:query% OR category LIKE %:query%")
    List<Book> findBook(@Param("query") String query);
    
}
