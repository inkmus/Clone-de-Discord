// Importamos la función para inicializar la aplicación de Firebase
import { initializeApp } from "firebase/app"

// Añade aquí tus credenciales
const firebaseConfig = {
  
}

// Inicializamos la aplicación y la guardamos en firebaseApp
const firebaseApp = initializeApp(firebaseConfig)
// Exportamos firebaseApp para poder utilizarla en cualquier lugar de la aplicación
export default firebaseApp
