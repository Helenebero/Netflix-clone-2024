import React from 'react'
import "./header.css";
import NetflixLogo from "../../asset/image/Netflix-Logo-PNG3 (1).png"
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header-outer-container'>
            <div className='header_container'>
                <div className='header-left'>
                    <ul>
                        <li><Link to="/"><img src={NetflixLogo} alt="Netflix Logo" width="100" /></Link></li>
                        {/* <li>Netflix</li> */}
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/tvshows">TVShows</Link></li>
                        <li><Link to="/movies">Movies</Link></li>
                        <li><Link to="/toprated">Top rated</Link></li>
                        <li><Link to="/trending">Trending</Link></li>
                        <li><Link to="/documentaries">Documentaries</Link></li>

                    </ul>
                </div>
                <div className='header-right'>
                    <ul>
                        <li><SearchIcon /></li>
                        <li><NotificationsNoneIcon /></li>
                        <li><AccountBoxIcon /></li>
                        <li><ArrowDropDownIcon /></li>
                    </ul>


                </div>
            </div>

        </div >
    )
}

export default Header
