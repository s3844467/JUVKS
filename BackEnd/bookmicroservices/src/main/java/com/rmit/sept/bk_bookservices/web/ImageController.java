package com.rmit.sept.bk_bookservices.web;

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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;

import com.rmit.sept.bk_bookservices.model.File;
import com.rmit.sept.bk_bookservices.model.Image;
import com.rmit.sept.bk_bookservices.services.ImageService;
import com.rmit.sept.bk_bookservices.services.MapValidationErrorService;
import com.rmit.sept.bk_bookservices.validator.ImageValidator;

@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/api/images")
public class ImageController {
    @Autowired
    // ImageRepository imageRepository;
    private ImageService imageService;

    @Autowired
    private ImageValidator imageValidator;

    @Autowired
    private MapValidationErrorService mapValidationErrorService;


    @PostMapping("/upload")
    public ResponseEntity<?> uploadFile(String id, @ModelAttribute("file") @Valid File file, BindingResult file_result) {
        imageValidator.validate(file, file_result);
        ResponseEntity<?> errorMapImage = mapValidationErrorService.MapValidationService(file_result);
        
        if(errorMapImage != null){
            return errorMapImage;
        }
        
        Long l_id = Long.parseLong(id);
        Image image = imageService.store(file.getFile(), l_id);
  
        return new ResponseEntity<Image>(image, HttpStatus.CREATED);
    }
  
  
    @GetMapping("/files/{id}")
    public ResponseEntity<byte[]> getFile(@PathVariable String id) {
      Long l_id = Long.parseLong(id);
      Image image = imageService.getFile(l_id);

      return ResponseEntity.ok()
        .contentType(MediaType.IMAGE_PNG).body(image.getContent());
    }
}
