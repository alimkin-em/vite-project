import { useState } from 'react'
import styles from './app.module.css'

function App() {
	const [value, setValue] = useState('')
	const [list, setList] = useState([])
	const [error, setError] = useState('')
	const [isValueVaild, setIsValueVaild] = useState(false)

	// let updatedList = []

	const onInputButtonClick = () => {
		const promptValue = prompt('Введите значение').trim()
		if (promptValue.length < 3) {
			setError('Введенное значение должно содержать минимум 3 символа')
			setIsValueVaild(false)
		} else {
			setError('')
			setValue(promptValue)
			setIsValueVaild(true)
		}
		console.log(promptValue)
	}

	const onAddButtonClick = () => {
		const item = {
			id: Date.now(),
			date: new Date().toLocaleString(),
			value,
		}
		setList((list) => [...list, item])
		setError('')
		setValue('')
		setIsValueVaild(false)
	}

	return (
		<div className={styles.app}>
			<h1 className={styles['page-heading']}>Ввод значения</h1>
			<p className={styles['no-margin-text']}>
				Текущее значение
				<code> value</code>: &quot;
				<output className={styles['current-value']}>{value}</output>&quot;
			</p>
			{error !== '' && <div className={styles.error}>{error}</div>}
			<div className={styles['buttons-container']}>
				<button className={styles.button} onClick={onInputButtonClick}>
					Ввести новое
				</button>
				<button
					className={styles.button}
					disabled={!isValueVaild}
					onClick={onAddButtonClick}
				>
					Добавить в список
				</button>
			</div>
			<div className={styles['list-container']}>
				<h2 className={styles['list-heading']}>Список:</h2>
				<p className={styles['no-margin-text']}>Нет добавленных элементов</p>
				<ul className={styles.list}>
					{list.map((listItem) => (
						<li className={styles['list-item']} key={listItem.id}>
							{listItem.value} - {listItem.date}
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default App
