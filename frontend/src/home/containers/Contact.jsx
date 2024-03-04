// import contactImg from '../../assets/contactImg.jpg';
const Contact = () => {
  return (
    <>
      <section className="contact" id="contact">
        <h1 className="heading">
          <span> contact </span> us
        </h1>

        <div className="row">
          <form action="">
            <input type="text" placeholder="Enter Name" className="box" />
            <input type="email" placeholder="Enter Email" className="box" />
            <input type="number" placeholder="Enter Number" className="box" />
            <textarea
              name=""
              className="box"
              placeholder="message"
              id=""
              cols="30"
              rows="10"
            ></textarea>
            <input type="submit" value="send message" className="btn" />
          </form>

          <div className="image">
            {/* <img src={contactImg} alt="contactImg" /> */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.4354467780263!2d75.3176805740654!3d19.86382662677051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb9860cbffffff%3A0xa66e2b579fb7570!2sDeogiri%20Institute%20of%20Engineering%20and%20Management%20Studies!5e0!3m2!1sen!2sin!4v1709435181733!5m2!1sen!2sin" width="600" height="450"  allowfullscreen="" loading="lazy" ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
