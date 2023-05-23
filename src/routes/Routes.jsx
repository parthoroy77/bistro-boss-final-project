import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Main from "../Layout/Main";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <div>error</div>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                
            }
        ]
    }
])

export default router