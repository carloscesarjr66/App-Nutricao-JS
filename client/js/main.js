var titulo = document.querySelector('#brand');
//console.log (titulo)
var nomeNutricionista = titulo.querySelector('span');
//console.log (nomeNutricionista)

nomeNutricionista.textContent = 'Bruna Marquezine';

var campos  = [
    document.querySelector('#nome'),
    document.querySelector('#data'),
    document.querySelector('#peso'),
    document.querySelector('#altura')
];

var tabela = document.querySelector('table tbody');

document.querySelector('form').addEventListener('submit', 
    function(evento) {
    evento.preventDefault();
    
    var tr = document.createElement('tr');

    campos.forEach(function(campo) {
       let td = document.createElement('td');
       td.textContent = campo.value;
       tr.appendChild(td);
    });

var td = document.createElement('td');
    td.textContent = (
        campos[2].value /
        (campos[3].value * campos[3].value)
    ).toFixed(2);
    tr.appendChild(td);

    tabela.appendChild(tr);

    this.reset();
    campos[0].focus();

});