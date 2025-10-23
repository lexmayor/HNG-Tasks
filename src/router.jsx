import { BrowserRouter, Routes, Route } from "react-router";
import ProfileCard from "./routes/ProfileCard";


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/profile-card" element={<ProfileCard/>}/>
                 
            </Routes>
        </BrowserRouter>
    )
}   

export default App
