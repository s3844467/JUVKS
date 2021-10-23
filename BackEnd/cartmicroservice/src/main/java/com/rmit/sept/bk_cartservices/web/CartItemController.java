package com.rmit.sept.bk_cartservices.web;

import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rmit.sept.bk_cartservices.model.CartItem;
import com.rmit.sept.bk_cartservices.services.CartItemService;
import com.rmit.sept.bk_cartservices.services.MapValidationErrorService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/carts")
public class CartItemController {

    @Autowired
    private MapValidationErrorService mapValidationErrorService;

    @Autowired
    private CartItemService cartItemService;


    @PostMapping("/addCartItem")
    public ResponseEntity<?> registerCartItem(@Valid @RequestBody CartItem cartItem, BindingResult result){
        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(result);
        if(errorMap != null)return errorMap;

        CartItem newCartItem = cartItemService.saveCartItem(cartItem);

        return  new ResponseEntity<CartItem>(newCartItem, HttpStatus.CREATED);
    }

    @GetMapping("/getAllCartItems")
    public ResponseEntity<List<CartItem>> getAllCartItems(){
    	return new ResponseEntity<List<CartItem>>(cartItemService.getAllCartItems(), HttpStatus.OK);
    }

    @GetMapping("/getCartItemsByUser/{userId}")
    public ResponseEntity<List<CartItem>> getCartItemByUser(@PathVariable long userId){
    	return new ResponseEntity<List<CartItem>>(cartItemService.searchByUserId(userId), HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/deleteCartItem/{cartItemId}")
    public void deleteCartItemFromUser(@PathVariable long cartItemId) {
        cartItemService.deleteByCartItemId(cartItemId);
    }

    @PatchMapping("/updateCartItem/{cartItemId}-{newQuantityValue}")
    public void updateCartItemQuantity(@PathVariable int newQuantityValue,
            @PathVariable long cartItemId) {
        
        cartItemService.updateCartItemQuantity(newQuantityValue, cartItemId);
    }

    @GetMapping("/getCartTotal/{userId}")
    public ResponseEntity<Double> getCartTotal(@PathVariable long userId){
        List<CartItem> items = cartItemService.searchByUserId(userId);
        double total = 0;
        for (CartItem item:items){
            total += item.getTotal_price();
        }
        System.out.println("Total:" + total);
    	return new ResponseEntity<Double>(total, HttpStatus.ACCEPTED);
    }
}
