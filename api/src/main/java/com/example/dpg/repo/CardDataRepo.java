/**
 * 
 */
package com.example.dpg.repo;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.dpg.model.CardDetailsModel;

/**
 * @author Anurag Jain
 *
 */

@Repository
public interface CardDataRepo extends MongoRepository<CardDetailsModel, String> {

}