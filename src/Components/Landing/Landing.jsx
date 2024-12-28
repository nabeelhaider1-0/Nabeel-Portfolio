/* eslint-disable react/no-unescaped-entities */
// Navbar.js
import { useEffect, useState } from "react";
import logo from "../../assets/favicon.ico";
import Cv from "../../assets/NabeelHaiderResume.pdf";
import NabeelPic from "../../assets/profile.jpg";
import duckload from "../../assets/duckload.gif";
import "./Landing.css"; // Import CSS file for styling
import { Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

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
  const [expanded3, setExpanded3] = useState(false);

  const toggleDescription3 = () => {
    setExpanded3(!expanded3);
  };
  const [expanded4, setExpanded4] = useState(false);
  const toggleDescription4 = () => {
    setExpanded4(!expanded4);
  };
  const [expanded5, setExpanded5] = useState(false);
  const toggleDescription5 = () => {
    setExpanded5(!expanded5);
  };
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
                    href="#workexperience"
                    className={
                      activeSection === "workexperience" ? "active" : ""
                    }
                    onClick={closeMenu}
                  >
                    Work Experience
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
              <div className="icon">
                <span className="tooltip">Facebook</span>
                <a
                  href="https://www.facebook.com/nabeelhaider1.o?mibextid=ZbWKwL"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="ri-facebook-fill"></i>
                </a>
              </div>
              <div className="icon">
                <span className="tooltip">Instagram</span>
                <a
                  href="https://www.instagram.com/nabeelhaider1.0?igsh=MW04c2tvNDQ2ZnhvNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="ri-instagram-line"></i>
                </a>
              </div>
              <div className="icon">
                <span className="tooltip">YouTube</span>
                <a
                  href="https://youtube.com/@nabeelhaider1.0?si=8-BNeMve5i0bMDik"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="ri-youtube-fill"></i>
                </a>
              </div>
              <div className="icon">
                <span className="tooltip">Twitter</span>
                <a
                  href="https://x.com/nabeelhaider1_0?s=09"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="ri-twitter-x-fill"></i>
                </a>
              </div>
              <div className="icon">
                <span className="tooltip">LinkedIn</span>
                <a
                  href="https://www.linkedin.com/in/nabeel-haider-76416818b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="ri-linkedin-box-fill"></i>
                </a>
              </div>
            </div>

            <a href={Cv} download="NabeelHaiderResume.pdf">
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
              <div className="icon">
                <span className="tooltip">Facebook</span>
                <a
                  href="https://www.facebook.com/nabeelhaider1.o?mibextid=ZbWKwL"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="ri-facebook-fill"></i>
                </a>
              </div>
              <div className="icon">
                <span className="tooltip">Instagram</span>
                <a
                  href="https://www.instagram.com/nabeelhaider1.0?igsh=MW04c2tvNDQ2ZnhvNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="ri-instagram-line"></i>
                </a>
              </div>
              <div className="icon">
                <span className="tooltip">YouTube</span>
                <a
                  href="https://youtube.com/@nabeelhaider1.0?si=8-BNeMve5i0bMDik"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="ri-youtube-fill"></i>
                </a>
              </div>
              <div className="icon">
                <span className="tooltip">Twitter</span>
                <a
                  href="https://x.com/nabeelhaider1_0?s=09"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="ri-twitter-x-fill"></i>
                </a>
              </div>
              <div className="icon">
                <span className="tooltip">LinkedIn</span>
                <a
                  href="https://www.linkedin.com/in/nabeel-haider-76416818b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="ri-linkedin-box-fill"></i>
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* EXPERIENCE-PAGE */}
        <section className="workExperience" id="workexperience">
          <h3 className="title">
            <i className="ri-building-line"></i>
            Work Experience
          </h3>
          <div className="work-container">
            <div className="office">
              <h5>
                Currently Working As a Front End Devloper at Infoetec from
                16/05/2023 - Present
              </h5>

              <Link to="https://www.infoetec.com/" target="blank">
                <img src="companyblacklogo.png" alt="companyblacklogo" />
              </Link>
            </div>
          </div>
          <div className="projects">
            <h3 className="title">
              <i className="ri-file-code-line"></i>
              Completed Projects
            </h3>
            <div className="projectContent">
              <h5>
                Created Website For My Company SIte and is deployed at this URL
                <Link to="https://www.infoetec.com/" target="blank">
                  https://www.infoetec.com/
                </Link>
              </h5>
              <Link to="https://www.infoetec.com/" target="blank">
                <img src="companyblacklogo.png" alt="companyblacklogo" />
              </Link>
            </div>
            <div className="projectContent">
              <h5>
                Created Website For An Entrepreneur Website was Related to Tech
                in Agriculture deployed on below URL
                <Link to="https://www.bagh-e.com/" target="blank">
                  https://www.bagh-e.com/
                </Link>
              </h5>
              <Link to="https://www.bagh-e.com/" target="blank">
                <img src="baghe.png" alt="companyblacklogo" />
              </Link>
            </div>
            <div className="projectContent">
              <h5>
                Created INFO E TEC ONLINE Admin Panel Site It Includes
                Hotel,Flights,Sightseens,Tours and Transfers Booking that are
                handled by Infoetecs's employees. URL for this is not site
                permitted as its an Admin Panel.
              </h5>
              <Link to="https://d2k3g3qc14533e.cloudfront.net/" target="blank">
                <img src="infopurple.png" alt="infopurple" />
              </Link>
            </div>
            <div className="projectContent">
              <h5>
                Created Escapra Webiste that Includes
                Hotel,Flights,Umrah,Sightseens,Tours and Transfers for Business
                to Customers For the Infoetec Company Deployed on below URL
                <Link to="https://www.escapra.com/" target="blank">
                  https://www.escapra.com/
                </Link>
              </h5>
              <Link to="https://www.escapra.com/" target="blank">
                <img src="escapra.png" alt="escapraBlackLogo" />
              </Link>
            </div>
            <div className="projectContent">
              <h5>
                Created an AI Email Writer Website For the Infoetec Company
                Deployed on below URL{" "}
                <Link to="https://www.aimailwriters.com/" target="blank">
                  https://www.aimailwriters.com/
                </Link>
              </h5>
              <Link to="https://www.aimailwriters.com/" target="blank">
                <img
                  src="AIContentWriter.png"
                  alt="companyblacklogo"
                  className="AIWriterImage"
                />
              </Link>
            </div>
            <div className="projectContent">
              <h5>
                Created an AI Writer Website For the Infoetec Company Deployed
                on below URL{" "}
                <Link to="https://www.autoaiwriter.com/" target="blank">
                  https://www.autoaiwriter.com/
                </Link>
              </h5>
              <Link to="https://www.autoaiwriter.com/" target="blank">
                <img
                  src="AiLogo.png"
                  alt="companyblacklogo"
                  className="AIWriterImage"
                />
              </Link>
            </div>
            <div className="projectContent">
              <h5>
                Created Sound Wave Cleaner Website For the Infoetec Company
                Deployed on below URL{" "}
                <Link to="https://www.clearsoundcoach.com/" target="blank">
                  https://www.clearsoundcoach.com/
                </Link>
              </h5>
              <Link to="https://www.clearsoundcoach.com/" target="blank">
                <img
                  src="speakerCleaner.png"
                  alt="speakerCleaner"
                  className="AIWriterImage"
                />
              </Link>
            </div>
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
            <div className={`skill-content ${expanded3 ? "expanded" : ""}`}>
              <i className="ri-git-merge-line">+</i>
              <i className="ri-github-fill"></i>
              <h5>GIT + GITHUB</h5>
              <p className="short-description">
                I have a strong proficiency in using Git commands and a deep
                understanding of Git Flow and GitHub. Git Commands: I am skilled
                in utilizing various Git commands for efficient version control,
                including commit, branch ...
              </p>
              <p className="full-description">
                I have a strong proficiency in using Git commands and a deep
                understanding of Git Flow and GitHub. Git Commands: I am skilled
                in utilizing various Git commands for efficient version control,
                including commit, branch, merge, rebase, and reset. My expertise
                allows me to manage and navigate repositories with ease,
                ensuring seamless development workflows. Git Flow: I understand
                and implement the Git Flow branching strategy to enhance project
                organization. This includes using feature branches for
                development, release branches for final preparations, and hotfix
                branches for critical bug fixes, ensuring a structured and
                reliable workflow. GitHub: I leverage GitHub for hosting
                repositories, collaborating with team members, and managing
                project tasks. My experience includes creating and managing pull
                requests, conducting code reviews, and using GitHub Issues and
                Projects for effective project management. Additionally, I
                integrate with CI/CD pipelines to automate testing and
                deployment processes. By combining these skills, I ensure robust
                version control, efficient project management, and effective
                team collaboration.
              </p>
              <button className="btn read-more" onClick={toggleDescription3}>
                {expanded3 ? "Read Less" : "Read More"}
              </button>
            </div>
            <div className={`skill-content ${expanded4 ? "expanded" : ""}`}>
              <i className="ri-bootstrap-fill">+</i>
              <i className="ri-tailwind-css-fill"></i>
              <h5>BOOTSRAP + TAILWIND</h5>
              <p className="short-description">
                I am proficient in using Bootstrap and Tailwind CSS to create
                responsive and visually appealing web interfaces. Bootstrap:
                Utilizing Bootstrap to rapidly develop responsive websites with
                a consistent design. Proficient...
              </p>
              <p className="full-description">
                I am proficient in using Bootstrap and Tailwind CSS to create
                responsive and visually appealing web interfaces. Bootstrap:
                Utilizing Bootstrap to rapidly develop responsive websites with
                a consistent design. Proficient in using its grid system,
                pre-designed components, and utility classes to create modern
                and mobile-first web applications. Experience includes
                customizing Bootstrap to match specific design requirements and
                integrating it seamlessly into various projects. Tailwind CSS:
                Expertise in using Tailwind CSS for utility-first styling,
                allowing for highly customizable and responsive designs.
                Proficient in applying utility classes directly in HTML to style
                components, enabling fast development and ensuring design
                consistency. Capable of extending Tailwind with custom
                configurations and integrating it with various front-end
                frameworks. By combining these skills, I ensure robust version
                control, efficient project management, and the creation of
                responsive, visually appealing web applications.
              </p>
              <button className="btn read-more" onClick={toggleDescription4}>
                {expanded4 ? "Read Less" : "Read More"}
              </button>
            </div>
            <div className={`skill-content ${expanded5 ? "expanded" : ""}`}>
              <i className="ri-nodejs-fill">+</i>
              <i className="ri-database-2-fill"></i>
              <h5>NODE.JS + MONOGO DB</h5>
              <p className="short-description">
                I have extensive experience in developing server-side
                applications with Node.js and managing databases with MongoDB.
                Node.js: Proficient in building scalable and efficient
                server-side applications using Node.js....
              </p>
              <p className="full-description">
                I have extensive experience in developing server-side
                applications with Node.js and managing databases with MongoDB.
                Node.js: Proficient in building scalable and efficient
                server-side applications using Node.js. Experience includes
                working with asynchronous programming, creating RESTful APIs,
                and leveraging frameworks like Express.js to streamline
                development. Capable of integrating Node.js applications with
                various services and APIs to build robust backend systems.
                MongoDB: Skilled in using MongoDB for data storage and
                management in web applications. Experience includes designing
                and implementing database schemas, performing CRUD operations,
                and using MongoDB's aggregation framework to process data.
                Proficient in integrating MongoDB with Node.js applications
                using libraries like Mongoose for efficient database
                interactions. By combining these skills, I ensure robust version
                control, efficient project management, responsive and visually
                appealing web applications, and scalable, efficient server-side
                solutions with effective database management.
              </p>
              <button className="btn read-more" onClick={toggleDescription5}>
                {expanded5 ? "Read Less" : "Read More"}
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
