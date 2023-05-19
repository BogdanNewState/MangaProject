/* eslint-disable react/prop-types */
import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineCloseSquare } from 'react-icons/ai'

import style from './Modal.module.scss'

const Modal = ({ setIsOpen, manga, search, open }) => {
	const modalRef = useRef()

	// CLOSE MODAL ON CLICK OUTSIDE
	useEffect(() => {
		const handleClickOutside = e => {
			if (modalRef.current && !modalRef.current.contains(e.target)) {
				setIsOpen(false)
			}
		}
		document.addEventListener('mousedown', handleClickOutside)
		return () => document.removeEventListener('mousedown', handleClickOutside)
	}, [open])

	// CLOSE MODAL
	const handleCloseModal = () => {
		setIsOpen(false)
	}

	// FILTER MANGAS BY SEARCH
	const filteredManga = manga.filter(({ title }) =>
		title.toLowerCase().includes(search.toLowerCase())
	)

	return (
		<div className={style.modal} ref={modalRef}>
			<div className={style['block-close']}>
				<AiOutlineCloseSquare
					className={style.close}
					size={20}
					onClick={handleCloseModal}
				/>
			</div>
			<div className={style['block-content']}>
				{search === '' ? (
					<p className={style['write-name']}>Write name of manga</p>
				) : (
					<ul className={style['list']}>
						{filteredManga.map(({ id, title, image }) => (
							<li key={id}>
								<Link className={style.link} to={`/manga/${id}`}>
									<img src={image} alt={title} />
									<p>{title}</p>
								</Link>
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	)
}

export default Modal
