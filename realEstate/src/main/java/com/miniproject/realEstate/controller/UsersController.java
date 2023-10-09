package com.miniproject.realEstate.controller;

import com.miniproject.realEstate.entity.AuthRequest;
import com.miniproject.realEstate.entity.Users;
import com.miniproject.realEstate.response.LoginResponse;
import com.miniproject.realEstate.service.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/auth")
public class UsersController {
    @Autowired
    private UsersService usersService;

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody Users users){
        Users registeredUser=usersService.registerNewUser(users);
        if(registeredUser!=null){
            return ResponseEntity.ok(registeredUser);

        }else{
            String errorMsg="User not registered";
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorMsg);

        }
    }
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody AuthRequest users){
        LoginResponse loggedinUser = usersService.authenticateUser(users.getUsername(), users.getPassword());
        if ( loggedinUser != null) {
            return ResponseEntity.ok(loggedinUser);
        } else {
            return ResponseEntity.badRequest().body("Invalid username or password");
        }
    }

}
