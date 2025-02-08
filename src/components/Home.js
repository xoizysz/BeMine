import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css"

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="container">
            <h1>Hiiii mi love🩷</h1>
            <p>I just want to take a moment to say how incredibly grateful I am to have you in my life. 🥰</p>
            <p>You're my happiness, my safe place, and my favorite person ever. ❤️</p>
            <p>Every day with you is special, and I wouldn't trade it for anything. ✨</p>
            <p>Now, I have a little question for you... :3</p>

            <div className="arrow">
                <button className="buttons" id="next" onClick={() => navigate("/question")}>→</button>
            </div>
        </div>
    );
};

export default Home;
