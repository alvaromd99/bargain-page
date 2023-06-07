import { NavLink } from 'react-router-dom'

export const MyNavLink = ({ to, children, ...props }) => {
	return (
		<NavLink
			{...props}
			to={to}
			className={({ isActive }) => {
				return isActive ? 'active' : undefined
			}}
		>
			{children}
		</NavLink>
	)
}
