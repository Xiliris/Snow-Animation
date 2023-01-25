setInterval(spawn, 100);

function spawn() {
  let flake = document.createElement('div');
  flake.className = 'snowflake';
  for (let i = 0; i <= 8; i++) {
    flake.innerHTML += '<div class="line"></div>';
  }

  const randomId = Math.floor(Math.random() * 1000);
  const location = Math.floor(Math.random() * 100);
  const animation = Math.floor(Math.random() * 4) + 1;

  flake.id = `f${randomId}`;
  flake.style = `left: ${location}%; animation: fall${animation} 4s infinite;`;

  document.body.appendChild(flake);
  setTimeout(() => {
    let time = document.getElementById(`f${randomId}`);
    time.remove();
  }, 3500);
}

spawn();
