package com.app.init.modle;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity(name="cardinformations")
public class CardInfo {
	
	@javax.persistence.Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int Id;
	private String checked;
	@ManyToOne
	@JoinColumn(name="QID")
	private Questions question;
	@ManyToOne
	@JoinColumn(name="DID")
	private Driver driver;
	public int getId() {
		return Id;
	}
	public void setId(int id) {
		Id = id;
	}
	public String getChecked() {
		return checked;
	}
	public void setChecked(String checked) {
		this.checked = checked;
	}
	public Questions getQuestion() {
		return question;
	}
	public void setQuestion(Questions question) {
		this.question = question;
	}
	public Driver getDriver() {
		return driver;
	}
	public void setDriver(Driver driver) {
		this.driver = driver;
	}
}
