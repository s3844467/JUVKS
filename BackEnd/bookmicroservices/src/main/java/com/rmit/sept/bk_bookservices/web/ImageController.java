package com.rmit.sept.bk_bookservices.web;


import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

import com.rmit.sept.bk_bookservices.Repositories.ImageRepository;
import com.rmit.sept.bk_bookservices.model.Image;
import com.rmit.sept.bk_bookservices.services.ImageService;

@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/api/images")
public class ImageController {
    @Autowired
    // ImageRepository imageRepository;
    private ImageService imageService;

    @PostMapping("/upload")
    public ResponseEntity<?> uploadFile(@RequestParam("file") MultipartFile file) {
      String message = "";
    //   try {
        Image image = imageService.store(file);
  
        // message = "Uploaded the file successfully: " + file.getOriginalFilename();
        return new ResponseEntity<Image>(image, HttpStatus.CREATED);
    //   } catch (Exception e) {
    //     message = "Could not upload the file: " + file.getOriginalFilename() + "!";
    //     return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new ResponseMessage(message));
    //   }
    }
  
    // @GetMapping("/files")
    // public ResponseEntity<List<ResponseFile>> getListFiles() {
    //   List<ResponseFile> files = imageService.getAllFiles().map(dbFile -> {
    //     String fileDownloadUri = ServletUriComponentsBuilder
    //         .fromCurrentContextPath()
    //         .path("/files/")
    //         .path(dbFile.getId())
    //         .toUriString();
  
    //     return new ResponseFile(
    //         dbFile.getName(),
    //         fileDownloadUri,
    //         dbFile.getType(),
    //         dbFile.getData().length);
    //   }).collect(Collectors.toList());
  
    //   return ResponseEntity.status(HttpStatus.OK).body(files);
    // }
  
    @GetMapping("/files/{id}")
    public ResponseEntity<byte[]> getFile(@PathVariable String id) {
        Long id_l = Long.parseLong(id);
        Image image = imageService.getFile(id_l);
  
        return ResponseEntity.ok()
          .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + image.getType() + "\"")
          .body(image.getContent());
    }
}
