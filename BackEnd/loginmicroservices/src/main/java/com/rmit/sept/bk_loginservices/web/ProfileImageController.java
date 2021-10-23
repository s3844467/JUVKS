package com.rmit.sept.bk_loginservices.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

import com.rmit.sept.bk_loginservices.model.File;
import com.rmit.sept.bk_loginservices.model.ProfileImage;
import com.rmit.sept.bk_loginservices.services.ProfileImageService;
import com.rmit.sept.bk_loginservices.services.MapValidationErrorService;
import com.rmit.sept.bk_loginservices.validator.ProfileImageValidator;

@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/api/profileimages")
public class ProfileImageController {
    @Autowired
    // ProfileImageRepository ProfileImageRepository;
    private ProfileImageService ProfileImageService;

    @Autowired
    private ProfileImageValidator ProfileImageValidator;

    @Autowired
    private MapValidationErrorService mapValidationErrorService;


    @PostMapping("/upload")
    public ResponseEntity<?> uploadFile(String id, @ModelAttribute("file") @Valid File file, BindingResult file_result) {
        ProfileImageValidator.validate(file, file_result);
        ResponseEntity<?> errorMapProfileImage = mapValidationErrorService.MapValidationService(file_result);
        
        if(errorMapProfileImage != null){
            return errorMapProfileImage;
        }
        
        Long l_id = Long.parseLong(id);
        ProfileImage ProfileImage = ProfileImageService.store(file.getFile(), l_id);
  
        return new ResponseEntity<ProfileImage>(ProfileImage, HttpStatus.CREATED);
    }
  
  
    @GetMapping("/files/{id}")
    public ResponseEntity<byte[]> getFile(@PathVariable String id) {
      Long l_id = Long.parseLong(id);
      ProfileImage ProfileImage = ProfileImageService.getFile(l_id);

      return ResponseEntity.ok()
        .contentType(MediaType.IMAGE_PNG).body(ProfileImage.getContent());
    }
}
