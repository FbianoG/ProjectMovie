import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../page/home";
import Movie from "../page/movie";

export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/movie" element={<Movie />}></Route>
            </Routes>
        </Router>
    )
}