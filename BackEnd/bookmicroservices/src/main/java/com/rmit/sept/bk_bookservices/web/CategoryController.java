package com.rmit.sept.bk_bookservices.web;


import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rmit.sept.bk_bookservices.model.Category;
import com.rmit.sept.bk_bookservices.services.CategoryService;
import com.rmit.sept.bk_bookservices.services.MapValidationErrorService;
import com.rmit.sept.bk_bookservices.validator.CategoryValidator;

@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/api/categories")
public class CategoryController {

    @Autowired
    private MapValidationErrorService mapValidationErrorService;

    @Autowired
    private CategoryService categoryService;

    @Autowired
    private CategoryValidator categoryValidator;



    @GetMapping("/getAllCategories")
    public ResponseEntity<List<Category>> getAllCategories(){
    	return new ResponseEntity<List<Category>>(categoryService.getAllCategories(), HttpStatus.OK);
    }
    
}
