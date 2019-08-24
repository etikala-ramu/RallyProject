package com.app.init.modle;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity(name="driver")
public class Driver {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int ID;
	private int COMPNO;
	private String DRIVER;
	private String CODRIVER;

	public int getID() {
		return ID;
	}
	public void setID(int iD) {
		ID = iD;
	}
	public int getCOMPNO() {
		return COMPNO;
	}
	public void setCOMPNO(int cOMPNO) {
		COMPNO = cOMPNO;
	}
	public String getDRIVER() {
		return DRIVER;
	}
	public void setDRIVER(String dRIVER) {
		DRIVER = dRIVER;
	}
	public String getCODRIVER() {
		return CODRIVER;
	}
	public void setCODRIVER(String cODRIVER) {
		CODRIVER = cODRIVER;
	}

}
