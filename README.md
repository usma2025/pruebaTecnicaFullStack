# Prueba Tecnica - Full Stack Terrawind

## Resumen:
Este proyecto consiste en una aplicacion web desarrollada con **Next.JS** y **React** en el que se implemento el **API de Google MAPS** para realizar busquedas mediante el campo de texto y así mismo de manera bidireccional en donde se puede obtener el valor de la ubicacion y así mismo genera un autocompletado con lo que se busca

## 1. Decisiones Técnicas
En este caso se opto por el **API de Google MAPS** por las siguientes razones:

- **Precision y cobertura global**: Google maps cuenta con una cobertura global lo que hace que sea mas amplia y sea mas preciso a la hora de usar
- **Integración con servicios de google** La Api ofrece una integracion con otros servicios de Google, como lo son google places que son utlizado para la busqueda de lugares y el autocompletado
- **Facil uso**: Considero que la api de Google Maps es ampliamente utilizada y cuenta con una documentacion detallada, lo que facilita el desarrollo y la integracion de la misma

## 2. Instrucciones para Configurar y Utilizar Claves API

### Obtener la clave API de Google Maps

1. Como primer paso debemos registrarnos en [Google Cloud](https://cloud.google.com/) 

2. Crear un proyecto y se debe habilitar la api de google MAPS en donde se generara la api Key para ser utilizada en el codigo

3. Por ultimo se debe habilitar las otras librerias que se quieren utilizar como los son **Places API** y **Geocoding API**

### Uso de la clave API en el proyecto

- Dentro del archivo `page.js` se define en una constante en el que se guardara la API KEY de Google Maps

```javascript
Const GOOGLE_MAPS_API_KEY = 'API_KEY';
```

### Instrucciones para Ejecutar el proyecto

1. Clonar el repositorio con:
```bash
git clone https://github.com/usma2025/nombreRepositorio.git
```
2. Instalar dependencias:
```bash
cd Repositorio
npm install
```
3. Iniciar el servidor de desarrollo:
```bash
npm run dev
```
4. Dirigirse a la url `http://localhost:3000`

## 3. Limitaciones conocidas y Areas de mejora

### Limitaciones

1. Al depender de la API de **Google MAPS** es que el uso de esta API puede generar costos si se supera los limites establecidos por **Google**
2. El rendimiento se puede ver afectado en dispositivos moviles o conexiones lentas ya que la carga del mapa puede afectar 

### Areas de mejora
1. **Optimizacion movil:** Se puede mejorar la experiencia en dispositivos moviles, asegurando que se cargue de manera eficiente y la interfaz del usuario sea responsiva en la totalidad de dispositivos
2. **Autocompletado:** A pesar de que el autocompletado esta funcionando, se puede incluir un autocompletado en el que lo recomendado por google sea cercana a nuestra ubicacion como lo puede ser la misma aplicacion de google maps
3. **Almacenamiento de ubicaciones:** Se puede implementar la capacidad de almacenar ubicaciones seleccionadas por el usuario en una base de datos o en el almacenamiento local, para su uso en una proxima consulta
4. **Ejecucion de pruebas:** Se puede incluir pruebas unitarias y de integracion para los diferentes componentes utilizados en esta aplicacion

