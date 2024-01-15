import MainLayout from "../Layouts/MainLayout";
import Homepage from "../pages/Homepage";
import Tarot from "../pages/Tarot";
import Todo from "../pages/Todo";


const routes = [
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/tarot',
                element: <Tarot />
            },
            {
                path: '/homepage',
                element: <Homepage />
            },
            {
                path: '/Todo',
                element: <Todo/>
            }
        ]
    },



];
export default routes