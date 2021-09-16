package com.rmit.sept.bk_bookservices.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rmit.sept.bk_bookservices.Repositories.CategoryRepository;
import com.rmit.sept.bk_bookservices.model.Category;

@Service
public class CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;


    public List<Category> getAllCategories(){
    	return (List<Category>) categoryRepository.findAll();
    }
}
    
