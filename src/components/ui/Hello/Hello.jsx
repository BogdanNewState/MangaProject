import { Link } from 'react-router-dom'

import style from './Hello.module.scss'

// eslint-disable-next-line react/prop-types
const Hello = ({ username, search, setSearch }) => {
	// SHOW SEARCH
	const handleShow = () => {
		setSearch(true)
	}

	// HIDE SEARCH
	const handleHide = () => {
		setSearch(false)
	}

	return (
		<div className={style.hello}>
			<div className={style.text}>
				<h1>Hello, {username}!</h1>
				<p>Can I help you?</p>
			</div>
			<div className={style['block-buttons']}>
				<div className={style['block-search']}>
					{search ? (
						<button className={style['button-hide']} onClick={handleHide}>
							Hide
						</button>
					) : (
						<button className={style['button-show']} onClick={handleShow}>
							Search
						</button>
					)}
				</div>
				<Link to={'/user'}>
					<button className={style['button-user']}>My account</button>
				</Link>
			</div>
		</div>
	)
}

export default Hello
