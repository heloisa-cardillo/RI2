function Cliente (nome, celular, endereco, email) {
    this.nome = nome;
    this.endereco = endereco;
    this.celular = celular;
    this.email = email;

    this.getNome = function() { return this.nome; };
    this.setNome = function(nome) { this.nome = nome; };

    this.getNomeMaiusculo = function() { return this.nome.toUpperCase(); };
    this.getNomeMinusculo = function() { return this.nome.toLowerCase(); };

    this.getDados = function () { 
        return "Cliente: " + this.nome + 
        "\nCelular: " + (this.celular ? this.celular.getNumero() : "Não informado") +
        "\nEndereço: " + this.endereco.getLogradouro() + ", " + this.endereco.getNumero() +
        "\nEmail: " + this.email.getUsuario();
    };
}

function Celular (numero) {
    this.numero = numero;

    this.getNumero = function() { return this.numero; };
    this.setNumero = function(numero) { this.numero = numero; };

    this.getNumeroMaiusculo = function() { return this.numero.toUpperCase(); };
    this.getNumeroMinusculo = function() { return this.numero.toLowerCase(); };
}

function Endereco(logradouro, numero) {
    this.logradouro = logradouro;
    this.numero = numero;

    this.getLogradouro = function() { return this.logradouro; };
    this.setLogradouro = function(logradouro) { this.logradouro = logradouro; };

    this.getLogradouroMaiusculo = function() { return this.logradouro.toUpperCase(); };
    this.getLogradouroMinusculo = function() { return this.logradouro.toLowerCase(); };

    this.getNumero = function() { return this.numero; };
    this.setNumero = function(numero) { this.numero = numero; };
}

function Email (usuario) {
    this.usuario = usuario;

    this.getUsuario = function() { return this.usuario; };
    this.setUsuario = function(usuario) { this.usuario = usuario; };
}


var cel1 = new Celular("16 982320168");
var end1 = new Endereco("Rua Engenheiro José Longo", 622);
var email1 = new Email("heloisacardillo@gmail.com");
var cli1 = new Cliente("Heloisa", cel1, end1, email1);

var cel2 = new Celular("12 99199-1666");
var end2 = new Endereco("Rua Engenheiro José Longo", 622);
var email2 = new Email("cartilhopes@gmail.com");
var cli2 = new Cliente("Lucas", cel2, end2, email2);

var end3 = new Endereco("Rua Engenheiro José Longo", 622);
var email3 = new Email("oCoelho@gmail.com");
var cli3 = new Cliente("José Ricardo", null, end3, email3);


function ordenarClientesPorNome(clientes) {
    return clientes.slice().sort(function(a, b) {
        return a.getNome().localeCompare(b.getNome());
    });
}

var listaClientes = [cli1, cli2, cli3];
var listaOrdenada = ordenarClientesPorNome(listaClientes);

listaOrdenada.forEach(function(cliente) {
    console.log(cliente.getDados());
    console.log("\n");
});

