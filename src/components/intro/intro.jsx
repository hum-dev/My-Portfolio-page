import"./intro.css"
import portrait from "../../img/portrait.png"
import Scroll from "../../img/SVG/scroll-svgrepo-com.svg"

const intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hi, My name is</h2>
                    <h1 className="i-name">Humphrey Muriungi</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">Power Platform Developer</div>
                            <div className="i-title-item">Program Manager</div>
                            <div className="i-title-item">Community Advocate</div>
                            <div className="i-title-item">Photographer</div>
                        </div>
                    </div>
                    <p className="i-desc">
                        I am a Proficient <span>Web Developer</span>, Possessing knowledge
                        on Business driving tools such as <span> Power Platforms </span>,
                        which help in accelerating business by building solutions,analyzing data 
                        and automating processes. I also got experience in <span> program management</span>
                    </p>
                </div>
                <img src={Scroll} alt="" className="i-scroll" />
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
            <img src={portrait} alt="" className="i-img" />
            </div>
        </div>
    )
}
export default intro