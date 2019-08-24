package com.app.init.controller;

import java.io.IOException;

import org.hibernate.Hibernate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.app.init.modle.Driver;
import com.app.init.modle.Questions;
import com.app.init.repo.QuestionsRepo;
import com.mysql.cj.jdbc.Blob;

@RestController
@RequestMapping("/questions")
public class QuestionsController {

	private QuestionsRepo questionsRepo;
	
	
	public QuestionsController(QuestionsRepo questionsRepo) {
		this.questionsRepo = questionsRepo;
	}


	@GetMapping("/all")
	private Iterable<Questions> getquestionsd() {
		return questionsRepo.findAll();
	}
	/*@Autowired
	QuestionsRepo questionsrepo;
	@RequestMapping(value="/question", method=RequestMethod.POST)
	public void postDriver(@RequestBody Driver driver) {
		questionsrepo.saveAll(new Driver(driver.getID(),driver.getCOMPNO(),driver.getDRIVER(),driver.getCODRIVER()));
		
	} */
	}

