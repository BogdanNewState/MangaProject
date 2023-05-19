/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'

import style from './MangaAll.module.scss'

const MangaAll = ({ username, manga }) => {
	const dispatch = useDispatch()
	const favoriteManga =
		useSelector(state => state.mangaReducer.favoriteManga) || []

	const handleFavorite = manga => {
		dispatch({ type: 'ADD_FAVORITE', manga })
	}

	const handleRemoveFavorite = id => {
		dispatch({ type: 'REMOVE_FAVORITE', id })
	}

	const isFavorite = id => {
		return favoriteManga.find(item => item.id === id)
	}

	return (
		<>
			<h5 className={style['title-collection']}>Collection</h5>
			<div className={style['manga-all']}>
				{manga.map(item => {
					return (
						<div className={style['manga-content']} key={item.id}>
							<div className={style['manga-img-text']}>
								<div className={style['block-img']}>
									<Link to={`/manga/${item.id}`}>
										<img src={item.image} alt='IMG' />
									</Link>
								</div>

								<div className={style['block-info']}>
									<Link to={`/manga/${item.id}`}>
										<h1 className={style['title']}>{item.title}</h1>
									</Link>
									<p className={style['description']}>
										{item.description.length > 100
											? item.description.slice(0, 150) + '...'
											: 'No description'}
									</p>
								</div>
							</div>
							{username === '' ? (
								''
							) : (
								<div className={style['block-buttons']}>
									{isFavorite(item.id) ? (
										<MdFavorite
											className='favorite'
											size={25}
											onClick={() => handleRemoveFavorite(item.id)}
										/>
									) : (
										<MdFavoriteBorder
											className='favorite'
											size={25}
											onClick={() => handleFavorite(item)}
										/>
									)}
								</div>
							)}
						</div>
					)
				})}
			</div>
		</>
	)
}

export default MangaAll
