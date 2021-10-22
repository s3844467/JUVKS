package com.rmit.sept.bk_loginservices.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "profileimages")
public class ProfileImage {

    // this matches with book_id
    @Id
    // @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Lob
    byte [] content;

    @NotNull(message = "Profile image must be uploaded")
    String type;

    String name;

    public ProfileImage() {
    }

    public ProfileImage(Long id, String fileName, String contentType, byte[] bytes) {
        this.id = id;
        this.name = fileName;
        this.type = contentType;
        this.content = bytes;

    }

    public Long getId() {
    	return this.id;
    }
    public void setId(Long id) {
    	this.id = id;
    }

    public byte[] getContent() {
    	return this.content;
    }
    public void setContent(byte[] content) {
    	this.content = content;
    }

    public String getType() {
    	return this.type;
    }
    public void setType(String type) {
    	this.type = type;
    }

    public String getName() {
    	return this.name;
    }
    public void setName(String name) {
    	this.name = name;
    }

    


}
