import Home from '../components/Home';

export const roadMap = [
    { path: "/home", name: "Home", component: Home },
    { redirect: true, path:"/", to:"/home", name: "Home"}
];
