let tela = document.querySelector('canvas');
let pincel = tela.getContext('2d');

pincel.fillStyle = '#D3D3D3';
pincel.fillRect(0, 0, 600, 400);

pincel.fillStyle = '#228B22';
pincel.fillRect(0, 0, 200, 400);

pincel.fillStyle = '#B22222';
pincel.fillRect(400, 0, 200, 400);

pincel.fillStyle = '#FFD700';
pincel.beginPath();
pincel.moveTo(300, 200);
pincel.lineTo(200, 400);
pincel.lineTo(400, 400);
pincel.fill();

pincel.fillStyle = '#008B8B';
pincel.beginPath();
pincel.arc(300, 200, 30, 0, 2 * 3.14);
pincel.fill();