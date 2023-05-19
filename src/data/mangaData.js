/* eslint-disable no-mixed-spaces-and-tabs */
import { allManga, aloneManga } from '../api/api'

export const getManga = async () => {
	try {
		const { data } = await allManga()

		const getItem = data
			? data.map(item => ({
					id: item.mal_id,
					title: item.title,
					description: item.synopsis,
					image: item.images.webp.image_url,
					chapters: item.chapters,
					volumes: item.volumes,
					publishing: item.publishing,
					scored: item.scored,
					type: item.type,
					authorName: item.authors[0].name,
					authorUrl: item.authors[0].url,
			  }))
			: []

		return {
			getItem,
		}
	} catch (error) {
		console.log('getManga')
		console.log(error)
	}
}

export const getMangaById = async id => {
	try {
		const { data } = await aloneManga(id)

		const manga = data
			? {
					id: data.mal_id,
					title: data.title,
					description: data.synopsis,
					image: data.images.webp.image_url,
					chapters: data.chapters,
					volumes: data.volumes,
					publishing: data.publishing,
					scored: data.scored,
					type: data.type,
					authorName: data.authors[0].name,
					authorUrl: data.authors[0].url,
			  }
			: null

		return manga
	} catch (error) {
		console.log('getMangaById')
		console.log(error)
		return null
	}
}
