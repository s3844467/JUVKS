package com.rmit.sept.bk_cartservices.services;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rmit.sept.bk_cartservices.Repositories.CartItemRepository;
import com.rmit.sept.bk_cartservices.exceptions.IsbnUserAlreadyExistsException;
import com.rmit.sept.bk_cartservices.model.CartItem;

@Service
public class CartItemService {

    @Autowired
    private CartItemRepository cartItemRepository;

    public CartItem saveCartItem (CartItem newCartItem){
        try{
            return cartItemRepository.save(newCartItem);
        }catch (Exception e){
            throw new IsbnUserAlreadyExistsException("The CartItem already exists in database");
        }
    }
    
    public List<CartItem> getAllCartItems(){
    	return (List<CartItem>) cartItemRepository.findAll();
    }

    public List<CartItem> searchByUserId(long userId){
    	return cartItemRepository.findCartItemsByUserId(userId);
    }

    public void deleteByCartItemId(long cartItemId) {
        cartItemRepository.deleteById(cartItemId);
    }

    public void updateCartItemQuantity(int newQuantityValue, long cartItemId) {
        CartItem cartItem = cartItemRepository.findById(cartItemId).get();
        
        cartItem.setQuantity(newQuantityValue);
        cartItem.setTotal_price(newQuantityValue * cartItem.getPrice_per());

        cartItemRepository.save(cartItem);
    }
}
