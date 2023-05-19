import axios from 'axios'

const url = 'https://api.jikan.moe/v4/'

export const allManga = async () => {
	try {
		const { data } = await axios.get(`${url}manga`)
		return data
	} catch (error) {
		console.log('allManga')
		console.log(error)
	}
}

export const aloneManga = async id => {
	try {
		const { data } = await axios.get(`${url}manga/${id}`)

		return data
	} catch (error) {
		console.log('aloneManga')
		console.log(error)
	}
}
