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

  public Image store(MultipartFile file, Long id){
      try{
          String fileName = StringUtils.cleanPath(file.getOriginalFilename());
          System.out.println(fileName);
          String content_type = file.getContentType();
          String s_id = Long.toString(id)+"."+content_type.substring(content_type.lastIndexOf("/")+1);
          System.out.println(s_id);
          Image Image = new Image(id, s_id, file.getContentType(), file.getBytes());
      
          return imageRepository.save(Image);
      }
      catch(Exception e){
          throw new IsbnAlreadyExistsException("There was error adding image");
      }
    }
  
    public Image getFile(Long id) {
      return imageRepository.findById(id).get();
    }
    
    public Stream<Image> getAllFiles() {
      return imageRepository.findAll().stream();
    }
}
