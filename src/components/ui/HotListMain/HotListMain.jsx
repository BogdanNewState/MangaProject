/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import style from './HotListMain.module.scss'

const HotListMain = ({ manga }) => {
	const dispatch = useDispatch()
	const favoriteManga =
		useSelector(state => state.mangaReducer.favoriteManga) || []

	const handleRemoveFavorite = id => {
		dispatch({ type: 'REMOVE_FAVORITE', id })
	}

	const isFavorite = id => {
		return favoriteManga.find(item => item.id === id)
	}

	return (
		<div className={style.HotListMain}>
			<ul className={style.list}>
				{manga.map(item => {
					return isFavorite(item.id) ? (
						<li className={style.item} key={item.id}>
							<Link className={style.link} to={`/manga/${item.id}`}>
								<img src={item.image} alt={'Manga'} />
								<p>
									{item.title.length > 7
										? item.title.slice(0, 7) + '...'
										: item.title}
								</p>
							</Link>
							<button onClick={() => handleRemoveFavorite(item.id)}>
								unLike
							</button>
						</li>
					) : (
						''
					)
				})}
			</ul>
		</div>
	)
}

export default HotListMain
