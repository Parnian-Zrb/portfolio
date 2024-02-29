import { useRef, useEffect } from "react";
import myImage from "../logo/Pic.jpg"

export default function HeroSection() {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    useEffect(() => {
        // ref1.current.classList.add('slide-in');
        // ref2.current.classList.add('slide-in');
        const node1 = ref1.current;
        const node2 = ref2.current;
        node1.classList.add('slide-in');
        node2.classList.add('slide-in');
        return () => {
            // ref1.current.classList.remove('slide-in');
            // ref2.current.classList.remove('slide-in');
            node1.classList.remove('slide-in');
            node2.classList.remove('slide-in');
               }
    }, []);
    return (
        <article className="hero_section">
            <div>
                <h1 ref={ref1} className="hero_header">
                    <span className="hero_span_1">Hi There. I'm Parnian Zarbafian</span>
                    <span>Full Stack Web Developer</span>
                </h1>
                <p className="hero_text" ref={ref2}>
                    As a person who loves science and technology, i'm passionate about building and designing accessible and responsive user interface of a website and also make the web a better place with my skills.
                </p>
            </div>
            <div className="balls_wrapper">
                <div className="elipse_1_wrapper">
                    <div className="elipse_1"></div>
                </div>
                <div className="elipse_2">
                </div>
                <div className="img_wrapper">
                    <div className="profile_img">
                    <img src={myImage}
                            alt="Parnian Zabafian"
                            width="250" height="250"
                        />
                    </div>
                </div>
            </div>
        </article>
    )
}