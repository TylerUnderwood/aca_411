import React from 'react'
import { Link } from 'react-router-dom'
import { 
	AppBar, 
	Toolbar, 
	IconButton, 
	Typography 
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

const Navigation = ( props ) => {
	
    return (
        <AppBar position="relative">
            <Toolbar>
				<Typography variant="h6" style={{ flexGrow: "1" }}>
					<Link to="/">Austin Small Business</Link>
				</Typography>
                <ul className="nav-list">
					<li className="nav-list-item">
                        <Link to="/listings">Listings</Link>
                    </li>
					{ props.user.loggedIn && (
						<li className="nav-list-item">
							<Link to="/listings/add">Add</Link>
						</li>
					)}
					{ props.user.loggedIn ? (
						<li className="nav-list-item">
							<Link to="/login">LOGOUT</Link>
						</li>
					):(
						<li className="nav-list-item">
							<Link to="/login">LOGIN</Link>
						</li>
					)}
                </ul>
				<IconButton color="inherit">
                    <MenuIcon />
                </IconButton>
            </Toolbar>
			{ props.user.loggedIn && (
				<div className="logged-in-bar">
					<span>User Name Here</span>
				</div>
			)}
        </AppBar>
    )
}

export default Navigation