import AuthLayout from "../Layouts/AuthLayout";
import MainLayout from "../Layouts/MainLayout";
import Homepage from "../pages/Homepage";
import Tarot from "../pages/Tarot";
import Todo from "../pages/Todo";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

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
    {
        path: '/auth',
        element: <Login/>,
    },


];
export default routes