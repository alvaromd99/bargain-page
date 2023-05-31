import { Route } from 'react-router-dom'
import './App.css'
import { Routes } from 'react-router-dom'

const Home = () => <h1>Home</h1>

const SearchPage = () => <h1>Search Page</h1>

function App() {
	return (
		<div className='App'>
			<header>
				<h1>Bargains 🤑</h1>
				<nav>
					<ul>
						<li>
							<a href='/search-page'>Search Page</a>
						</li>
						<li>
							<a href='/home'>Home</a>
						</li>
					</ul>
				</nav>
			</header>
			<Routes>
				<Route path='/home' element={<Home />} />
				<Route path='/search-page' element={<SearchPage />} />
			</Routes>
		</div>
	)
}

export default App
