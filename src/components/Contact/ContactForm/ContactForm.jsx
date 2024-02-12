import React from "react";
import Button from "../Button/Button";
import styles from "./ContactForm.module.css";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const ContactForm = () => {
  let name, email, text;
  const onSubmit = (event) => {
    event.preventDefault();
    name = event.target[0].value;
    email = event.target[1].value;
    text = event.target[2].value;
  };

  return (
    <div className="lg:w-11/12">
      <h1 className="text-3xl font-bold mt-5">CONTACT US</h1>
      <section className={`${styles.container} flex flex-wrap gap-6`}>
        <div className={`${styles.contact_image} lg:flex-1`}>
          <img src="/images/contact.svg" alt="contact image" />
        </div>
        <div
          className={`${styles.contact_form} lg:flex-1 justify-center items-center`}
        >
          <div className={styles.top_btn}>
            <Button
              text="VIA SUPPORT CHAT"
              icon={<MdMessage fontSize="24px" />}
            />
            <Button text="VIA CALL" icon={<FaPhoneAlt fontSize="24px" />} />
          </div>
          <Button
            isOutline={true}
            text="VIA EMAIL FORM"
            icon={<HiMail fontSize="24px" />}
          />
          <form onSubmit={onSubmit} className="w-full">
            <div className={styles.form_control}>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" />
            </div>
            <div className={styles.form_control}>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" />
            </div>
            <div className={styles.form_control}>
              <label htmlFor="text">Text</label>
              <textarea name="text" rows="4" />
            </div>
            <div style={{ display: "flex", justifyContent: "end" }}>
              <Button text="SUBMIT BUTTON" />
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;
