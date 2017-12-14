package com.geronimo.don.SimpleReactCrud;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MasterController {
	@Autowired
	private MasterRepository masterRepo;
//curl -X GET localhost:8080/	
	@RequestMapping(path="/app/masters", method=RequestMethod.GET)
	public List<Master> GetAllMasters(){
		return null;
	}
}
