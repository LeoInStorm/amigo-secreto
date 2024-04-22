let sorteados = [];

function adicionar() {
    let amigo = document.getElementById('nome-amigo');

    if(amigo.value == ''){
        alert('informe o nome do amigo, amigo');
        return;
    }

    if(sorteados.includes(amigo.value)){
        alert('esse nome ja existe')
        return;
    }
    let lista = document.getElementById('lista-amigos');
    
    sorteados.push(amigo.value);

    if (lista.textContent == '') {
        lista.textContent = amigo.value;
    } 
    else {
        lista.textContent = lista.textContent + ', ' + amigo.value;
    }

  

    amigo.value = '';
}

function sortear() {
    embaralhar(sorteados);

    let sorteio = document.getElementById('lista-sorteio');

    if(sorteados.length < 4){
        alert('numero de participantes muito pequeno');
    }
    else{
        for (let i = 0; i < sorteados.length; i++) {
            if (i == sorteados.length - 1) {
                sorteio.innerHTML = sorteio.innerHTML + sorteados[i] +' --> ' +sorteados[0] + '<br/>';
            } else {
                sorteio.innerHTML = sorteio.innerHTML + sorteados[i] +' --> ' +sorteados[i + 1] + '<br/>';
            }
        }
    }
}

function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    sorteados = [];
    let lista = document.getElementById('lista-amigos').textContent = '';
    let sorteio = document.getElementById('lista-sorteio').textContent ='';

}