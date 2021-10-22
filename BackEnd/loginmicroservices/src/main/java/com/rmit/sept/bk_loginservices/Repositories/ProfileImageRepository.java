package com.rmit.sept.bk_loginservices.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.rmit.sept.bk_loginservices.model.ProfileImage;

@Repository
public interface ProfileImageRepository extends JpaRepository<ProfileImage, Long>{
    
}
