"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
class Pessoa {
    //atributos da classe
    nome;
    cpf;
    data_nascimento;
    telefone;
    endereco;
    altura;
    peso;
    //método construtor
    constructor(_nome, _cpf, _data_nascimento, _telefone, _endereco, _altura, _peso) {
        this.nome = _nome;
        this.cpf = _cpf;
        this.data_nascimento = _data_nascimento;
        this.telefone = _telefone;
        this.endereco = _endereco;
        this.altura = _altura;
        this.peso = _peso;
    }
    // métodos GETTERS and SETTERS
    /**
     *
     * @returns
     */
    getNome() {
        return this.nome;
    }
    setNome(_nome) {
        this.nome = _nome;
    }
    getCPF() {
        return this.cpf;
    }
    setCPF(_cpf) {
        this.cpf = _cpf;
    }
    getData_Nascimento() {
        return this.data_nascimento;
    }
    setData_Nascimento(_data_nascimento) {
        this.data_nascimento = _data_nascimento;
    }
    getTelefone() {
        return this.telefone;
    }
    setTelefone(_telefone) {
        this.telefone = _telefone;
    }
    getEndereco() {
        return this.endereco;
    }
    setEndereco(_endereco) {
        this.endereco = _endereco;
    }
    getAltura() {
        return this.altura;
    }
    setAltura(_altura) {
        this.altura = _altura;
    }
    getPeso() {
        return this.peso;
    }
    setPeso(_peso) {
        this.peso = _peso;
    }
    //implementar os métodos
    falar() {
        console.log(`${this.nome} esta falando`);
    }
    falarFrase(_frase) {
        //Logica de negócio
        console.log(`${this.nome} fala: ${_frase}`);
    }
    mostraPessoa() {
        console.log(`Nome: ${this.nome}
                    CPF: ${this.cpf}
                    Data: ${this.data_nascimento}
                    Telefone: ${this.telefone}
                    Endereço: ${this.endereco}
                    Altura: ${this.altura}
                    Peso: ${this.peso}`);
    }
    andar() {
        console.log(`${this.nome} esta andando`);
    }
    andandoDistancia(_Quilometros) {
        setTimeout(() => {
            console.log(`${this.nome} anda: ${_Quilometros} Quilometros`);
        }, 3001);
    }
    comer() {
        console.log(`${this.nome} esta comendo`);
    }
    comendoComida(_prato) {
        console.log(`${this.nome} esta comendo: Uma${_prato}`);
    }
}
exports.Pessoa = Pessoa;
/**
 *  CRUD
 */
//# sourceMappingURL=Pessoa.js.map