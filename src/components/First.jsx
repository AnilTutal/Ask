import React, { useState } from "react";
import "../styles/First.css";
import a from "../image/a.jpg";

function First() {
    const [show, setShow] = useState(false);
    const [index, setIndex] = useState(0);
    const [sizeWidth, setSizeWidth] = useState("20vw");
    const [sizeHeight, setSizeHeight] = useState("15vh");
    const [showListButton, setShowListButton] = useState(true);

    const resim = () => setShow(true);

    const liste = ["Meh", "Nasıl meh?", "Emin misin?", "Bir daha düşün", "Ulaaaaaaaannnnn", "Bana başak çare bırakmadın"];
    const widths = ["30vw", "35vw", "40vw", "50vw", "70vw", "100vw"];
    const heights = ["15vh", "20vh", "25vh", "60vh", "80vh", "100vh"];

    const listeMap = () => {
        setIndex(prevIndex => {
            if (prevIndex + 1 >= liste.length) {
                setShowListButton(false);
                setSizeWidth("100vw");
                setSizeHeight("100vh");
                return prevIndex;
            }
            const newIndex = prevIndex + 1;
            setSizeWidth(widths[newIndex]);
            setSizeHeight(heights[newIndex]);
            return newIndex;
        });
    };

    return (
        <div className="main_div1">
            {show ? (
                <div className="ima_div">
                    <div className="yazi">Yaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
                    <img src={a} alt="resim" style={{ transition: "0.3s ease", width: "80vw", maxWidth: "450px" }} />
                </div>
            ) : (
                <div className="main_div">
                    {showListButton && <div className="yazi2">Ne kadar seviyorsun?</div>}

                    <div className="buttons">
                        <button className="a" onClick={resim} style={{ width: sizeWidth, height: sizeHeight }}>
                            Çok Çok Çok Seviyorum
                        </button>

                        {showListButton && (
                            <button className="a" onClick={listeMap}>
                                {liste[index]}
                            </button>
                        )}
                    </div>

                    {showListButton && ( <> <div class="tenor-gif-embed" data-postid="16876821357037349333" data-width="300px"> <a href="https://tenor.com/view/dare-aggie-dare-aggie-bunny-dare-aggie-bunny-love-dare-aggie-bunny-cuddle-darea-ggie-bunny-cute-gif-16876821357037349333">D</a> </div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script> </> )}
                </div>
            )}
        </div>
    );
}

export default First;
