/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'

import style from './MangaCarousel.module.scss'
import 'swiper/css'
import 'swiper/css/navigation'
import './mySwiper.css'

const MangaCarousel = ({ username, manga }) => {
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
		<Swiper
			slidesPerView={1}
			spaceBetween={50}
			centeredSlides={true}
			autoplay={{
				delay: 10000,
				disableOnInteraction: false,
			}}
			navigation={true}
			modules={[Autoplay, Navigation]}
			className={style.swiper}
		>
			{manga.map(item => {
				return (
					<SwiperSlide key={item.id}>
						<div className={style['manga-carousel']}>
							<div className={style['block-content']}>
								<div className={style['block-img']}>
									<Link to={`/manga/${item.id}`}>
										<img src={item.image} alt='IMG' />
									</Link>
								</div>
								<div className={style['block-info']}>
									<Link to={`/manga/${item.id}`}>
										<h2 className={style['title']}>
											{item.title.length > 20
												? item.title.slice(0, 20) + '...'
												: item.title}
										</h2>
									</Link>
									{username === '' ? (
										''
									) : (
										<div className={style['favorite-rating']}>
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
							</div>
						</div>
					</SwiperSlide>
				)
			})}
		</Swiper>
	)
}

export default MangaCarousel
