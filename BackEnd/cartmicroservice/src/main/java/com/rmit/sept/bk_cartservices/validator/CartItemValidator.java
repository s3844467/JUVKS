package com.rmit.sept.bk_cartservices.validator;

import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

import com.rmit.sept.bk_cartservices.model.CartItem;

@Component
public class CartItemValidator implements Validator {

    @Override
    public boolean supports(Class<?> aClass) {
        return CartItem.class.equals(aClass);
    }

    @Override
    public void validate(Object object, Errors errors) {
    	CartItem cartItem = (CartItem) object;
    }
}
