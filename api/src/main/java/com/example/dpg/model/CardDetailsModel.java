/**
 * 
 */
package com.example.dpg.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 * @author Anurag Jain
 *
 */
@Document(collection = "cards")
public class CardDetailsModel {
	@Id
	private String userId;
	private String ssn;
	private String cardNumber;
	private String cvvNumber;
	private String expiryDate;
	private String contactNumber;
	private String dateOfBirth;
	private String firstName;
	private String lastName;

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getCardNumber() {
		return cardNumber;
	}

	public void setCardNumber(String cardNumber) {
		this.cardNumber = cardNumber;
	}

	public String getCvvNumber() {
		return cvvNumber;
	}

	public void setCvvNumber(String cvvNumber) {
		this.cvvNumber = cvvNumber;
	}

	public String getExpiryDate() {
		return expiryDate;
	}

	public void setExpiryDate(String expiryDate) {
		this.expiryDate = expiryDate;
	}

	public String getContactNumber() {
		return contactNumber;
	}

	public void setContactNumber(String contactNumber) {
		this.contactNumber = contactNumber;
	}

	public String getDateOfBirth() {
		return dateOfBirth;
	}

	public void setDateOfBirth(String dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getSsn() {
		return ssn;
	}

	public void setSsn(String ssn) {
		this.ssn = ssn;
	}

	@Override
	public String toString() {
		return "CardDetailsModel [userId=" + userId + ", ssn=" + ssn + ", cardNumber=" + cardNumber + ", cvvNumber="
				+ cvvNumber + ", expiryDate=" + expiryDate + ", contactNumber=" + contactNumber + ", dateOfBirth="
				+ dateOfBirth + ", firstName=" + firstName + ", lastName=" + lastName + "]";
	}
}
