// Cargar HEADER
fetch("header.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("header").innerHTML = data;
  })
  .catch(error => console.error("Error cargando header:", error));

// Cargar FOOTER
fetch("footer.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("footer").innerHTML = data;
  })
  .catch(error => console.error("Error cargando footer:", error));