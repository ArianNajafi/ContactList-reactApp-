import React, { Children, useState } from "react";
import Swal from "sweetalert2";
import Header from "../components/Header/Header";
import "./Layout.css"

export const contactsContext = React.createContext()
export const contactsContextSpatcher = React.createContext();
export const contactsActions = React.createContext();

const Layout = ({ children }) => {
    const [contacts, setContact] = useState([]);

    const actions = (actionName, contact) => {
        if (actionName === "deleteContact") {
            const newContacts = contacts.filter((item) => {
                return item.id !== contact.id;
            })
            setContact(newContacts);
            Swal.fire({
                text: "Contact deleted ✅",
                position: "top",
                width: 190,
                showConfirmButton: false,
                customClass: "swal",
                timer: 1500,
                backdrop: false,
                background: "rgb(250, 250, 250)",
            })
        }

        else if (actionName === "editContact") {
            const index = contacts.findIndex(item => item.id === contact.id);
            const selectedContact = { ...contacts[index] };
            selectedContact.name = contact.name;
            selectedContact.email = contact.email;
            const updatedContacts = [...contacts];
            updatedContacts[index] = selectedContact;
            setContact(updatedContacts);

            Swal.fire({
                text: "Contact edited ✅",
                position: "top",
                width: 190,
                showConfirmButton: false,
                customClass: "swal",
                timer: 1700,
                backdrop: false,
                background: "rgb(250, 250, 250)",
            })
        }
    }


    return (
        <div className="container">
            <Header />
            <contactsContext.Provider value={contacts}>
                <contactsContextSpatcher.Provider value={setContact}>
                    <contactsActions.Provider value={actions}>
                        {children}
                    </contactsActions.Provider>
                </contactsContextSpatcher.Provider>
            </contactsContext.Provider>

        </div>
    );
}

export default Layout;