function Contact() {
  return (
    <>
      <p className="text-dark fs-3 fw-normal" id="contact">Contact Me</p>

      <form className="row g-3">
        <div className="col-md-6">
          <label htmlFor="userName" className="form-label">
            Name
          </label>
          <input type="text" className="form-control" id="userName" required />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">
            Email
          </label>
          <input type="email" className="form-control" id="inputEmail4" required />
        </div>
        <div className="col-12">
          <div className="form-floating">
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea2"
              style={{ height: '100px' }}
              required
            ></textarea>
            <label htmlFor="floatingTextarea2">Message</label>
          </div>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary mb-2">
            Send
          </button>
        </div>
      </form>
    </>
  );
}

export default Contact;
