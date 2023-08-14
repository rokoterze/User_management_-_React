import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import StorageIcon from '@mui/icons-material/Storage';


export const SidebarData = [
    {
        title: "Home",
        icon: <HomeIcon />,
        link: "/home"
    },

    {
        title: "API Users",
        icon: <SearchIcon />,
        link: "/api-users"
    },

    {
        title: "Database Users",
        icon: <StorageIcon />,
        link: "/database-users"
    }
]