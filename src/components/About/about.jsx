import "./about.css"
import Me from "../../img/me.jpg"
import Badge from "../../img/Badge.jpg"

const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src={Me} alt="" className="a-img" />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                     Corrupti ab architecto suscipit.
                </p>
                <p className="a-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus,
                     alias. Voluptas, nisi eos. 
                    Consequatur quaerat ipsam cupiditate provident 
                    voluptatum laboriosam iste nam sit? Provident?
                </p>
                <div className="a-award">
                    <img src={Badge} alt="" className="a-award-img" />
                    <div className="a-award-text">
                        <h4 className="a-award-title">Game of Learners Winner</h4>
                        <p className="a-award-desc">Lorem, ipsum dolor sit amet consectetur 
                        adipisicing elit. Temporibus, nulla? Error, velit! Velit, doloribus accusamus?</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About 