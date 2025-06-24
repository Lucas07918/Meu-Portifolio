import './ResumeButton.css';

const ResumeButton = () => {
  return (
    <section className="resume-section" id='cv'>
      <div className="container">
        <h2 className="headline headline-2 section-title" id="tag-label">
          <span className="span">CV</span>
        </h2>

        <div className="grid-list">
          <a 
            href="/assets/Curriculo.pdf" 
            download 
            className="tag-btn"
          >
            <span>Download CV</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ResumeButton;
