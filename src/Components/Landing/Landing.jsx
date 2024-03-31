/* eslint-disable react/no-unescaped-entities */
// Navbar.js
import { useEffect, useState } from "react";
import logo from "../../assets/favicon.ico";
import Cv from "../../assets/Nabeel React Certificate.pdf";
import NabeelPic from "../../assets/profile.jpg";
import duckload from "../../assets/duckload.gif";
import "./Landing.css"; // Import CSS file for styling
import { Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Landing = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let activeSec = null;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= 0 && rect.bottom > 0) {
          activeSec = section.id;
        }
      });

      setActiveSection(activeSec);
      // Check if the navbar should become sticky
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const closeMenu = () => {
    setShowMenu(false);
  };
  const [expanded, setExpanded] = useState(false);

  const toggleDescription = () => {
    setExpanded(!expanded);
  };
  const [expanded1, setExpanded1] = useState(false);

  const toggleDescription1 = () => {
    setExpanded1(!expanded1);
  };
  const [expanded2, setExpanded2] = useState(false);

  const toggleDescription2 = () => {
    setExpanded2(!expanded2);
  };
  // useEffect(() => {
  //   if (!expanded || !expanded1 || !expanded2) {
  //     window.scrollTo({
  //       top: document.getElementById("skills").offsetTop,
  //       behavior: "smooth",
  //     });
  //   }
  // }, [expanded, expanded1, expanded2]);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    fullName: false,
    email: false,
    mobileNumber: false,
    subject: false,
    message: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    let processedValue = value;

    // Validation for mobile number field
    if (name === "mobileNumber") {
      // Remove non-numeric characters
      processedValue = value.replace(/\D/g, "");
    }
    setFormData((prevData) => ({
      ...prevData,
      [name]: processedValue,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: false, // Reset error for the field when it's being edited
    }));
  };
  const [isLoading, setIsLoading] = useState(false); // New state for loading status
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Check for empty fields
    const emptyFields = Object.keys(formData).filter((key) => !formData[key]);
    if (emptyFields.length > 0) {
      // Highlight empty fields
      const updatedErrors = { ...errors };
      emptyFields.forEach((field) => {
        updatedErrors[field] = true;
      });
      setErrors(updatedErrors);
      return; // Don't proceed with submission
    }
    // Set loading state to true
    setIsLoading(true);
    // Simulate form submission delay (remove this in actual implementation)
    await new Promise((resolve) => setTimeout(resolve, 2000));
    // Proceed with form submission
    // Reset form fields
    setFormData({
      fullName: "",
      email: "",
      mobileNumber: "",
      subject: "",
      message: "",
    });
    // Reset errors
    setErrors({
      fullName: false,
      email: false,
      mobileNumber: false,
      subject: false,
      message: false,
    });
    // Set loading state back to false
    setIsLoading(false);
    // Show success toast

    toast.success("Message submitted successfully!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
      className: "toast-custom", // Custom CSS class for styling
    });
  };
  return (
    <>
      <main>
        <nav className={`navbar ${isSticky ? "sticky" : ""}`}>
          <div className="navbar-container">
            <div className="navbar-logo">
              <a href="#">
                <img src={logo} alt="logo" />
              </a>
            </div>
            <div className={`navbar-links ${showMenu ? "active" : ""}`}>
              <ul className="navbarlinks">
                <li className="navlink">
                  <a
                    href="#home"
                    className={activeSection === "home" ? "active" : ""}
                    onClick={closeMenu}
                  >
                    Home
                  </a>
                </li>
                <li className="navlink">
                  <a
                    href="#about"
                    className={activeSection === "about" ? "active" : ""}
                    onClick={closeMenu}
                  >
                    About
                  </a>
                </li>
                <li className="navlink">
                  <a
                    href="#skills"
                    className={activeSection === "skills" ? "active" : ""}
                    onClick={closeMenu}
                  >
                    Skills
                  </a>
                </li>
                <li className="navlink">
                  <a
                    href="#education"
                    className={activeSection === "education" ? "active" : ""}
                    onClick={closeMenu}
                  >
                    Education
                  </a>
                </li>
                <li className="navlink">
                  <a
                    href="#contact"
                    className={activeSection === "contact" ? "active" : ""}
                    onClick={closeMenu}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="menu-icon" onClick={toggleMenu}>
              <i className={showMenu ? "ri-close-fill" : "ri-menu-3-line"}></i>
            </div>
          </div>
        </nav>
        <section id="home" className="home">
          <div className="text-content">
            <h2>Nabeel Haider</h2>
            <h5>WEBSITE DEVELOPER</h5>
            <p>
              Passionate about creating engaging and user-friendly websites, I
              strive to bring innovative ideas to life through code. With a keen
              eye for design and a dedication to crafting seamless digital
              experiences, I am committed to delivering high-quality solutions
              that exceed expectations. Let's collaborate and turn your vision
              into reality.
            </p>
            <div className="social-media">
              <a
                href="https://www.facebook.com/nabeelhaider1.o?mibextid=ZbWKwL"
                target="_blank"
              >
                <i className="ri-facebook-fill"></i>
              </a>
              <a
                href="https://www.instagram.com/nabeelhaider1.0?igsh=MW04c2tvNDQ2ZnhvNw=="
                target="_blank"
              >
                <i className="ri-instagram-line"></i>
              </a>
              <a
                href="https://youtube.com/@nabeelhaider1.0?si=8-BNeMve5i0bMDik"
                target="_blank"
              >
                <i className="ri-youtube-fill"></i>
              </a>
              <a href="https://x.com/nabeelhaider1_0?s=09" target="_blank">
                <i className="ri-twitter-x-fill"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/nabeel-haider-76416818b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
              >
                <i className="ri-linkedin-box-fill"></i>
              </a>
            </div>

            <a href={Cv} download="Nabeel React Certificate.pdf">
              <button className="btn">Download CV</button>
            </a>
          </div>
          <div className="image-cover">
            <div className="image" />
            <div className="background" />
          </div>
        </section>

        <section className="about" id="about">
          <div className="about-img-cover">
            <div className="image-content">
              <h2>Nabeel Haider</h2>
              <h5>WEBSITE DEVELOPER</h5>
              <img src={NabeelPic} alt="NabeelPic" />
            </div>
          </div>
          <div className="about-text-content">
            <h3 className="title">
              <i className="ri-user-line"></i>
              ABOUT ME
            </h3>
            <p>
              Hello! I'm Nabeel Haider, a website developer with a strong
              passion for turning ideas into reality through code. With several
              years of experience in web development, I specialize in creating
              modern, responsive, and user-friendly websites that leave a
              lasting impression. My journey in the world of web development
              began with a curiosity to explore the endless possibilities of the
              digital landscape. Over time, I've honed my skills in various
              programming languages and frameworks, always staying updated with
              the latest trends and technologies. My goal is to not just meet
              but exceed client expectations by delivering exceptional solutions
              tailored to their needs. Outside of coding, you can find me
              exploring new technologies, engaging in creative endeavors, or
              enjoying the great outdoors. Let's connect and embark on an
              exciting journey together!
            </p>
            <div className="social-media">
              <a
                href="https://www.facebook.com/nabeelhaider1.o?mibextid=ZbWKwL"
                target="_blank"
              >
                <i className="ri-facebook-fill"></i>
              </a>
              <a
                href="https://www.instagram.com/nabeelhaider1.0?igsh=MW04c2tvNDQ2ZnhvNw=="
                target="_blank"
              >
                <i className="ri-instagram-line"></i>
              </a>
              <a
                href="https://youtube.com/@nabeelhaider1.0?si=8-BNeMve5i0bMDik"
                target="_blank"
              >
                <i className="ri-youtube-fill"></i>
              </a>
              <a href="https://x.com/nabeelhaider1_0?s=09" target="_blank">
                <i className="ri-twitter-x-fill"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/nabeel-haider-76416818b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
              >
                <i className="ri-linkedin-box-fill"></i>
              </a>
            </div>
            {/* <button class="btn">Read More</button> */}
          </div>
        </section>
        {/* SKILL-PAGE */}
        <section className="skills" id="skills">
          <h3 className="title">
            <i className="ri-code-s-slash-line"></i>
            SKILLS
          </h3>
          <div className="skill-container">
            <div className={`skill-content ${expanded ? "expanded" : ""}`}>
              <i className="ri-html5-fill">+</i>
              <i className="ri-css3-fill"></i>
              <h5>HTML + CSS</h5>
              <p className="short-description">
                HTML and CSS are the foundational building blocks of web
                development, and I specialize in crafting elegant and responsive
                user interfaces using these technologies. With HTML I structure
                the content of websites , ensuring...
              </p>
              <p className="full-description">
                HTML and CSS are the foundational building blocks of web
                development, and I specialize in crafting elegant and responsive
                user interfaces using these technologies. With HTML, I structure
                the content of websites, ensuring proper hierarchy and semantics
                for optimal accessibility and SEO. CSS, on the other hand,
                allows me to add style and flair to web pages, creating visually
                appealing layouts and designs. Whether it's designing layouts
                from scratch or fine-tuning existing styles, I leverage the
                power of HTML and CSS to bring visions to life on the web. Let's
                collaborate to create stunning and functional websites that
                captivate audiences and leave a lasting impression.
              </p>
              <button className="btn read-more" onClick={toggleDescription}>
                {expanded ? "Read Less" : "Read More"}
              </button>
            </div>
            <div className={`skill-content ${expanded1 ? "expanded" : ""}`}>
              <i className="ri-javascript-fill"></i>
              <h5>JAVASCRIPT</h5>
              <p className="short-description">
                JavaScript is the dynamic and interactive powerhouse behind
                modern web development, and it's where my passion truly ignites.
                With JavaScript, I breathe life into static web pages, adding
                functionality...
              </p>
              <p className="full-description">
                JavaScript is the dynamic and interactive powerhouse behind
                modern web development, and it's where my passion truly ignites.
                With JavaScript, I breathe life into static web pages, adding
                functionality, interactivity, and responsiveness that engages
                users and enhances their experience. From creating interactive
                forms and validating user input to implementing smooth
                animations and dynamic content updates, JavaScript empowers me
                to push the boundaries of web development. Leveraging the latest
                features and best practices, I harness the full potential of
                JavaScript to build robust and innovative solutions tailored to
                your needs. Let's collaborate and harness the power of
                JavaScript to elevate your web presence to new heights.
              </p>
              <button className="btn read-more" onClick={toggleDescription1}>
                {expanded1 ? "Read Less" : "Read More"}
              </button>
            </div>
            <div className={`skill-content ${expanded2 ? "expanded" : ""}`}>
              <i className="ri-reactjs-fill"></i>
              <h5>REACT.JS</h5>
              <p className="short-description">
                React.js is my go-to framework for building dynamic and
                interactive user interfaces with ease,seamlessly integrating
                with various APIs to fetch and display data in real-time. With
                React.js, I embrace the power of component...
              </p>
              <p className="full-description">
                React.js is my go-to framework for building dynamic and
                interactive user interfaces with ease,seamlessly integrating
                with various APIs to fetch and display data in real-time. With
                React.js, I embrace the power of component-based architecture to
                create modular and reusable UI elements that seamlessly come
                together to form immersive web experiences. Whether it's
                crafting single-page applications, implementing complex UI
                features, or integrating with backend services through RESTful
                or GraphQL APIs, React.js empowers me to build scalable and
                efficient solutions that meet the demands of modern web
                development. Leveraging the virtual DOM and state management
                capabilities of React.js, I ensure optimal performance and
                maintainability across projects, allowing for rapid iteration
                and seamless updates. Let's collaborate and harness the full
                potential of React.js to bring your ideas to life, integrate
                with external services, and delight users with engaging and
                intuitive web applications.
              </p>
              <button className="btn read-more" onClick={toggleDescription2}>
                {expanded2 ? "Read Less" : "Read More"}
              </button>
            </div>
          </div>
        </section>
        {/* EDUCATION */}
        <section className="education" id="education">
          <h3 className="title">
            <i className="ri-graduation-cap-fill"></i>
            EDUCATION
          </h3>
          <div className="row">
            <div className="column">
              <div className="education-content">
                <div className="year">
                  <i className="bx bx-time" />
                  2017-2022
                </div>
                <h2>University of Engineering And Technology Taxila (UET)</h2>
                <p>BSc Computer Engineering</p>
                <p>HEC Board</p>
                <p>3.00/4.00 CGPA</p>
              </div>
              <div className="education-content">
                <div className="year">
                  <i className="bx bx-time" />
                  2015-2017
                </div>
                <h2>Cambridge International Science College Talagang</h2>
                <p>ICS</p>
                <p>RWP Board</p>
                <p>887/1100 Marks</p>
              </div>
            </div>
            <div className="column">
              <div className="education-content">
                <div className="year">
                  <i className="bx bx-time" />
                  2013-2015
                </div>
                <h2>Cambridge International Higher SecondaryTalagang</h2>
                <p>Matric (Computer Science)</p>
                <p>RWP Board</p>
                <p>858/1100 Marks</p>
              </div>
              <div className="education-content">
                <div className="year">
                  <i className="bx bx-time" />
                  2002-2012
                </div>
                <h2>Holy Child Public School Talagang</h2>
                <p>From PG - 8th Class</p>
                <p>RWP Board</p>
                <p>Overall Pass</p>
              </div>
            </div>
          </div>
        </section>
        {/* CONTACT PAGE */}
        <section className="contact" id="contact">
          <h3 className="title">
            <i className="ri-contacts-book-3-line"></i>
            CONTACT ME
          </h3>
          {isLoading ? (
            <img src={duckload} className="loader" alt="Loading..." /> // Display loading GIF if loading
          ) : (
            <form onSubmit={handleSubmit}>
              <div className={`input-box ${errors.fullName ? "error" : ""}`}>
                <input
                  type="text"
                  placeholder={
                    errors.fullName ? "Full Name (required)" : "Full Name"
                  }
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  placeholder={errors.email ? "Email (required)" : "Email"}
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="input-box">
                <input
                  type="tel"
                  placeholder={
                    errors.mobileNumber
                      ? "Mobile Number (required)"
                      : "Mobile Number"
                  }
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  placeholder={
                    errors.subject ? "Subject For (required)" : "Subject For"
                  }
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              <textarea
                name="message"
                cols={30}
                rows={10}
                placeholder={errors.message ? "Message (required)" : "Message"}
                value={formData.message}
                onChange={handleChange}
              />
              <input type="submit" value="Send Message" className="btn" />
            </form>
          )}
        </section>
        <footer>
          <div className="text-footer">
            <p>Copyright @ 2024 by Nabeel Haider</p>
          </div>
          <a href="#">
            <i className="ri-corner-right-up-line"></i>
          </a>
        </footer>
      </main>
    </>
  );
};

export default Landing;
