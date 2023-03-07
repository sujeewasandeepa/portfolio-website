import { createBrowserRouter } from "react-router-dom";
import App from './App'

import About from './routes/About'
import Home from './routes/Home'
import Welcome from "./routes/Welcome";

import ErrorPage from "./error-page"

export default createBrowserRouter([
    {
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/",
                element: <Welcome/>
            },
            {
                path: "/projects",
                element: <Home/>
            },
            {
                path: "/about",
                element: <About/>
            },
        ]
    }
])