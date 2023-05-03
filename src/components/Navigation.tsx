import { Link } from "react-router-dom"

const Navigation = () => {
  return (
	<nav>
		<Link to={'/'}>Home</Link>
		<Link to={'/who-we-are'}>Who We Are</Link>
		<Link to={'/what-we-do'}>What We Do</Link>
		<Link to={'/get-involved'}>Get Involved!</Link>
	</nav>
  )
}

export default Navigation