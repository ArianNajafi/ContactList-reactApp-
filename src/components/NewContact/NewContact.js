import { useContext, useState } from "react";
import './NewContact.css'


import { contactsContext, contactsContextSpatcher } from "../../layout/Layout";

const NewContact = () => {
    const [newContactInfo, setNewContactInfo] = useState({ name: "", email: "" });

    const contacts = useContext(contactsContext);
    const setContact = useContext(contactsContextSpatcher);


    const clickBtnHandler = (e) => {
        e.preventDefault();
        if (newContactInfo.name === '') {
            alert("name is empity")
        }
        else if (newContactInfo.email === '')
            alert("email is empity");
        else {
            setContact([...contacts, { ...newContactInfo, id: Math.floor(Math.random() * 100) + 1 }]);
            setNewContactInfo({ name: "", email: "" });
        }
    }

    return (
        <form className="newContact">
            <p className="addContact_title">Add Contact</p>

            <label className="nameInput_lable">Name</label>
            <input className="nameInput" type="text" value={newContactInfo.name} placeholder="Name"
                onChange={(res) => setNewContactInfo({ ...newContactInfo, name: res.target.value })}></input>

            <label className="emailInput_lable">Email</label>
            <input className="emailInput" type="text" value={newContactInfo.email} placeholder="Email"
                onChange={(res) => setNewContactInfo({ ...newContactInfo, email: res.target.value })}></input>
            <button className="addNewContact_btn" onClick={clickBtnHandler}>Add</button>
        </form >
    );
}

export default NewContact;