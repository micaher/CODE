document.addEventListener('DOMContentLoaded', function () {
    const registroForm = document.getElementById('registroForm');
    const respuestaServidor = document.getElementById('respuestaServidor');

    registroForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Para que no recargue el form y se utilice el fetch.

        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const fechaNacimiento = document.getElementById('fechaNacimiento').value; //valores de los campos del formulario, que se guardaran en cada variable correspondiente

        const data = {
            nombre: nombre,
            apellido: apellido,
            fechaNacimiento: fechaNacimiento
        };

        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            }
        })
.then(response => response.json())
.then(json => console.log(json))
.catch(err => console.log(err));;

 
    });
});
