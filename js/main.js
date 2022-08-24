let edad = parseInt(prompt("Por cuestiones legales, solo se nos permite la venta a mayores de 18 años. ¿Cuantos años tienes?"));
while (edad < 18) {
  alert( "Lamentablemente no podras seguir visitando esta pagina, vuelve cuando cumplas la mayoria de edad." );
  edad = parseInt(prompt("Hola de nuevo, ingresa tu edad"));
}
alert("Adelante, puedes conseguir nuestros productos. Bienvenido")