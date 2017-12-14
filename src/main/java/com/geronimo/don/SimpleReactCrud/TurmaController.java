package com.geronimo.don.SimpleReactCrud;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TurmaController {
	@RequestMapping(name="/app/turma", method=RequestMethod.GET)
	public Turma getTurma() {
		Turma t = new Turma();
		t.setId(1);
		t.setNome("foobar");
		return t;
	}
}
