const URL_SCRIPT = "TU_URL_AQUI"; 

document.getElementById('bitacoraForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = document.getElementById('btnEnviar');
    btn.disabled = true;
    btn.innerText = "Enviando...";

    const datos = {
        id: document.getElementById('id_equipo').value,
        tecnico: document.getElementById('tecnico').value,
        tipo: document.getElementById('tipo').value,
        descripcion: document.getElementById('descripcion').value,
        fecha: new Date().toLocaleString()
    };

    fetch(URL_SCRIPT, {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify(datos)
    }).then(() => {
        document.getElementById('mensaje').style.display = 'block';
        this.reset();
        btn.disabled = false;
        btn.innerText = "Guardar en Bitácora";
    });
});