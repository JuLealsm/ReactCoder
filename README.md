# Proyecto de e-commerce para el curso ReactJs de CoderHouse

Este proyecto es una aplicación de e-commerce desarrollada con React.js como parte del curso de React de la academia Coderhouse. Utiliza Firebase como backend para gestionar la base de datos de productos y las órdenes de compra.

Su utilidad radica en demostrar cómo construir una SPA (Single Page Application) moderna, eficiente y completamente funcional con React, integrando funcionalidades reales como carrito de compras, visualización de productos, detalle de producto, y checkout con persistencia de datos en la nube (Firebase). Es ideal tanto para aprender como para escalar a proyectos reales de comercio electrónico.

## Descripción de Componentes

Carpeta components/:

Cart.jsx: Componente principal del carrito. Muestra los productos agregados.

CartEmpty.jsx: Se renderiza cuando el carrito está vacío.

CartView.jsx: Vista detallada del carrito con controles para modificar o eliminar ítems.

CartWidget.jsx: Icono del carrito con contador, visible en la Navbar.

Checkout.jsx: Formulario para finalizar la compra y generar una orden en Firebase.

Item.jsx: Card de producto individual con nombre, precio y botón para ver más detalles.

ItemAmount.jsx: Componente para seleccionar la cantidad de un producto.

ItemDetails.jsx: Muestra información detallada del producto seleccionado con botón para agregar al carrito y con ItemAmount.jsx.

ItemDetailsContainer.jsx: Componente contenedor que obtiene los datos del producto desde Firebase.

ItemList.jsx: Lista de productos que se muestran en pantalla.

ItemListContainer.jsx: Componente contenedor que consulta y pasa los productos a ItemList.

LoaderComponent.jsx: Componente visual de carga para esperas asíncronas.

Navbar.jsx: Barra de navegación principal con enlaces y el CartWidget.

NotFound404.jsx: Página de error para rutas inexistentes.

ScrollToTopButton.jsx: Botón que permite volver al inicio de la página.

Carpeta context/:

CartContext.jsx: Provee y gestiona el contexto global del carrito de compras.

Carpeta mock/:

asyncMock.jsx: Datos simulados o lógica de promesas para pruebas antes de conectar Firebase.

Carpeta service/:

firebase.js: Configuración e inicialización de Firebase, junto con funciones para interactuar con la base de datos.


## Herramientas y Librerías

Este proyecto fue desarrollado utilizando las siguientes herramientas y librerías:

### Librerías Principales (Core Libraries)
react (v19.0.0): Biblioteca principal de React para construir interfaces de usuario reactivas.

react-dom (v19.0.0): Se encarga del renderizado de componentes React en el DOM.

react-router-dom (v7.5.3): Manejo de rutas y navegación dentro de la aplicación.

### Interfaz de Usuario e Íconos (UI and Icons)
react-icons (v5.5.0): Proporciona una colección de íconos personalizables (como RiCandleLine, PiNotebookDuotone, PiTeaBag, etc.).

react-spinners (v0.17.0): Animaciones de carga, como BarLoader, para mejorar la experiencia del usuario.

react-toastify (v11.0.5): Para mostrar notificaciones tipo toast de manera simple y elegante.

### Backend y Base de Datos
firebase (v11.8.1): Plataforma Backend-as-a-Service utilizada para servicios de autenticación, almacenamiento y base de datos en tiempo real (Firestore).


## Cómo clonar el repositorio

Para clonar este repositorio desde GitHub, sigue los siguientes pasos:

 1 - Abre tu terminal o consola de comandos

2 - Ejecuta el siguiente comando:

```bash
git clone https://github.com/JuLealsm/ReactCoder.git
```

3 -Accede al directorio del proyecto:
```bash
cd reajscoder
```
4 - Instala las dependencias necesarias:
```bash
npm install
```
5 - Inicia la aplicación en modo desarrollo:

```bash
npm run dev
```


### Desarollado por Juliana Leal