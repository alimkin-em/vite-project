import { useState } from 'react'
import { createElement } from 'react'
import { Fragment } from 'react'
import ReactLogo from './assets/react.svg?react'
import ViteLogo from './assets/vite.svg?react'
import './App.css'

function App() {
	//Декларативный стиль
	const [count, setCount] = useState(0)
	//Декларативный стиль
	return createElement(Fragment, null, [
		createElement('div', null, [
			createElement(
				'a',
				{ href: 'https://vite.dev', target: '_blank' },
				createElement(ViteLogo, { className: 'logo' }),
			),
			createElement(
				'a',
				{ href: 'https://react.dev', target: '_blank' },
				createElement(ReactLogo, { className: 'logo react' }),
			),
		]),
		createElement('h1', null, 'Vite + React'),
		createElement('div', { className: 'card' }, [
			createElement(
				'button',
				{ onClick: () => setCount((count) => count + 1) },
				`count is ${count}`,
			),
			createElement('p', null, 'Edit <code>src/App.jsx</code> and save to test HMR'),
		]),
		createElement(
			'p',
			{ className: 'read-the-docs' },
			'Click on the Vite and React logos to learn more',
		),
		createElement('p', null, new Date().getFullYear()),
	])
}

export default App
