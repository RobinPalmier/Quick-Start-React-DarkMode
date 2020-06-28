import Home from '../components/Home';

export const roadMap = [
    { path: "/", name: "home", component: Home },
    { redirect: true, path:"/", to:"/", name: "home"}
];
