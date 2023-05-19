import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import HeaderOnly from '~/components/Layout/HeaderOnly';

const publicRoutes = [
    { path: '/', component: Home, title: 'Home' },
    { path: '/following', component: Following, title: 'Following' },
    { path: '/profile', component: Profile, title: 'Profile' },
    { path: '/upload', component: Upload, title: 'Upload', layout: HeaderOnly },
    { path: '/search', component: Search, title: 'Search', layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
