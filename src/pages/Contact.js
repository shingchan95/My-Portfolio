import React from 'react';
import '../styles/contact.css';
import github from '../images/github-logo.png'
import linkedin from '../images/Linkedin-Logo-PNG2.png'
import ManchesterBG from '../images/Manchester-background.jpg';

function Contact(){
    return(
        <div className="contact-page" id="contact">
            <img id="MC_background" src={ManchesterBG} alt="MC-background" />
            <h1 className="contact-me">CONTACT</h1>
                <div className="contact-form" >
                    <form action="https://formsubmit.co/60b09ae6882f12448593ffa2c1c6bebe " method="POST">
                        <input type="hidden" name="_subject" value="New submission from my PORTFOLIO!" />
                        <input type="hidden" name="_autoresponse" value="thank you for your message. i will respond as soon as possible" />
                        <input type="hidden" name="_next" value="https://shingchan95.github.io/portfolio_page_react/" />
                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" name="email" className="form-control" placeholder="Email Address" required />
                        </div>
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" name="name" className="form-control" placeholder="Name" required />
                        </div>
                        <div className="form-group contact-message">
                            <label>Message</label>
                            <textarea  type="text" name="message" className="form-control " rows="9" placeholder="Write your message here." required></textarea>
                        </div>
                        <button type="submit">Send</button>
             
                    </form>
                </div>
                <div className="contact-list">
                        <a href="https://github.com/shingchan95" target="_blank" rel="noreferrer"><img src={github} style={{maxWidth: "70px"}} alt='github' /></a>
                        <a href="https://www.linkedin.com/in/shing-hei-chan-b74747120/" target="_blank" rel="noreferrer"><img src={linkedin} style={{maxWidth: "70px"}} alt='linkedin' /></a>
                </div>
        </div>


    )
}

export default Contact