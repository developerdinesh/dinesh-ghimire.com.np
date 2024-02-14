import './Hero.css'; 

const Hero = () => {
  return (
    <section className="hero-banner">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="hero-content">
              <h1>Dinesh Ghimire</h1>
              <p className="profession">Software Developer</p>
              <p>Specializing in Web/Mobile Development</p>
              <div className="skills">
                <p>Skills:</p>
                <ul>
                  <li>PHP</li>
                  <li>JavaScript</li>
                  <li>Dart</li>
                  <li>HTML</li>
                  <li>CSS</li>
                </ul>
              </div>
              <div className="expertise">
                <p>Expertise:</p>
                <ul>
                  <li>Laravel</li>
                  <li>Node Js</li>
                  <li>WordPress</li>
                  <li>Flutter</li>
                  <li>Shopify</li>
                  <li>React</li>
                </ul>
              </div>
              <p>Passionate about crafting elegant solutions</p>
              <button>Contact Me</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
