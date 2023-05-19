import style from './Footer.module.scss'

const Footer = () => {
	return (
		<div className={style.footer}>
			<div className={style['footer-inner']}>
				<p>Made with love</p>
				<p>Copyright © 2023. All rights reserved.</p>
			</div>
		</div>
	)
}

export default Footer
