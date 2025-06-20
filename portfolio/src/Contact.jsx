function Contact() {
    return (
        <div className="contact-wrapper">
             <hr />
            <h2 className="section-title">Contact Me</h2>

            <p className="contact-description">
                Feel free to reach out for collaborations, project discussions, or just to say hello!
            </p>

            <form className="contact-form">
                <input type="text" placeholder="Your Name" className="contact-input" required />
                <input type="email" placeholder="Your Email" className="contact-input" required />
                <textarea placeholder="Your Message" className="contact-textarea" required></textarea>
                <button type="submit" className="contact-btn">Send Message</button>
            </form>

            <div className="contact-details">
                <p>Email: <a href="mailto:gumanondumiso@gmail.com">gumanondumiso@gmail.com</a></p>
                <p>Phone: +27 63 184 3887</p>
                <p>Location: Durban, South Africa</p>
            </div>
        </div>
    );
}

export default Contact;
