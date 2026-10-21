# Catálogo Disney API - LP2 (Equipo 3)
Aplicación web en HTML, CSS y JS puro que consulta la API de Disney (`api.disneyapi.dev`), permitiendo explorar personajes y buscar por nombre con manejo de estados.

## Cómo abrir el proyecto
Abrir la carpeta en VS Code, hacer clic derecho sobre el archivo `index.html` y seleccionar **«Open with Live Server»**.

## Cómo provocar los 5 estados para probarlos
1. **Cargando:** F12 → Network → «Slow 4G» y recargar la página (se ve el indicador de carga y botones apagados).
2. **Con datos:** Una búsqueda normal (ej: «Mickey») muestra la lista y el conteo de resultados.
3. **Sin resultados:** Buscar «zzzzqq» para ver el mensaje «No hay resultados para...».
4. **Error del servidor:** Cambiar la dirección `BASE_URL` en `js/api.js` a una que no exista para ver el mensaje con el código del error.
5. **Sin conexión:** Apagar el Wi-Fi de la computadora y presionar «Buscar» para ver el mensaje de que no hay conexión.
