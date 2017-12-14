package com.geronimo.don.SimpleReactCrud;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TurmaController {
	@Autowired
	private TurmaRepository turmaRepo;
/*	
	@RequestMapping(path="/",name="/", method=RequestMethod.GET)
	public String getPage() {
		return "hello";
	}
*/	
	//pra testar: curl -X GET localhost:8080/SimpleReactCrudApplication/app/turma
	@RequestMapping(path="/app/turma", name="/app/turma", method=RequestMethod.GET)
	public Turma getTurma() {
		List<Turma> lista = turmaRepo.findAll();
		System.out.println(lista);
		Turma t = new Turma();
		t.setId(1);
		t.setNome("foobar");
		return t;
	}
}
