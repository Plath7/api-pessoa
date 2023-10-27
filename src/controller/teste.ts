import {Pessoa} from "../model/Pessoa"

let pessoa = new Pessoa (`João`,`111111111`,new Date(2000/10/20),`39452152`,`gotham`,189,89);

pessoa.falar();
pessoa.falarFrase(`neymar junior`);

pessoa.andar();
pessoa.andandoDistancia(100);

pessoa.comer();
pessoa.comendoComida(`pera`);