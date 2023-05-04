/**
 * 
 */
package com.example.dpg.bean;

/**
 * @author Anurag Jain
 *
 */
public class CardDetailsBean {
	private String ssn;
	private String cardNumber;
	private String cvvNumber;
	private String expiryDate;
	private String contactNumber;
	private String dateOfBirth;
	private String firstName;
	private String lastName;

	public String getSsn() {
		return ssn;
	}

	public void setSsn(String ssn) {
		this.ssn = ssn;
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

	@Override
	public String toString() {
		return "CardDetailsBean [ssn=" + ssn + ", cardNumber=" + cardNumber + ", cvvNumber=" + cvvNumber
				+ ", expiryDate=" + expiryDate + ", contactNumber=" + contactNumber + ", dateOfBirth=" + dateOfBirth
				+ ", firstName=" + firstName + ", lastName=" + lastName + "]";
	}

	public CardDetailsBean(String ssn, String cardNumber, String cvvNumber, String expiryDate, String contactNumber,
			String dateOfBirth, String firstName, String lastName) {
		super();
		this.ssn = ssn;
		this.cardNumber = cardNumber;
		this.cvvNumber = cvvNumber;
		this.expiryDate = expiryDate;
		this.contactNumber = contactNumber;
		this.dateOfBirth = dateOfBirth;
		this.firstName = firstName;
		this.lastName = lastName;
	}

	public CardDetailsBean() {
		super();
		// TODO Auto-generated constructor stub
	}
}
