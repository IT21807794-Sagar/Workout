import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';
import ListAltIcon from '@mui/icons-material/ListAlt';
import GroupsIcon from '@mui/icons-material/Groups';
import VerifiedIcon from '@mui/icons-material/Verified';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PendingIcon from '@mui/icons-material/Pending';

export const navigationMenu = [
    {
        title: "Home",
        icon: <HomeIcon />,
        path: '/home'
    },
    {
        title: "Explore",
        icon: <ExploreIcon />,
        path: '/explore'
    },
    {
        title: "Notifications",
        icon: <NotificationsIcon />,
        path: '/notifications' // Corrected path
    },
    {
        title: "Messages",
        icon: <MessageIcon />,
        path: '/messages' // Corrected path
    },
    {
        title: "Lists",
        icon: <ListAltIcon />,
        path: '/lists' // Corrected path
    },
    {
        title: "Communities",
        icon: <GroupsIcon />,
        path: '/communities' // Corrected path
    },
    {
        title: "Verified",
        icon: <VerifiedIcon />,
        path: '/verified' // Corrected path
    },
    {
        title: "Profile",
        icon: <AccountCircleIcon />,
        path: '/profile'
    },
    {
        title: "More",
        icon: <PendingIcon />,
        path: '/more'
    },
];
