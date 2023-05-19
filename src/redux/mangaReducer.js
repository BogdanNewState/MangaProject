const defaultState = {
	favoriteManga: [], // Изначально список избранных манг пуст
}

export const mangaReducer = (state = defaultState, action) => {
	switch (action.type) {
		case 'ADD_FAVORITE':
			return {
				...state,
				favoriteManga: [...state.favoriteManga, action.manga], // Добавляем мангу в список избранных
			}
		case 'REMOVE_FAVORITE':
			return {
				...state,
				favoriteManga: state.favoriteManga.filter(
					item => item.id !== action.id
				), // Удаляем мангу из списка избранных по ID
			}
		default:
			return state
	}
}
