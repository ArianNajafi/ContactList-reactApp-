import './Contact.css';
import { BsPersonCircle } from "react-icons/bs";
import { MdDeleteOutline } from 'react-icons/md';
import { FaRegEdit } from 'react-icons/fa'
import { useContext } from 'react';
import { contactsActions } from '../../layout/Layout';
import { Navigate, useNavigate } from 'react-router-dom';

const Contact = ({ contactInfo }) => {

    const removeContactFunction = useContext(contactsActions);

    const navigate = useNavigate();

    const removeContactHandler = () => {
        removeContactFunction("deleteContact", contactInfo);
    }

    const gotToContactDetail = (contactId) => {
        navigate(`/contact/${contactId}`);
    }

    return (
        <div className='contactPlusline'>
            <div className="contact">
                <div className="logoAndContactInfo_Div">
                    <BsPersonCircle className='contact_logo' />
                    <div className="contactInfo">
                        <p className='contactName'>{contactInfo.name}</p>
                        <p className='contactEmail'>{contactInfo.email}</p>
                    </div>
                </div>
                <div className='btns'>
                    <FaRegEdit className='editBtn_contacts' onClick={() => gotToContactDetail(contactInfo.id)} />
                    <MdDeleteOutline className=' deleteBtn' onClick={removeContactHandler} />
                </div>
            </div>
            <hr className='line'></hr>
        </div>
    );
}

export default Contact;