import React from 'react';
import "./Sidebar.css";
import SidebarRow from './SidebarRow';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import EventIcon from '@material-ui/icons/Event';
import HistoryIcon from '@material-ui/icons/History';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import { useStateValue } from './StateProvider';




function Sidebar() {
    const [{ user }, dispatch] = useStateValue();

    return (
        <div className="sidebar">
            <SidebarRow 
            src={user.photoURL} 
            title={user.displayName} />
            <SidebarRow
             Icon={LocalHospitalIcon}
             title="COVID-19 Information Center"  />
             <SidebarRow Icon={PeopleIcon} title="Friends" />
             <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
             <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
             <SidebarRow Icon={EventIcon} title="Events" />
             <SidebarRow Icon={HistoryIcon} title="Memories" />
             <SidebarRow Icon={BookmarkIcon} title="Saved" />
             <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
             <SidebarRow Icon={ExpandMoreOutlinedIcon} title="See More" />

        </div>
    )
}

export default Sidebar
