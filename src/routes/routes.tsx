import Homepage from "../pages/Homepage";
import Weather from "../pages/Weather";

const routes = [
    {
        path: '/',
        elements: <Homepage/>
    },
    {
        path: '/weather',
        elements: <Weather/>
    }
];
export default routes