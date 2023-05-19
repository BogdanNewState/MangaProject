/* eslint-disable react/prop-types */
import { useState } from 'react'
import { Link } from 'react-router-dom'

import Modal from '../Modal/Modal'

import style from './Header.module.scss'
import USER from '../../../images/user.png'

const Header = ({ isSearch, search, setSearch, manga }) => {
	// MODAL WINDOW
	const [isOpen, setIsOpen] = useState(false)

	const handleSearch = e => {
		setSearch(e.target.value)
	}

	// OPEN MODAL
	const handleOpenModal = () => {
		setIsOpen(true)
	}

	const { username } = JSON.parse(sessionStorage.getItem('sign')) || {}
	console.log(username)

	return (
		<div className={style['header']}>
			<div className={style['block-logo']}>
				<Link to='/'>
					<h1 className={style['logo']}>Manga-project</h1>
				</Link>
			</div>
			{isSearch ? (
				<div
					// className={isOpen ? style['active-search'] : style['block-search']}
					className={style['block-search']}
				>
					<input
						type='text'
						placeholder='Search'
						value={search}
						onChange={handleSearch}
						onClick={handleOpenModal}
					/>

					{isOpen ? (
						<Modal
							setIsOpen={setIsOpen}
							manga={manga}
							search={search}
							open={handleOpenModal}
						/>
					) : (
						''
					)}
				</div>
			) : (
				''
			)}
			<nav className={style['block-nav']}>
				<ul className={style['list']}>
					<li>
						<Link
							to='/'
							className={'/' === window.location.pathname ? style.active : ''}
						>
							Home
						</Link>
					</li>
					{username === '' ? (
						<button className={style['btn-user']} disabled>
							User
						</button>
					) : (
						<li>
							{username === '' ? (
								<Link to={'/auth'}>
									<div className={style.user}>
										<span
											className={
												'/user' === window.location.pathname ? style.active : ''
											}
										>
											{username}
										</span>
										<img src={USER} alt='IMG' />
									</div>
								</Link>
							) : (
								<Link to={'/user'}>
									<div className={style.user}>
										<span
											className={
												'/user' === window.location.pathname ? style.active : ''
											}
										>
											{username}
										</span>
										<img src={USER} alt='IMG' />
									</div>
								</Link>
							)}
						</li>
					)}
				</ul>
			</nav>
		</div>
	)
}

export default Header
