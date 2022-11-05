import React, { useState } from "react";
import ErrorMessage from "../Error";
import "./contactForm.css";

const NUMBERS = "0123456789";

const ContactForm = () => {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    checkbox: false,
  });

  const [error, setError] = useState({
    firstName: false,
    lastName: false,
    email: false,
    message: false,
    checkbox: false,
  });

  function handleFormSubmit(e) {
    e.preventDefault();

    if (formState.firstName === "" || formState.firstName.includes(NUMBERS)) {
      setError((prev) => ({ ...prev, firstName: true }));
    }

    if (formState.lastName === "") {
      setError((prev) => ({ ...prev, lastName: true }));
    }

    if (formState.email === "") {
      setError((prev) => ({ ...prev, email: true }));
    }

    if (formState.message === "") {
      setError((prev) => ({ ...prev, message: true }));
    }
    if (!formState.checkbox) setError((prev) => ({ ...prev, checkbox: true }));
  }
  return (
    <div className="contactForm">
      <form onSubmit={handleFormSubmit}>
        {/* <label for="fname">First name</label><br/> */}
        <div className="contact-one">
          <div className="label">
            <label for="first_name">First name</label>
            <input
              type="text"
              value={formState.firstName}
              onChange={(e) =>
                setFormState((prev) => ({ ...prev, firstName: e.target.value }))
              }
              name="first_name"
              id="first_name"
              className={error.firstName ? "error name" : "name"}
              placeholder="Enter your first name"
            />
            {error.firstName ? (
              <ErrorMessage message="Please enter your first name" />
            ) : null}
          </div>
          <div className="label">
            <label for="last_name">Last name</label>
            <input
              type="text"
              value={formState.lastName}
              onChange={(e) =>
                setFormState((prev) => ({ ...prev, lastName: e.target.value }))
              }
              name="Last_name"
              id="last_name"
              className={error.lastName ? "error name" : "name"}
              placeholder="Enter your last name"
            />
            {error.lastName ? (
              <ErrorMessage message="Please enter your last name" />
            ) : null}
          </div>
        </div>
        <div className="contact-two">
          <div className="label">
            <label for="email">Email</label>
            <input
              type="email"
              value={formState.email}
              onChange={(e) =>
                setFormState((prev) => ({ ...prev, email: e.target.value }))
              }
              name="user_email"
              className={error.email ? "error email" : "email"}
              id="email"
              placeholder="yourname@email.com"
            />
            {error.email ? (
              <ErrorMessage message="Please enter your email" />
            ) : null}
          </div>
          <div className="label">
            <label for="message">Message</label>
            <textarea
              type="text"
              value={formState.message}
              onChange={(e) =>
                setFormState((prev) => ({ ...prev, message: e.target.value }))
              }
              name="message"
              className={error.message ? "error name" : "name"}
              id="message"
              placeholder="Send me a message and I will reply you as soon as possible"
            />
            {error.message ? (
              <ErrorMessage message="Please enter a message" />
            ) : null}
          </div>

          <div className="checkbox">
            
            <input
              type="checkbox"
              className={error.checkbox ? "check__input error" : "check__input"}
              id="checkbox"
              name="check"
              value=""
              onChange={(e) =>
                setFormState((prev) => ({ ...prev, checkbox: !prev.checkbox }))
              }
            />

            <label for="checkbox">
              You agree to providing your data to Temitope who may contact you.
            </label>
            {error.message ? (
              <ErrorMessage message="" />
            ) : null}
          </div>
          {/* <div className="checkbox">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                You agree to providing your data to Temitope who may contact
                you.
              </label>
            </div> */}
          {/* </div> */}

          <input
            type="submit"
            value="Send message"
            className="button"
            id="btn__submit"
          />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
