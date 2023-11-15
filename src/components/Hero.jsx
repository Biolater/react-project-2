import "./Hero.css";
import Forms from "./Forms";

const Hero = () => {
    return (
        <main className="hero-section">
            <header className="hero__header">
                <h1 className="hero__title">
                    CONTACT US
                </h1>
                <p className="hero__explanation">
                    LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA.
                </p>
            </header>
            <Forms />
        </main>
    )
};

export default Hero;