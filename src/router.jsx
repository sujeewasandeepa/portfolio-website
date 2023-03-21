import { createBrowserRouter } from "react-router-dom";
import App from './App'

import About from './routes/About'
import Home from './routes/Home'
import Welcome from "./routes/Welcome";
import Blog from "./routes/Blog";

import Attendy from "./routes/projects/Attendy";
import MySite from "./routes/projects/MySite";
import RustWeb from "./routes/projects/RustWeb";

import VPNProtocols from "./routes/blogs/VPNProtocols";

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
                children: [
                    {
                        path: "/projects",
                        element: <Home/>,
                    },
                    {
                        path: "/projects/attendy",
                        element: <Attendy/>,
                    },
                    {
                        path: "/projects/portfolio-site",
                        element: <MySite/>,
                    },
                    {
                        path: "/projects/rust-web",
                        element: <RustWeb/>,
                    }

                ]
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/blog",
                children: [
                    {
                        path: "/blog",
                        element: <Blog/>,
                    },
                    {
                        path: "/blog/vpn-protocols",
                        element: <VPNProtocols/>,
                    }
                ]
            },
        ]
    }
])