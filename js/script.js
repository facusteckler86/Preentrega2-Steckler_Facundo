fetch("/api/contacto", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({ nombre, email })
})
.then(res => res.json())
.then(data => {
  console.log("Respuesta del servidor:", data);
})
.catch(error => {
  console.error("Error al enviar:", error);
});
