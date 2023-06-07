import './App.css'
import { Route, Routes, Link, useParams, Outlet } from 'react-router-dom'
import { MyNavLink } from './MyNavLink.jsx'

// TODO Darle estilos y ponerlo bonito
// TODO Cambiar la pagina de bargains a tacos

const Home = () => <h1>Home</h1>

const SearchPage = () => {
	const tacos = ['pastor', 'carnitas', 'guisado', 'canasta']
	return (
		<div>
			<h1>Search Page</h1>
			<ul>
				{tacos.map((taco) => (
					<li key={taco}>
						<Link to={`/tacos/${taco}`}>{taco}</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

const Tacos = () => {
	const { taco } = useParams()
	return (
		<div>
			<h1>Tacos</h1>
			{taco}
			<Link to='details'>Go to details</Link>
			<Outlet />
		</div>
	)
}

const TacoDetails = () => {
	const { taco } = useParams()
	return <h1>Taco Details {taco}</h1>
}

const TacosIndex = () => {
	return <h1>Tacos Index</h1>
}

function App() {
	return (
		<div className='App'>
			<header>
				<h1>Bargains 🤑</h1>
				<nav>
					<ul>
						<li>
							<MyNavLink to='/'>Home</MyNavLink>
						</li>
						<li>
							<MyNavLink to='/search-page'>Search Page</MyNavLink>
						</li>
					</ul>
				</nav>
			</header>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/search-page' element={<SearchPage />} />
				<Route path='/tacos/:taco' element={<Tacos />}>
					<Route index element={<TacosIndex />} />
					<Route path='details' element={<TacoDetails />} />
				</Route>
				<Route
					path='/tacos/megataco'
					element={<h1 style={{ color: 'red' }}>MegaTaco</h1>}
				/>
				<Route path='*' element={<h1>404 Not found</h1>} />
			</Routes>
		</div>
	)
}

export default App
