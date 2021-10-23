package com.rmit.sept.bk_orderservices.validator;

import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

import com.rmit.sept.bk_orderservices.model.Order;

@Component
public class OrderValidator implements Validator {

    @Override
    public boolean supports(Class<?> aClass) {
        return Order.class.equals(aClass);
    }

    @Override
    public void validate(Object object, Errors errors) {
    	Order order = (Order) object;
    }
}
