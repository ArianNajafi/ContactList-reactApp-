import React, { Children, useState } from "react";
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
            setContact(newContacts)
        }

        else if (actionName === "editContact") {
            const index = contacts.findIndex(item => item.id === contact.id);
            const selectedContact = { ...contacts[index] };
            selectedContact.name = contact.name;
            selectedContact.email = contact.email;
            const updatedContacts = [...contacts];
            updatedContacts[index] = selectedContact;
            setContact(updatedContacts);
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