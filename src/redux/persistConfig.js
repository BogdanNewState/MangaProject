import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import rootReducer from './reduce.js' // Импортируйте ваш корневой редуктор

const persistConfig = {
	key: 'root', // Ключ для сохранения в хранилище
	storage, // Выбранное хранилище
	// Другие настройки, если необходимо
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer)
const persistor = persistStore(store)

export { store, persistor }
