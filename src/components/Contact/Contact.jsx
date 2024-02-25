import { FaPhone, FaUser } from "react-icons/fa6";
import css from "./Contact.module.css";

function Contact({ contact, onDelete }) {
  return (
    <div className={css.contact}>
      <div className={css.contactInfo}>
        <div className={css.contactItem}>
          <FaUser className={css.contactIcon} />
          <p className={css.contactName}>{contact.name}</p>
        </div>
        <div className={css.contactItem}>
          <FaPhone className={css.contactIcon} />
          <p className={css.contactNumber}>{contact.number}</p>
        </div>
      </div>
      <button
        className={css.contactDelete}
        onClick={() => onDelete(contact.id)}
      >
        Delete
      </button>
    </div>
  );
}

export default Contact;
