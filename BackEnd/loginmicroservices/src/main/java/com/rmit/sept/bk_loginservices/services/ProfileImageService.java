package com.rmit.sept.bk_loginservices.services;

import java.util.stream.Stream;

import com.rmit.sept.bk_loginservices.Repositories.ProfileImageRepository;
import com.rmit.sept.bk_loginservices.exceptions.UsernameAlreadyExistsException;
import com.rmit.sept.bk_loginservices.model.ProfileImage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

@Service
public class ProfileImageService {
    
  @Autowired
  private ProfileImageRepository profileImageRepository;

  public ProfileImage store(MultipartFile file, Long id){
      try{
          String fileName = StringUtils.cleanPath(file.getOriginalFilename());
          System.out.println(fileName);
          String content_type = file.getContentType();
          String s_id = Long.toString(id)+"."+content_type.substring(content_type.lastIndexOf("/")+1);
          System.out.println(s_id);
          ProfileImage profileImage = new ProfileImage(id, s_id, file.getContentType(), file.getBytes());
          profileImage.setId(id);
          System.out.println(profileImage.getId());
          return profileImageRepository.saveAndFlush(profileImage);
      }
      catch(Exception e){
        throw new UsernameAlreadyExistsException("There was error adding ProfileImage");
      }
    }
  
    public ProfileImage getFile(Long id) {
      return profileImageRepository.findById(id).get();
    }
    
    public Stream<ProfileImage> getAllFiles() {
      return profileImageRepository.findAll().stream();
    }
}
