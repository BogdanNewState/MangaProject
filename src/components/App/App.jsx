import { Routes, Route } from 'react-router-dom'

import Main from '../Page/Main/Main'
import Auth from '../Page/Auth/Auth'
import AloneManga from '../Page/AloneManga/AloneManga'
import User from '../Page/User/User'

const App = () => {
	return (
		<Routes>
			<Route path={'/'} element={<Main />} />
			<Route path={'/auth'} element={<Auth />} />
			<Route path={'/user'} element={<User />} />
			<Route path={'/manga/:id'} element={<AloneManga />} />
		</Routes>
	)
}

export default App
