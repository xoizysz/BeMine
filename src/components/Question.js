import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Question.css";

const Question = () => {
    const navigate = useNavigate();

    return (
        <div className="container">
            <div className="gif_container">
                <img 
                    src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGV2bW1qdnlxNTFtdDl4NTB3aDB0dWkzdXloNHoxeHAwNXlmY2JybyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/kfRKF0iqA8jyDqq1nH/giphy.gif" 
                    alt="Cute animated illustration" 
                    className="img-fluid" 
                />
            </div>
            <h1 className="header_text">🩷</h1>
            <h2>
                if(you == my_valentine): <br />
                &emsp; my_happiness = 100% <br />
                else: <br />
                &emsp; retry:/()
            </h2>

            <div className="buttons">
                <button className="btn" id="yesButton" onClick={() => navigate("/lastPage")}>Yes!</button>
                <button className="btn" id="noButton" onMouseOver={moveButton}>No :/</button>
            </div>
        </div>
    );
};

const moveButton = () => {
    const button = document.getElementById('noButton');
    if (button) {
        const x = Math.random() * (window.innerWidth - button.offsetWidth) - 85;
        const y = Math.random() * (window.innerHeight - button.offsetHeight) - 48;
        button.style.left = `${x}px`;
        button.style.top = `${y}px`;
    }
};

export default Question;
