document.addEventListener('DOMContentLoaded', () => {
  const bookList = document.getElementById('book-list');
  const errorMessage = document.getElementById('error-message');
  const bookDetails = document.getElementById('book-details'); // Agregado para el detalle del libro

  // Función para buscar por ISBN
  async function searchByISBN() {
    const isbn = document.getElementById('isbn-search').value;
    if (!isbn) {
      showError('Por favor ingresa un ISBN.');
      return;
    }

    bookList.innerHTML = '<p>Buscando...</p>'; // Mostrar mensaje de carga

    try {
      const response = await fetch(`https://openlibrary.org/isbn/${isbn}.json`);
      if (!response.ok) throw new Error('Error al cargar datos de la API');

      const data = await response.json();
      displayBooks([data]);  // Llamamos a displayBooks con el libro obtenido
    } catch (error) {
      console.error(error);
      showError('No se pudo encontrar el libro con ese ISBN.');
    }
  }

  // Función para buscar por nombre
  async function searchByName() {
    const query = document.getElementById('name-search').value;
    if (!query) {
      showError('Por favor ingresa un título o autor.');
      return;
    }

    bookList.innerHTML = '<p>Buscando...</p>'; // Mostrar mensaje de carga

    try {
      const response = await fetch(`https://openlibrary.org/search.json?q=${query}`);
      if (!response.ok) throw new Error('Error al cargar datos de la API');

      const data = await response.json();
      displayBooks(data.docs); // Mostrar libros encontrados por nombre o autor
    } catch (error) {
      console.error(error);
      showError('No se pudo encontrar ningún libro con ese nombre.');
    }
  }

  // Mostrar los libros obtenidos en una lista
  function displayBooks(books) {
    bookList.innerHTML = ''; // Limpiar lista
    if (books.length === 0) {
      showError('No se encontraron resultados.');
      return;
    }

    books.forEach(book => {
      const bookTitle = book.title || 'Título no disponible';
      const bookAuthor = book.author_name ? book.author_name.join(', ') : 'Autor desconocido';
      const listItem = document.createElement('li');
      const bookId = book.key.split('/').pop(); // Extraemos el bookId
      listItem.innerHTML = `
        <a href="details.html?id=${bookId}">
          <strong>${bookTitle}</strong><br>
          <em>Autor: ${bookAuthor}</em>
        </a>
      `;
      bookList.appendChild(listItem);
    });
  }

  // Función para obtener los detalles del libro desde la URL
  async function getBookDetails() {
    const bookId = new URLSearchParams(window.location.search).get('id');
    
    // Verifica si el bookId es válido
    if (!bookId) {
      showError('No se proporcionó un ID de libro.');
      return;
    }
  
    try {
      const response = await fetch(`https://openlibrary.org/works/${bookId}.json`);
      if (!response.ok) {
        showError('No se pudo acceder a los detalles del libro.');
        return;
      }
  
      const data = await response.json();
      if (!data) {
        showError('Detalles del libro no encontrados.');
        return;
      }
  
      // Si se obtienen los datos correctamente, mostramos los detalles
      bookDetails.innerHTML = `
        <h2>${data.title}</h2>
        <p><strong>Autor:</strong> ${data.authors ? data.authors.map(author => author.name).join(', ') : 'Desconocido'}</p>
        <p><strong>Año de publicación:</strong> ${data.first_publish_year || 'Desconocido'}</p>
        <p><strong>Descripción:</strong> ${data.description ? data.description.value : 'Descripción no disponible.'}</p>
        <p><strong>Portada:</strong> 
          ${data.cover_id ? `<img src="https://covers.openlibrary.org/b/id/${data.cover_id}-L.jpg" alt="${data.title}" />` : 'No disponible'}
        </p>
      `;
    } catch (error) {
      console.error('Error cargando los detalles del libro:', error);
      showError('No se pudieron cargar los detalles del libro.');
    }
  }
  
  // Mostrar mensajes de error
  function showError(message) {
    errorMessage.style.display = 'block';
    errorMessage.textContent = message;
  }

  // Exponer las funciones para ser llamadas desde los botones
  window.searchByISBN = searchByISBN;
  window.searchByName = searchByName;

  // Si estamos en la página de detalles, cargar los detalles
  if (bookDetails) {
    getBookDetails();
  }
});
