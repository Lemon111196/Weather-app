import Homepage from "../pages/Homepage";
import Tarot from "../pages/Tarot";


const routes = [
    {
        path: '/',
        element: <Homepage/>
    },
    {
        path: '/tarot',
        element: <Tarot/>
    },
    {
        path: '/homepage',
        element: <Homepage/>
    },

];
export default routes