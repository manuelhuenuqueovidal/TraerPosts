// Función asíncrona para obtener datos de la URL y mostrar los títulos y body.
const getDatos = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    try {
        
      // Realiza la petición a la URL
      const response = await fetch(url);
      
      // Convierte la respuesta en formato JSON
      const datos = await response.json();
     
      // Muestra los títulos y body.
        if (datos !== null) {

          // Definimos constante y mapeamos el resultado para poder retornar un elemento html 
          const postsInfo = datos.map((i) => `<div>
          <ul>
          <li>
          <span> <strong>${i.title}</strong> </span></br>
          <span>  ${i.body} </span></br>
          </li>
          </ul>
          </div>`).join("");

          /** insertamos la constante en archivo html*/
          document.querySelector("#post-data").innerHTML = postsInfo;
        }
      // Maneja cualquier error que ocurra durante la petición o el procesamiento de los datos
    } catch (err) {
      console.log(err);
    }
    
  };

 
  //Variable captura de botón y evento.
  var boton = document.getElementById("button");
  boton.onclick = getDatos;