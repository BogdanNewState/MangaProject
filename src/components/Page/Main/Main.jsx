/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'

import Header from '../../ui/Header/Header'
import Footer from '../../ui/Footer/Footer'
import MangaAll from '../../ui/MangaAll/MangaAll'
import MangaCarousel from '../../ui/MangaCarousel/MangaCarousel'
import Welcome from '../../ui/Welcome/Welcome'
import HotListMain from '../../ui/HotListMain/HotListMain'
import Hello from '../../ui/Hello/Hello'

import { getManga } from '../../../data/mangaData'

import style from './Main.module.scss'
import '../../../styles/global.scss'

const Main = () => {
	// DATA
	const [manga, setManga] = useState([])

	// HEADER
	const [isHeaderSearch, isSetHeaderSearch] = useState(false)
	const [headerSearch, setHeaderSearch] = useState('')

	// PLUG IN AUTHENTICATION
	const { username } = JSON.parse(sessionStorage.getItem('sign')) || {
		username: '',
	}

	useEffect(() => {
		getManga().then(({ getItem }) => {
			setManga(getItem)
		})
	}, [])

	const forEachFavorite = () => {
		return manga.filter(item => item.favorite === true)
	}

	return (
		<div className={style.main}>
			{manga.length === 0 ? (
				<div className={style.loading}>
					<h1>Loading...</h1>
				</div>
			) : (
				<>
					<div className={style['main-header']}>
						<Header
							username={username}
							isSearch={isHeaderSearch}
							search={headerSearch}
							setSearch={setHeaderSearch}
							manga={manga}
						/>
						<div
							className={
								username === '' ? style['welcome-guest'] : style['welcome-user']
							}
						>
							{username === '' ? (
								<Welcome />
							) : (
								<div className={style['user-content']}>
									<Hello
										username={username}
										search={isHeaderSearch}
										setSearch={isSetHeaderSearch}
									/>
									{forEachFavorite() ? (
										<HotListMain manga={manga} setManga={setManga} />
									) : (
										<p className={style.empty}>Manga no list</p>
									)}
								</div>
							)}
							<MangaCarousel username={username} manga={manga} />
						</div>
					</div>
					<div className={style.content}>
						<MangaAll username={username} manga={manga} setManga={setManga} />
					</div>
					<Footer />
				</>
			)}
		</div>
	)
}

export default Main
