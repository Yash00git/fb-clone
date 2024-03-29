import React, {useState, useEffect} from 'react'
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStateValue } from './StateProvider';



function Header() {
    const [{ user }, dispatch] = useStateValue();
    const [search, setSearch] =  useState("")
    const [query, setQuery] = useState('TheViralFever')

    useEffect(() => {
        getPage();
      }, [query]);


    const getPage = () => {
    }

    const updateSearch = e => {
        setSearch(e.target.value);
    };
     
    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        setSearch('');
    }

    return (
        <div className="header">
         <div className="header__left">
             <img src="https://cdn.iconscout.com/icon/free/png-256/facebook-logo-2019-1597680-1350125.png" 
             alt=""/>

             <div className="header__input">
                <form onSubmit={getSearch} className="search-from">
                    <input placeholder="Search Facebook" type="text" value={search} onChange={updateSearch} />
                    <button type="submit">
                    Search
                    </button>  
                </form>
             </div>
         </div>

         <div className="header__center">
            <div className="header__option 
            header__option--active">
                <HomeIcon fontSize="Large" />
            </div>
            <div className="header__option">
                <FlagIcon fontSize="Large" />
            </div>
            <div className="header__option">
                <SubscriptionsOutlinedIcon fontSize="Large" />
            </div>
            <div className="header__option">
                <StorefrontOutlinedIcon fontSize="Large" />
            </div>
            <div className="header__option">
                <SupervisedUserCircleIcon fontSize="Large" />
            </div>
         </div>
            
         <div className="header__right">
             <div className="header__info">
                 <Avatar src={user.photoURL} />
                 <h4>{user.displayName}</h4>
             </div>
             
             <IconButton>
                 <AddIcon />
             </IconButton>
             <IconButton>
                 <ForumIcon />
             </IconButton>
             <IconButton>
                 <NotificationsActiveIcon />
             </IconButton>
             <IconButton>
                 <ExpandMoreIcon />
             </IconButton>
         </div>
        </div>
    )
}

export default Header

