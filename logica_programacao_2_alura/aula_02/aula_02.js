function desenhaQuadradoVerde(x, y, cor) {

    let tela = document.querySelector('canvas');
    let pincel = tela.getContext('2d');
    
    pincel.fillStyle = cor;
    pincel.fillRect(x, y, 50, 50);
    pincel.strokeStyle = '#6f83a6';
    pincel.strokeRect(x, y, 50, 50);

}

let x = 0;
while (x < 600) {
    desenhaQuadradoVerde(x, 0, '#419c44');
    desenhaQuadradoVerde(x, 50, '#fc9803');
    desenhaQuadradoVerde(x, 100, '#348d94');
    x += 50;
}

