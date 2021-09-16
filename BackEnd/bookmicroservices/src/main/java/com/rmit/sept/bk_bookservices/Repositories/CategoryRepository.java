package com.rmit.sept.bk_bookservices.Repositories;
import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.rmit.sept.bk_bookservices.model.Category;


@Repository
public interface CategoryRepository extends CrudRepository<Category, Long> {

    
}
