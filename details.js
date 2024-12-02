document.addEventListener('DOMContentLoaded', async () => {
    const detailsDiv = document.getElementById('details');
    const errorMessage = document.getElementById('error-message');
  
    const params = new URLSearchParams(window.location.search);
    const bookId = params.get('id');
  
    if (!bookId) {
      showError('No se proporcionó un ID válido.');
      return;
    }
  
    try {
      const response = await fetch(`https://openlibrary.org${bookId}.json`);
      if (!response.ok) throw new Error('Error al cargar los detalles del libro');
  
      const data = await response.json();
      displayDetails(data);
    } catch (error) {
      console.error(error);
      showError('No se pudieron cargar los datos del libro.');
    }
  
    function displayDetails(book) {
      detailsDiv.innerHTML = `
        <h2>${book.title}</h2>
        <p><strong>Autor:</strong> ${book.authors ? book.authors.map(a => a.name).join(', ') : 'Desconocido'}</p>
        <p><strong>Año de publicación:</strong> ${book.first_publish_year || 'Desconocido'}</p>
        <p><strong>Descripción:</strong> ${book.description || 'No disponible'}</p>
      `;
    }
  
    function showError(message) {
      errorMessage.style.display = 'block';
      errorMessage.textContent = message;
    }
  });
  