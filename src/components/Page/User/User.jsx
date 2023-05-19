import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { MdFavorite } from 'react-icons/md'

import Header from '../../ui/Header/Header'
import Footer from '../../ui/Footer/Footer'

import style from './User.module.scss'

const User = () => {
	const dispatch = useDispatch()
	const favoriteManga =
		useSelector(state => state.mangaReducer.favoriteManga) || []

	const handleRemoveFavorite = id => {
		dispatch({ type: 'REMOVE_FAVORITE', id })
	}

	const { username } = JSON.parse(sessionStorage.getItem('sign'))

	return (
		<>
			<div className={style.user}>
				<Header />
				<div className={style['user-content']}>
					<div className={style['user-body']}>
						<div className={style['user-info']}>
							<ul>
								<li>
									Name: <span>{username}</span>
								</li>
							</ul>
						</div>
						<div className={style['user-manga']}>
							<ul>
								{favoriteManga.length > 0 ? (
									favoriteManga.map(item => {
										return (
											<li key={item.id}>
												<div className={style['block-left']}>
													<img src={item.image} alt='IMG' />
													<Link to={`/manga/${item.id}`}>
														<h2 className={style['title']}>
															{item.title.length > 20
																? item.title.slice(0, 20) + '...'
																: item.title}
														</h2>
													</Link>
												</div>
												<div className={style['block-right']}>
													<MdFavorite
														className={style['icon']}
														size={26}
														onClick={() => handleRemoveFavorite(item.id)}
													/>
												</div>
											</li>
										)
									})
								) : (
									<p>No favorite manga</p>
								)}
							</ul>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	)
}

export default User
