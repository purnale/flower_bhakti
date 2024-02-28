import video from "../../assets/video (2160p).mp4";
const About = () => {
  return (
    <section className="about" id="about">
      <h1 className="heading">
        <span> about </span> us
      </h1>

      <div className="row">
        <div className="video-container">
          <video src={video} loop autoPlay muted></video>
          <h3>best flower sellers</h3>
        </div>

        <div className="content">
          <h3>why choose us?</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
            numquam ullam enim, earum molestias adipisci necessitatibus corporis
            aliquam est officiis alias? Facilis, numquam molestiae! Est at quod
            unde harum
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            voluptates sed dolore exercitationem doloremque laudantium, facere
            atque error suscipit voluptatum minus, illum quos est consequuntur
            accusantium, libero necessitatibus ad fuga.
          </p>
          <a href="#" className="btn">
            learn more
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
