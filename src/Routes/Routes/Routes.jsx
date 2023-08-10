import { createBrowserRouter } from "react-router-dom";
import Charts from "../../Pages/Charts/Charts";
import Questions from "../../Components/Questions/Questions";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Questions />
    },
    {
        path: '/chart',
        element: <Charts />
    }
])