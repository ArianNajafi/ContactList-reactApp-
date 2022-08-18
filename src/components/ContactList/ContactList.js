import { useContext } from "react";
import { contactsContext } from "../../layout/Layout";
import Contact from "../Contact/Contact";
import './ContactList.css'
import '../Contact/Contact.css'

const ContactList = () => {

    const contacts = useContext(contactsContext)

    return (
        <div className="contactList">
            {contacts.length === 0 ? <></> : <hr className="line"></hr>}

            {contacts.map((contact) => {
                return <Contact key={contact.id} contactInfo={contact} />
            })}
        </div>
    );
}

export default ContactList;