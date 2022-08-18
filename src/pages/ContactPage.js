import { useNavigate, useParams } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io"
import contactImg from '../img/generic-profile-web-blue_13.png';
import { useContext, useEffect, useRef, useState } from "react";
import { contactsContext, contactsActions } from "../layout/Layout";

const ContactPage = () => {
    const [contactForEdit, setContactForEdit] = useState({ name: "", email: "", id: "" });

    const contacts = useContext(contactsContext);
    const actions = useContext(contactsActions);

    const navigate = useNavigate();

    const params = useParams();

    const nameInutRef = useRef();

    useEffect(() => {
        setContactForEdit(contacts.find(item => item.id === Number(params.id)));
        nameInutRef.current.focus();
    }, [])


    const goBack = () => {
        navigate("/")
    }

    const onChangeInfo = (type, value) => {
        if (type === "name")
            setContactForEdit({ ...contactForEdit, name: value })
        else
            setContactForEdit({ ...contactForEdit, email: value })
    }

    const clickEditBtn = () => {
        actions("editContact", contactForEdit);
        setContactForEdit({ name: "", email: "", id: "" });
        goBack();
    }

    return (
        <div className="contactPage">
            <div className="getBack" onClick={() => goBack()}>
                <IoMdArrowRoundBack />
                Get Back
            </div>
            <div className="contactFullShow">
                <img src={contactImg} alt="contact" className="contactImg"></img>
                <div className="contactInfoForEdit">
                    <label className="nameInput_lable_edit">Name</label>
                    <input className="nameInput_edit" type="text" placeholder="Name"
                        value={contactForEdit.name}
                        onChange={(e) => onChangeInfo("name", e.target.value)}
                        ref={nameInutRef}
                    ></input>

                    <label className="emailInput_lable_edit">Email</label>
                    <input className="emailInput_edit" type="text" placeholder="Email"
                        value={contactForEdit.email}
                        onChange={(e) => onChangeInfo("email", e.target.value)}
                    ></input>
                </div>
                <button className="editBtn" onClick={() => clickEditBtn()}>Edit</button>
            </div>
        </div>
    );
}

export default ContactPage;