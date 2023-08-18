import { Routes, Route } from "react-router-dom";

export default function MainContainer(){
    return(
        <div className="main-section">
            <Routes>
                <Route path="/home" element={<div className="home"><h1>Home</h1></div>} />
                <Route path="/blue" element={<div className="blue"><h1>Blue</h1></div>} />
                <Route path="/red" element={<div className="red"><h1>Red</h1></div>} />
                <Route path="/yellow" element={<div className="yellow"><h1>Yellow</h1></div>} />
                <Route path="/green" element={<div className="green"><h1>Green</h1></div>} />
            </Routes>
        </div>
    );
}
