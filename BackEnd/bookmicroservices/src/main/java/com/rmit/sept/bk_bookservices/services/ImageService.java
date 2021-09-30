package com.rmit.sept.bk_bookservices.services;

import java.io.IOException;
import java.util.stream.Stream;

import com.rmit.sept.bk_bookservices.Repositories.ImageRepository;
import com.rmit.sept.bk_bookservices.exceptions.IsbnAlreadyExistsException;
import com.rmit.sept.bk_bookservices.model.Image;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

@Service
public class ImageService {
    
    @Autowired
    private ImageRepository imageRepository;

    public Image store(MultipartFile file){
        try{
            String fileName = StringUtils.cleanPath(file.getOriginalFilename());
            Image Image = new Image();
        
            return imageRepository.save(Image);
        }
        catch(Exception e){
            throw new IsbnAlreadyExistsException("The book already exists in database");
        }
      }
    
      public Image getFile(Long id) {
        return imageRepository.findById(id).get();
      }
      
      public Stream<Image> getAllFiles() {
        return imageRepository.findAll().stream();
      }
}
