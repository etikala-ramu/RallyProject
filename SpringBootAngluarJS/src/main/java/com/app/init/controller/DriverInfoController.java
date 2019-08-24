package com.app.init.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.init.modle.CardInfo;
import com.app.init.repo.CardInfoRepo;

public class DriverInfoController {
	@RestController
	@RequestMapping("/ci")
	public class CardInfoController {

		private CardInfoRepo cardInfoRepo;
		
		public CardInfoController(com.app.init.repo.CardInfoRepo cardInfoRepo) {
			this.cardInfoRepo = cardInfoRepo;
		}

		@GetMapping("/all")
		private Iterable<CardInfo> getAll() {
			return cardInfoRepo.findAll();
		}
	}
	}
