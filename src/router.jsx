import { BrowserRouter, Routes, Route } from "react-router";
import ProfileCard from "./routes/ProfileCard";
import ProfileCards from "./routes/gpt";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/profile-card" element={<ProfileCard/>}/>
                <Route path="/profile-cards" element={<ProfileCards/>}/>
            </Routes>
        </BrowserRouter>
    )
}   

export default App
