import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer Internship</h4>
                <h5>Cubicus.io</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Developed dynamic, scalable web applications with the MERN stack,
              handling frontend and backend tasks such as responsive UI, RESTful
              API integration, and performance optimization. Collaborated in
              Agile teams to deliver features efficiently.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
