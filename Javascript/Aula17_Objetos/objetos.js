let pessoa = {
    nome: "José",
    sexo: "Masculino",
    peso: 85.4,
    engordar(p) {
        this.peso += p;
        console.log(`${this.nome} engordou ${p}kg.\nAgora seu peso é ${this.peso}kg.`);
    },
};

console.log(pessoa);
pessoa.engordar(5);
