import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "tailwindcss/tailwind.css";
import './App.css';

function App() {
    const [hearts, setHearts] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            setHearts((prevHearts) => [
                ...prevHearts,
                {
                    id: Math.random(),
                    left: Math.random() * 100,
                    size: Math.random() * 40 + 10,
                },
            ]);

            setTimeout(() => {
                setHearts((prevHearts) => prevHearts.slice(1));
            }, 10000);
        }, 300);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="main">
            {hearts.map((heart) => (
                <motion.div
                    key={heart.id}
                    className="heart1"
                    style={{
                        left: `${heart.left}%`,
                        fontSize: `${heart.size}px`,
                    }}
                    initial={{ y: "-30%", opacity: 1, rotate: 0 }}
                    animate={{
                        y: "1500%",
                        opacity: 0,
                        rotate: 300,
                        x: Math.random() * 20 - 10,
                    }}
                    transition={{
                        duration: Math.random() * 5 + 5,
                        ease: "easeInOut",
                    }}
                >
                    ❤️
                </motion.div>
            ))}

            <div className="valentines-day-card">
                <input id="open" type="checkbox" />
                <label className="open" htmlFor="open"></label>
                <div className="card-front">
                    <div className="note">Моему Котику</div>
                </div>

                <div className="card-inside">
                    <div className="text-one">Happy</div>
                    <div className="heart"></div>
                    <div className="smile"></div>
                    <div className="eyes"></div>
                </div>
            </div>
        </div>
    );
}

export default App;
