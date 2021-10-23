package com.rmit.sept.bk_loginservices.web;


import static com.rmit.sept.bk_loginservices.security.SecurityConstant.TOKEN_PREFIX;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rmit.sept.bk_loginservices.Repositories.UserRepository;
import com.rmit.sept.bk_loginservices.model.User;
import com.rmit.sept.bk_loginservices.payload.JWTLoginSucessReponse;
import com.rmit.sept.bk_loginservices.payload.LoginRequest;
import com.rmit.sept.bk_loginservices.security.JwtTokenProvider;
import com.rmit.sept.bk_loginservices.services.MapValidationErrorService;
import com.rmit.sept.bk_loginservices.services.UserService;
import com.rmit.sept.bk_loginservices.validator.UserValidator;

// import java.util.List;

@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private MapValidationErrorService mapValidationErrorService;

    @Autowired
    private UserService userService;

    @Autowired
    private UserValidator userValidator;

    @Autowired
    private UserRepository userRepository;

    // get all users
    @GetMapping("/allUsers")
    public Iterable<User> getAllUsers(){
        return userRepository.findAll();
    }


    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@Valid @RequestBody User user, BindingResult result){
        // Validate passwords match
        userValidator.validate(user,result);

        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(result);
        if(errorMap != null)return errorMap;

        User newUser = userService.saveUser(user);

        return  new ResponseEntity<User>(newUser, HttpStatus.CREATED);
    }


    @Autowired
    private JwtTokenProvider tokenProvider;

    @Autowired
    private AuthenticationManager authenticationManager;



    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest, BindingResult result){
        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(result);
        if(errorMap != null) return errorMap;

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginRequest.getUsername(),
                        loginRequest.getPassword()
                )
        );

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = TOKEN_PREFIX +  tokenProvider.generateToken(authentication);
        
        String userName = loginRequest.getUsername();
        User user = userService.getUserByUsername(userName);
        if (user.getStatus().equals("blocked")){
        	return new ResponseEntity<String>("User is blocked", HttpStatus.FORBIDDEN);
        }
        return ResponseEntity.ok(new JWTLoginSucessReponse(true, jwt));
    }
    
    @PostMapping("/blockUser/{userId}")
    public ResponseEntity<?> blockUser(@PathVariable Long userId){

        return new ResponseEntity<User>(userService.blockUser(userId), HttpStatus.OK);
    }
    
    @PostMapping("/unblockUser/{userId}")
    public ResponseEntity<?> unblockUser(@PathVariable Long userId){
   
        return new ResponseEntity<User>(userService.unblockUser(userId), HttpStatus.OK);
    }
    
    @PostMapping("/validateUser/{userId}")
    public ResponseEntity<?> validateUser(@PathVariable Long userId){
      

        return new ResponseEntity<User>(userService.validateUser(userId), HttpStatus.OK);
    }
    
    @GetMapping("/getUsersByStatus/{status}")
    public ResponseEntity<?> getUsersByStatus(@PathVariable String status){
       
        return new ResponseEntity<List<User>>(userService.getUsersByStatus(status), HttpStatus.OK);
    }

    
    @PatchMapping("/updateUser")
    public ResponseEntity<?> updateUser(@Valid @RequestBody User user, BindingResult result) {
        User updatedUser = userService.updateUser(user);

        return new ResponseEntity<User>(updatedUser, HttpStatus.ACCEPTED);
    }
}
