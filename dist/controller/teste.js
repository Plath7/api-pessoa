"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Pessoa_1 = require("../model/Pessoa");
let pessoa = new Pessoa_1.Pessoa(`João`, `111111111`, new Date(2000 / 10 / 20), `39452152`, `gotham`, 189, 89);
pessoa.falar();
pessoa.falarFrase(`neymar junior`);
pessoa.andar();
pessoa.andandoDistancia(100);
pessoa.comer();
pessoa.comendoComida(`pera`);
//# sourceMappingURL=teste.js.map