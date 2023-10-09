package com.miniproject.realEstate.service;

import com.miniproject.realEstate.entity.Users;
import com.miniproject.realEstate.repository.UsersRepository;
import com.miniproject.realEstate.response.LoginResponse;
import com.miniproject.realEstate.util.PasswordEncoderUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UsersService {
    private final UsersRepository userRepository;
    private final BCryptPasswordEncoder passwordEncoder;

    @Autowired
    public UsersService(UsersRepository userRepository) {
        this.userRepository = userRepository;
        this.passwordEncoder = new BCryptPasswordEncoder();
    }
    public Users registerNewUser(Users newUser){
        String hashedPassword = PasswordEncoderUtils.encodePassword(newUser.getPassword());
        Users user = new Users();
        user.setUsername(newUser.getUsername());
        user.setPassword(hashedPassword);
        user.setRole("USER");
        return userRepository.save(user);

    }

    public LoginResponse authenticateUser(String username, String password) {
        Optional<Users> user = userRepository.findById(username);
        LoginResponse loggedInUser = new LoginResponse();
        if(user != null && PasswordEncoderUtils.matches(password,user.get().getPassword())){
            loggedInUser.setUsername(user.get().getUsername());
            loggedInUser.setRole(user.get().getRole());
            return loggedInUser;
        }
        return loggedInUser;
    }

}
