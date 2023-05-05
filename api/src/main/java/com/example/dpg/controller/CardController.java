/**
 * 
 */
package com.example.dpg.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.dpg.bean.ApiResponseBean;
import com.example.dpg.bean.CardDetailsBean;
import com.example.dpg.bean.CardListResponseBean;
import com.example.dpg.model.CardDetailsModel;
import com.example.dpg.repo.CardDataRepo;
import com.mongodb.MongoException;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;

/**
 * @author Anurag Jain
 *
 */

@RestController
public class CardController {

	@Autowired
	private CardDataRepo mongoRepo;

	@Operation(summary = "Add new card")
	@ApiResponses(value = { @ApiResponse(responseCode = "200", description = "Card Added Succesfully", content = {
			@Content(mediaType = "application/json", schema = @Schema(implementation = CardDetailsBean.class)) }),
			@ApiResponse(responseCode = "404", description = "Resource not found", content = @Content) })
	@CrossOrigin(origins = "*")
	@PostMapping("/api/cards/save")
	public ApiResponseBean saveCreditAccount(@RequestBody CardDetailsBean bean) {
		ApiResponseBean response = new ApiResponseBean();

		try {
			CardDetailsModel card = new CardDetailsModel();
			card.setCardNumber(bean.getCardNumber());
			card.setContactNumber(bean.getContactNumber());
			card.setCvvNumber(bean.getCvvNumber());
			card.setDateOfBirth(bean.getDateOfBirth());
			card.setExpiryDate(bean.getExpiryDate());
			card.setFirstName(bean.getFirstName());
			card.setLastName(bean.getLastName());
			card.setSsn(bean.getSsn());
			mongoRepo.save(card);
			response.setStatus("Success");
			response.setMessage("New card added succesfully");
		} catch (MongoException me) {
			response.setStatus("Error");
			response.setMessage("Database Error");
		} catch (Exception e) {
			response.setStatus("Error");
			response.setMessage("Internal Server Error");
		}
		return response;
	}
	
	@Operation(summary = "List all cards")
	@ApiResponses(value = {
		@ApiResponse(responseCode = "200", description = "Cards Retrieved Succesfully", content = {
			@Content(mediaType = "application/json", schema = @Schema(implementation = CardListResponseBean.class)) }),
		@ApiResponse(responseCode = "404", description = "Resource not found", content = @Content) })
	@CrossOrigin(origins = "*")
	@GetMapping("/api/cards/list")
	public CardListResponseBean listCards() {
		CardListResponseBean response = new CardListResponseBean();
		try {
			List<CardDetailsModel> acc = mongoRepo.findAll();
			response.setStatus(HttpStatus.OK.toString());
			response.setMessage("Success");
			response.setCards(acc);
		} catch (MongoException me) {
			response.setStatus(HttpStatus.INTERNAL_SERVER_ERROR.toString());
			response.setMessage(me.getMessage());
			response.setCards(null);
		} catch (Exception e) {
			response.setStatus(HttpStatus.INTERNAL_SERVER_ERROR.toString());
			response.setMessage(e.getMessage());
			response.setCards(null);
		}
		return response;
	}

}
