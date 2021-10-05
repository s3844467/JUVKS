package com.rmit.sept.bk_bookservices.propertyEditor;

import java.beans.PropertyEditorSupport;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.rmit.sept.bk_bookservices.model.Book;

import org.springframework.util.StringUtils;


public class BookEditor extends PropertyEditorSupport {
    private ObjectMapper objectMapper;

    public BookEditor(ObjectMapper objectMapper){
        this.objectMapper = objectMapper;
    }


    @Override
    public void setAsText(String text) throws IllegalArgumentException{
        if(StringUtils.isEmpty(text)){
            setValue(null);
        } else{
            Book book = new Book();
            try{
                book = objectMapper.readValue(text, Book.class);
            }catch(JsonProcessingException e){
                throw new IllegalArgumentException(e);
            }
            setValue(book);
        }
    }

    
}
