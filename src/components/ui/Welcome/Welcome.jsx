/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom'

import style from './Welcome.module.scss'

const Welcome = () => {
	return (
		<div className={style['welcome']}>
			<div className={style['block-title']}>
				<h1 className={style['title']}>
					It's time for
					<br />
					<span>Manga</span>
				</h1>
			</div>
			<p className={style['text']}>
				<span>Sign in</span> or <span>Sign up</span> to your account?
			</p>
			<div className={style['block-buttons']}>
				<Link to='/auth'>
					<button className={style['button-sign-in']}>Sign in</button>
				</Link>
				<Link to='/auth'>
					<button className={style['button-sign-up']}>Sign up</button>
				</Link>
			</div>
		</div>
	)
}

export default Welcome
