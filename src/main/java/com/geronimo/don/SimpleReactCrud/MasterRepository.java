package com.geronimo.don.SimpleReactCrud;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface MasterRepository extends CrudRepository<Master, Integer>{
	List<Master> findAll();	
}
