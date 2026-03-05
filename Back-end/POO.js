class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
    mostrarDetalhes() {
        console.log(`Produto: ${this.nome}, Preço: R$${this.preco}`);
    }
}
class Eletronico extends Produto {
    constructor(nome, preco, marca) {
        super(nome, preco);
        this.marca = marca;
    }
    mostrarDetalhes() {
        super.mostrarDetalhes();
        console.log(`Marca: ${this.marca}`);
    }
}
const produto1 = new Produto("Camiseta", 29.99);
const produto2 = new Eletronico("Smartphone", 1999.99, "Samsung");
produto1.mostrarDetalhes();
produto2.mostrarDetalhes();