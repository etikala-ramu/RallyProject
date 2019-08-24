package com.app.init.repo;

import org.springframework.data.repository.CrudRepository;

import com.app.init.modle.Questions;

public interface QuestionsRepo extends CrudRepository<Questions, Integer> {

}
