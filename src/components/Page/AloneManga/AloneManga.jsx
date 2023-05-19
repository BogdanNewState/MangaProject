import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { AiFillStar } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'

import { getMangaById } from '../../../data/mangaData.js'

import Footer from '../../ui/Footer/Footer.jsx'
import Header from '../../ui/Header/Header.jsx'

import style from './AloneManga.module.scss'

import ONE from '../../../images/pg-1.jpg'
import TWO from '../../../images/pg-2.jpg'
import THREE from '../../../images/pg-3.jpg'

const AloneManga = () => {
	const { id } = useParams()
	const [manga, setManga] = useState([])
	const [currentPage, setCurrentPage] = useState(0)
	const favoriteManga =
		useSelector(state => state.mangaReducer.favoriteManga) || []

	useEffect(() => {
		getMangaById(id).then(item => {
			setManga(item)
		})
	}, [])

	const isFavorite = id => {
		return favoriteManga.find(item => item.id === id)
	}

	const arrPages = [ONE, TWO, THREE]

	const handleNext = () => {
		if (currentPage < arrPages.length - 1) {
			setCurrentPage(prevPage => prevPage + 1) // Увеличиваем индекс текущей страницы на 1
		}
	}

	const handlePrev = () => {
		if (currentPage > 0) {
			setCurrentPage(prevPage => prevPage - 1) // Уменьшаем индекс текущей страницы на 1
		}
	}

	return (
		<>
			<div className={style.aloneManga}>
				<Header />
				{manga.length === 0 ? (
					<div className={style.loading}>
						<h1>Loading...</h1>
					</div>
				) : (
					<div className={style.content}>
						<div className={style['img-block']}>
							<img src={manga.image} alt='IMG' />
							<div className={style['under-img-block']}>
								<div className={style['type-block']}>
									<p className={style.type}>Type: {manga.type}</p>
									<p className={style.volumes}>
										Volumes:{' '}
										{manga.volumes === null ? 'No information' : manga.volumes}
									</p>
									<p className={style.chapters}>
										Chapters:{' '}
										{manga.chapters === null
											? 'No information'
											: manga.chapters}
									</p>
									<p className={style.status}>
										Status: {manga.publishing ? 'Publishing' : 'Finished'}
									</p>
									<p className={style.rating}>
										Rating: {manga.scored}
										<AiFillStar color='#FFD700' size={20} />
									</p>
									{isFavorite(manga.id) ? <p>Favorite</p> : <p>Not Favorite</p>}
								</div>
								<div className={style.line}></div>
								<div className={style['author-block']}>
									<p className={style.name}>
										Author: <a href={manga.authorUrl}>{manga.authorName}</a>
									</p>
								</div>
							</div>
						</div>
						<div className={style['text-block-alone']}>
							<div className={style['text-block']}>
								<div className={style['title-desc']}>
									<h2 className={style.title}>{manga.title}</h2>
									<p className={style.description}>{manga.description}</p>
								</div>
							</div>
							<div className={style.reader}>
								<div className={style['page-btn']}>
									<GrFormPrevious size={30} onClick={handlePrev} />
									<GrFormNext size={30} onClick={handleNext} />
								</div>
								<div className={style.pages}>
									<img src={arrPages[currentPage]} alt='IMG' />
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
			<Footer />
		</>
	)
}

export default AloneManga
