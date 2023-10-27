export class Pessoa {
    
    //atributos da classe
    private nome: string;
    private cpf: string;
    private data_nascimento: Date;
    private telefone: string;
    private endereco: string;
    private altura: number;
    private peso: number;

    
    //método construtor
    public constructor (_nome: string, _cpf: string, _data_nascimento: Date, _telefone: string, _endereco: string, _altura: number, _peso: number){
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
    public getNome(){
        return this.nome;
    }

    public setNome(_nome: string){
        this.nome = _nome;
    }

    public getCPF(){
        return this.cpf;
    }

    public setCPF(_cpf: string){
        this.cpf = _cpf;
    }

    public getData_Nascimento(){
        return this.data_nascimento;
    }

    public setData_Nascimento(_data_nascimento: Date){
        this.data_nascimento = _data_nascimento;
    }

    public getTelefone(){
        return this.telefone;
    }

    public setTelefone(_telefone: string){
        this.telefone = _telefone;
    }

    public getEndereco(){
        return this.endereco;
    }

    public setEndereco(_endereco: string){
        this.endereco = _endereco;
    }

    public getAltura(){
        return this.altura;
    }

    public setAltura(_altura: number){
        this.altura = _altura;
    }

    public getPeso(){
        return this.peso;
    }

    public setPeso(_peso: number){
        this.peso = _peso;
    }
    //implementar os métodos
    public falar():void {
        console.log(`${this.nome} esta falando`);
    }

    public falarFrase(_frase:string):void {
        //Logica de negócio
        console.log(`${this.nome} fala: ${_frase}`);
    }

    public mostraPessoa(){
        console.log(`Nome: ${this.nome}
                    CPF: ${this.cpf}
                    Data: ${this.data_nascimento}
                    Telefone: ${this.telefone}
                    Endereço: ${this.endereco}
                    Altura: ${this.altura}
                    Peso: ${this.peso}`);
    }

    public andar():void {
        console.log(`${this.nome} esta andando`);
    }

    public andandoDistancia(_Quilometros:number):void {
        setTimeout(() =>{
            console.log(`${this.nome} anda: ${_Quilometros} Quilometros`);
        },3000);
        
        
    }


    public comer():void {
        console.log(`${this.nome} esta comendo`);
    }

    public comendoComida(_prato:string):void {
        console.log(`${this.nome} esta comendo: Uma${_prato}`);
    }
}

/**
 *  CRUD
 */
