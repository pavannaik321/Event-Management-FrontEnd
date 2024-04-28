import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./AuthPages/Login";
import HomePage from "./Pages/HomePage";
import Root from "./Pages/Root";
import Signup from "./AuthPages/Signup";
import VenueDetailPage from "./Pages/VenueDetailPage";
// import SignUp from "./AuthPages/SignUp.jsx";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials=true;


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            { path: "/", element: <HomePage /> },
            { path: "/login", element: <Login /> },
            { path: "/signup", element: <Signup /> },
            { path: "/:id/venueDetail", element: <VenueDetailPage /> },
            
            
        ],
    },
]);
function App() {
    return (
        <div className=" h-screen m-0  ">
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
}

export default App;
