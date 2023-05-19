/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react'
import { Link } from 'react-router-dom'

import style from './Auth.module.scss'

const Auth = () => {
	const [isSecond, isSetSecond] = useState(true)
	const [sign, setSign] = useState({
		username: '',
		password: '',
	})

	sessionStorage.setItem('sign', JSON.stringify(sign))

	const handleChange = e => {
		setSign({
			...sign,
			[e.target.name]: e.target.value,
		})
	}

	const handleSubmit = e => {
		e.preventDefault()
	}

	return (
		<div className={style.auth}>
			<div className={style.container}>
				<h1>{isSecond ? 'Sign up' : 'Sign in'}</h1>
				<form className={style.form} onSubmit={handleSubmit}>
					<div className={style.username}>
						<input
							type='text'
							name='username'
							placeholder='Username'
							value={sign.username}
							onChange={handleChange}
							autoComplete='off'
							required
						/>
					</div>
					<div className={style.password}>
						<input
							type='password'
							name='password'
							placeholder='Password'
							value={sign.password}
							onChange={handleChange}
							autoComplete='off'
							required
						/>
					</div>
					<p className={style.text}>
						Don't have an account?{' '}
						<span className={style.span} onClick={() => isSetSecond(!isSecond)}>
							{isSecond ? 'Sign in' : 'Sign up'}
						</span>
					</p>
					<div className={style.buttons}>
						<Link to='/'>
							<button
								className={
									sign.username.length && sign.password.length == 0
										? style.disabled
										: style['button-auth']
								}
								disabled={!sign.username && !sign.password}
							>
								{isSecond ? 'Sign up' : 'Sign in'}
							</button>
						</Link>
						<Link to='/'>
							<button className={style['button-guest']}>Guest</button>
						</Link>
					</div>
				</form>
			</div>
		</div>
	)
}

export default Auth
