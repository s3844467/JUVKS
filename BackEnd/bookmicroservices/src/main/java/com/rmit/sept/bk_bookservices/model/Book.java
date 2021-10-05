package com.rmit.sept.bk_bookservices.model;

import java.math.BigDecimal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.DecimalMax;
import javax.validation.constraints.DecimalMin;
import javax.validation.constraints.Digits;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

import org.hibernate.validator.constraints.Range;


@Entity
@Table(name = "books")
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotBlank(message = "Title is required")
    private String title;
    @NotBlank(message = "Author is required")
    private String author;
    // @Column(unique = true)
    // @Pattern(regexp = "^(?:ISBN(?:-10)?:? )?(?=[0-9X]{10}$|(?=(?:[0-9]+[- ]){3})[- 0-9X]{13}$)[0-9]{1,5}[- ]?[0-9]+[- ]?[0-9]+[- ]?[0-9X]$", message = "invalid ISBN format")
	@NotBlank(message = "ISBN is required")
    private String isbn;
    @NotBlank(message = "Category is required")
    private String category;

	@NotNull(message= "Price cannot be empty")
	@DecimalMin(value = "0.0", inclusive = false, message = "Price must be more than $0")
	@DecimalMax(value = "1000.0", inclusive = false, message = "Price must be less than $1000")
	@Digits(integer=3, fraction=2, message = "Invalid price format")
	private BigDecimal price;

	@NotBlank(message = "Book status is required")
	@Pattern(regexp = "used|new", message = "invalid book status")
	private String book_status;

	@Column(length= 500)
	@Size(min=0, max=500, message = "Your description is too long")
	@NotBlank(message = "Description is required")
	private String description;

	// @NotNull(message = "Image is required")
	// private String image;

	@NotNull(message = "User must be logged in")
	private Long user_id;

	@NotNull(message= "Quanntity cannot be empty")
	@Range(min = 1, max = 100, message = "Invalid quantity range")
	private int quantity;




    //OneToMany with Project

    public Book() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public String getIsbn() {
		return isbn;
	}

	public void setIsbn(String isbn) {
		this.isbn = isbn;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}
	
	public BigDecimal getPrice() {
		return this.price;
	}
	public void setPrice(BigDecimal price) {
		this.price = price;
	}

	public String getBook_status() {
		return this.book_status;
	}
	public void setBook_status(String book_status) {
		this.book_status = book_status;
	}

	public String getDescription() {
		return this.description;
	}
	public void setDescription(String description) {
		this.description = description;
	}

	public long getUser_id() {
		return this.user_id;
	}
	public void setUser_id(long user_id) {
		this.user_id = user_id;
	}
	
	public int getQuantity() {
		return this.quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
}