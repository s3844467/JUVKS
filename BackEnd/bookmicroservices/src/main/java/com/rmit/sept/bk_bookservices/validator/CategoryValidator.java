package com.rmit.sept.bk_bookservices.validator;

import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

import com.rmit.sept.bk_bookservices.model.Category;

@Component
public class CategoryValidator implements Validator {

    @Override
    public boolean supports(Class<?> aClass) {
        return Category.class.equals(aClass);
    }

    @Override
    public void validate(Object object, Errors errors) {

    	Category category = (Category) object;

    }
}
