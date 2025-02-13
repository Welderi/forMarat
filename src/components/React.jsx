import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "tailwindcss/tailwind.css";
import st from './React.module.css';

export default function ValentinePage() {
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
        <div className={st.main}>
            {hearts.map((heart) => (
                <motion.div
                    key={heart.id}
                    className={st.heart1}
                    style={{
                        left: `${heart.left}%`,
                        fontSize: `${heart.size}px`,
                    }}
                    initial={{ y: "-30%", opacity: 1, rotate: 0 }}
                    animate={{
                        y: "1500%",
                        opacity: 0,
                        rotate: 300,
                        x: Math.random() * 20 - 10, // Добавление легкого смещения по оси X
                    }}
                    transition={{
                        duration: 10,
                        ease: "linear",
                    }}
                >
                    ❤️
                </motion.div>
            ))}

            <div className={st.valentinesDayCard}>
                <input id="open" type="checkbox"/>
                <label className={st.open} htmlFor="open"></label>
                <div className={st.cardFront}>
                    <div className={st.note}>Click to Open</div>
                </div>

                <div className={st.cardInside}>
                    <div className={st.textOne}>Happy</div>
                    <div className={st.heart}></div>
                    <div className={st.smile}></div>
                    <div className={st.eyes}></div>
                </div>
            </div>
        </div>
    );
}
