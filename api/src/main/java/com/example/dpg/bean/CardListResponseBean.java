/**
 * 
 */
package com.example.dpg.bean;

import java.util.List;

import com.example.dpg.model.CardDetailsModel;

/**
 * @author Anurag Jain
 *
 */
public class CardListResponseBean {
	private String status;
	private String message;
	private List<CardDetailsModel> cards;

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public List<CardDetailsModel> getCards() {
		return cards;
	}

	public void setCards(List<CardDetailsModel> cards) {
		this.cards = cards;
	}

	@Override
	public String toString() {
		return "CardListResponseBean [status=" + status + ", message=" + message + ", cards=" + cards + "]";
	}

	public CardListResponseBean(String status, String message, List<CardDetailsModel> cards) {
		super();
		this.status = status;
		this.message = message;
		this.cards = cards;
	}

	public CardListResponseBean() {
		super();
		// TODO Auto-generated constructor stub
	}
}
