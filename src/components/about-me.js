import { useState, useRef, useEffect } from "react"

const AboutMe = () => {
    const ref = useRef(null);
    const [isIntersecting, setIsIntersecting] = useState(false);
    const [hasTransitioned, setHasTransitioned] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsIntersecting(entry.isIntersecting);
        },
            { threshold: 0.3 }
        );
        observer.observe(ref.current);
        return () => observer.disconnect();
    }, [isIntersecting]);
    useEffect(() => {
        if (isIntersecting && !hasTransitioned) {
            ref.current.classList.add('slide_in_about-me');
            setHasTransitioned(true);
        }
    }, [isIntersecting, hasTransitioned]);
    return (
        <section className="about_me_section" id="about-me" ref={ref}>
            <h2>About Me</h2>
            <div>
                <p> Hey there! I'm Parnian Zarbafian, a passionate Full Stack developer. Welcome to my portfolio!</p>
                <p>I love blending art and technology in web development. </p>
                <p> With skills in React, CSS, HTML, and JavaScript, I bring design concepts to life, creating visually appealing and user-friendly websites.</p>
                <p> Check out my portfolio for a glimpse into the seamless fusion of creativity and coding expertise! </p>
            </div>
        </section>
    )
}

export default AboutMe