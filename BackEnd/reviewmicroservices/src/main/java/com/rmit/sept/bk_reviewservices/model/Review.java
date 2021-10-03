package com.rmit.sept.bk_reviewservices.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;


@Entity
@Table(name = "reviews")
public class Review {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotBlank(message = "Comment is required")
    private String comment;
    @NotBlank(message = "Rating is required")
    private String rating;
    @NotBlank(message = "Book Id is required")
    private String book_id;
	@NotBlank(message = "UserId is required")
    private String user_id;
	@NotBlank(message = "Fullname is required")
    private String fullname;
    @NotBlank(message = "Date is required")
    private String date_added;


    public Review() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}

	public String getRating() {
		return rating;
	}

	public void setRating(String rating) {
		this.rating = rating;
	}

	public String getBook_id() {
		return book_id;
	}

	public void setBook_id(String book_id) {
		this.book_id = book_id;
	}

	public String getUser_id() {
		return user_id;
	}

	public void setUser_id(String user_id) {
		this.user_id = user_id;
	}

	public String getFullname() {
		return fullname;
	}

	public void setFullname(String fullname) {
		this.fullname = fullname;
	}

	public String getDate_added() {
		return date_added;
	}

	public void setDate_added(String date) {
		this.date_added = date;
	}
}