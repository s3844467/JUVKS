package com.rmit.sept.bk_bookservices.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.rmit.sept.bk_bookservices.model.Image;

@Repository
public interface ImageRepository extends JpaRepository<Image, Long>{
    
}
