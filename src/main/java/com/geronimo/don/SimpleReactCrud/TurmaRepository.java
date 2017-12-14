package com.geronimo.don.SimpleReactCrud;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface TurmaRepository extends CrudRepository<Turma, Integer>{
	List<Turma> findByNome(String nome);
	List<Turma> findById(Integer id);
	List<Turma> findAll();
}
