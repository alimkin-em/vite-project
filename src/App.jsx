import { useState } from 'react'
import ReactLogo from './assets/react.svg?react'
import ViteLogo from './assets/vite.svg?react'
import './App.css'

function App() {
	//Декларативный стиль
	const [count, setCount] = useState(0)
	//Декларативный стиль
	return (
		<>
			<div>
				<a href="https://vite.dev" target="_blank">
					<ViteLogo className="logo" />
				</a>
				<a href="https://react.dev" target="_blank">
					<ReactLogo className="logo react" />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				{/* Императивный стиль, явно указывается что делаем что увеличить count*/}
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.jsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">Click on the Vite and React logos to learn more</p>
			<p>{new Date().getFullYear()}</p>
		</>
	)
}

export default App
