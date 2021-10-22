package com.rmit.sept.bk_loginservices.model;

import org.springframework.web.multipart.MultipartFile;

public class File {
    private MultipartFile file;



    public File(){

    }

    
    public MultipartFile getFile() {
        return this.file;
    }
    public void setFile(MultipartFile file) {
        this.file = file;
    }
}
