import React, { useState } from "react";
import "./generadorEmojis.css";

export const GeneradorEmojis = () => {
    const emojis = ["😀", "🤮", "🤖", "😁", "😆", "🤡", "😂", "🤣", "😊", "😇", "🙂", "🙃", "😒", "😌", "😍", "😘", "😗",
    "😙", "😚", "😋", "😛", "😝", "😜", "🤪", "🤨", "🧐", "🤓", "😎", "🤩", "🥳", "😏", "😒", "😞", "😔", "😟"];

    const [randomEmoji, setRandomEmoji] = useState("🔍");

    const generarEmojiAleatorio = () => {
        const randomIndex = Math.floor(Math.random() * emojis.length);
        const selectedEmoji = emojis[randomIndex];
        setRandomEmoji(selectedEmoji);
    };

    return (
        <section>
            <h2>Emoji</h2>
            <div className="Emoji">
                <h4>Haz clic para generar un emoji que muestre tu estado de ánimo!</h4>
                <div className="select-emoji">
                    <button className="boton2" onClick={generarEmojiAleatorio}>Click</button>
                    <h2 className="emoji">{randomEmoji}</h2>
                </div>
            </div>
        </section>
    );
};
