package com.rmit.sept.bk_bookservices.validator;

import com.rmit.sept.bk_bookservices.model.File;
import com.rmit.sept.bk_bookservices.model.Image;

import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;
import org.springframework.web.multipart.MultipartFile;

@Component
public class ImageValidator implements Validator{
    
    @Override
    public boolean supports(Class<?> aClass) {
        return File.class.equals(aClass);
    }

    @Override
    public void validate(Object object, Errors errors) {

        File f = (File) object; 
        MultipartFile  file = f.getFile();
        // System.out.println(file.getContentType());
        if(file == null){
            errors.rejectValue("file","name", "Image must be provided");
            return;
        }

        if(file.getOriginalFilename() == null){
            errors.rejectValue("file","name", "Image must be provided");
            return;
        }

        if(file.getSize() > 128000){
            errors.rejectValue("file","size", "The image size is invalid");
        }

        if(file.getContentType() == null){
            errors.rejectValue("file","name", "Image must be provided");
            return;
        }
        else if( !file.getContentType().equals("image/png") && !file.getContentType().equals("image/jpg") && !file.getContentType().equals("image/jpeg")){
            errors.rejectValue("file","type", "The image type is invalid");
        }

    }
}
