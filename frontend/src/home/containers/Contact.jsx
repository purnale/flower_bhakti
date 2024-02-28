import contactImg from '../../assets/contactImg.jpg';
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
            <img src={contactImg} alt="contactImg" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
