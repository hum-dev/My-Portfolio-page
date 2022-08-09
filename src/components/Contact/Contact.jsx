import "./Contact.css" 
import Call from "../../img/SVG/call-svgrepo-com.svg"
import LinkedIn from "../../img/SVG/linkedin-social-media-svgrepo-com.svg"
import Git from "../../img/SVG/sc-github-svgrepo-com.svg"
import Email from "../../img/SVG/social-media-svgrepo-com.svg"
import { useRef } from "react"

const Contact = () => {
    const formRef = useRef
    const handleSubmit =(e) =>{
        e.preventDefault ();
    }
  return (
    <div className='c'>
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
            <h1 className="c-title">let's discuss your project</h1>
            <div className="c-info">
                <div className="c-info-item">
                    <img src={Call} alt="" className="c-icon" />
                    +254-0795772309
                </div>
                <div className="c-info-item">
                    <img src={Email} alt="" className="c-icon" />
                    humphreymuriungi@outlook.com
                </div>
                <div className="c-info-item">
                    <img src={Git} alt="" className="c-icon" />
                    @humkym-code
                </div>
                <div className="c-info-item">
                    <img src={LinkedIn} alt="" className="c-icon" />
                    @humphreymuriungi/
                </div>
            </div>
        </div>
        <div className="c-right">
            <p className="c-desc">
                <b>Have any project in mind ?</b> 
                I am here to fulfill your needs &
                Actualize your ideas. Quick solutions to suit your needs.
            </p>
            <form ref={formRef} onSubmit{handleSubmit}>
                <input type="text" name="user_name" placeholder="Name" />
                <input type="text" name="user_email" placeholder="Email" />
                <input type="text" name="user_subject" placeholder="Subject" />
                <textarea name="message" id="" rows="5" placeholder="Message"></textarea>
                <button>Submit</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
