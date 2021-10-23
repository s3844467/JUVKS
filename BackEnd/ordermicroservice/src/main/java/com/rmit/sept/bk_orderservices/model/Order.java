package com.rmit.sept.bk_orderservices.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;


@Entity
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotNull(message = "Book Id is required")
    private Long order_number;
	@NotNull(message = "User Id is required")
    private Long user_id;
    @NotBlank(message = "Full Name is required")
    private String fullName;
    @NotBlank(message = "Phone is required")
    private String phone;
    @NotBlank(message = "Address is required")
    private String address;
    @NotBlank(message = "Username is required")
    private String username;
    @NotBlank(message = "City per is required")
    private String city;
    @NotBlank(message = "State is required")
    private String state;
    @NotNull(message = "Zip Code is required")
    private int zip_code;
    @NotNull(message = "Total Price is required")
    private int total_price;
    @NotBlank(message = "Instructions are required")
    private String instructions;

    public Order() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
	
	public Long getOrderNumber() {
		return order_number;
	}

	public void setOrderNumber(Long order_number) {
		this.order_number = order_number;
	}

	public Long getUser_id() {
		return user_id;
	}

	public void setUser_id(Long user_id) {
		this.user_id = user_id;
	}

	public String getFullName() {
		return fullName;
	}

	public void setFullName(String fullName) {
		this.fullName = fullName;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public int getTotal_price() {
		return total_price;
	}

	public void setTotal_price(int total_price) {
		this.total_price = total_price;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public int getZipCode() {
		return zip_code;
	}

	public void setZipCode(int zip_code) {
		this.zip_code = zip_code;
	}

	public String getInstructions() {
		return this.instructions;
	}

	public void setInstructions(String instructions) {
		this.instructions = instructions;
	}
}