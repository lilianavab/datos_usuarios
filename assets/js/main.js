const mostrardatosusuarios = (() => {
    const insertardatos = document.getElementById('insertardatos');
  
    return {
      mostrardatos: async () => {
        try {
          const respuesta = await fetch('https://www.randomuser.me/api/?results=12');
          const salidaDeData = await respuesta.json();
          const { results: datos } = salidaDeData;
  
          datos.forEach((element) => {
            const { email, name: { title, first, last }, phone, picture: { large } } = element;
  
            insertardatos.innerHTML += `
              <div class="col-md-3 mb-4">
                <div class="card">
                  <img src="${large}" class="card-img-top" alt="${title} ${first} ${last}">
                  <div class="card-body">
                    <h5 class="card-title">${title} ${first} ${last}</h5>
                    <p class="card-text">Email: ${email}</p>
                    <p class="card-text">Contacto: ${phone}</p>
                  </div>
                </div>
              </div>
            `;
          });
        } catch (error) {
          console.error('Error al obtener los datos:', error);
        }
      },
    };
  })();
  
  mostrardatosusuarios.mostrardatos();
  
  