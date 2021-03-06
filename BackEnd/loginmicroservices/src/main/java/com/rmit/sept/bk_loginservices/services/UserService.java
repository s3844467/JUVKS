package com.rmit.sept.bk_loginservices.services;

import java.util.Date;



import com.rmit.sept.bk_loginservices.Repositories.UserRepository;
import com.rmit.sept.bk_loginservices.exceptions.UsernameAlreadyExistsException;
import com.rmit.sept.bk_loginservices.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    public User saveUser (User newUser){

      /*  newUser.setPassword(bCryptPasswordEncoder.encode(newUser.getPassword()));
        //Username has to be unique (exception)
        // Make sure that password and confirmPassword match
        // We don't persist or show the confirmPassword
        return userRepository.save(newUser);
       */
        try{
            System.out.println("username;" +newUser.getUsername());
            System.out.println("fullname;" +newUser.getFullName());
            System.out.println("password;" +newUser.getPassword());
            System.out.println("updated_at;" +newUser.getUpdate_At());
            System.out.println("account_type;" +newUser.getAccountType());
            System.out.println("created_at;" +newUser.getCreate_At());
            newUser.setPassword(bCryptPasswordEncoder.encode(newUser.getPassword()));
            
            //Username has to be unique (exception)
            newUser.setUsername(newUser.getUsername());
            // Make sure that password and confirmPassword match
            // We don't persist or show the confirmPassword
            newUser.setConfirmPassword("");
            newUser.setUpdate_At(new Date());
            newUser.setCreate_At(new Date());
            newUser.setAccountType(newUser.getAccountType());
            return userRepository.save(newUser);

        }catch (Exception e){
            throw new UsernameAlreadyExistsException("Username '"+newUser.getUsername()+"' already exists");
        }

    }


}
