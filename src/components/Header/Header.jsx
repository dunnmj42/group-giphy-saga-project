import { HashRouter as Router, Route, Link } from 'react-router-dom'

function Header () {

    return(
        <Router>
            <nav>
                <ul>
                    <li><Link to='/search'>SEARCH</Link></li>
                    <li><Link to='/favorites'>FAVORITES</Link></li>
                </ul>
            </nav>
        </Router>
        
    )
}

export default Header