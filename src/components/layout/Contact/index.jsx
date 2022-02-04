import React from 'react';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <article id="contact" className="contact">
      <h2>
        C<span className="underline">ontact u</span>s
      </h2>
      <p className="subtext">
        By giving you a free audit we prove our potential to truly help your
        company scale and be more profitable by doing what the best in the
        industry are doing.
      </p>
      <form className="contact__form">
        <div className="form-control">
          <label htmlFor="nameInput">Name</label>
          <input type="text" id="nameInput" placeholder="Enter your name" />
        </div>
        <div className="form-control">
          <label htmlFor="emailInput">Email</label>
          <input type="text" id="emailInput" placeholder="Enter your email" />
        </div>
        <div className="form-control">
          <label htmlFor="messageInput">Message</label>
          <textarea
            name=""
            id="messageInput"
            placeholder="Enter your message"
          />
        </div>
        <input type="submit" className="submit" onClick={handleSubmit} />
      </form>
    </article>
  );
}
