import React, { useState } from "react"
//Importamos la aplicación/credenciales
import firebaseApp from "./firebase/credenciales"
import Sidebar from "./views/Sidebar"
import ChatScreen from "./views/ChatScreen"
import Login from "./views/Login"
import Modal from "./components/Modal"
import styled from 'styled-components'
// Conforme se necesite, importar los demás servicios y funciones. Por ejemplo:

import { getAuth, onAuthStateChanged } from "firebase/auth"
const auth = getAuth(firebaseApp)

function App() {
	const [usuarioGlobal, setUsuarioGlobal] = useState(null)
	const [canalActivo, setCanalActivo] = useState(null)
	onAuthStateChanged(auth, (usuarioFirebase) => {
		if (usuarioFirebase) {
			setUsuarioGlobal(usuarioFirebase)
			console.log('se inicio sesión')
		}
		else {
			setUsuarioGlobal(null)
		}
	})

	const [window, setWindow] = useState(false)

	return (

		<div className="app">
		
				
		<div className="button">
				<button onClick={() => setWindow(!window)}> Modal  </button>
				</div>

			<Modal

				modal={window}
				abrirmodal={setWindow}

			>
			</Modal>
			{usuarioGlobal ? (
				<>
					{" "}
					<Sidebar
						usuarioGlobal={usuarioGlobal}
						setCanalActivo={setCanalActivo}
					/>{" "}
					<ChatScreen canalActivo={canalActivo} usuario={usuarioGlobal} />{" "}
				</>
			) : (
				<Login />
			)}
		</div>
	)
}

export default App

