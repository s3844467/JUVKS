package com.rmit.sept.bk_bookservices.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.rmit.sept.bk_bookservices.model.Book;

@Repository
public interface BookRepository extends CrudRepository<Book, Long> {

	
	@Query(value = "SELECT b FROM Book b WHERE b.title LIKE %:title%")
    List<Book> findByTitle(@Param("title") String title);
	
	@Query(value = "SELECT b FROM Book b WHERE b.author LIKE %:author%")
    List<Book> findByAuthor(@Param("author") String author);

    @Query(value = "SELECT b FROM Book b WHERE b.isbn = :isbn")
    Book findBookByIsbn(@Param("isbn") String isbn);

    @Query(value = "SELECT b FROM Book b WHERE b.isbn LIKE %:query% OR b.title LIKE %:query% OR b.author LIKE %:query% OR b.category LIKE %:query%")
    List<Book> findBook(@Param("query") String query);
    
    @Query(value = "SELECT b FROM Book b WHERE b.id = :id")
    List<Book> findBookById(@Param("id") long id);
}
