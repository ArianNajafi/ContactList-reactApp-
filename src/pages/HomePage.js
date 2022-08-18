import ContactList from "../components/ContactList/ContactList";
import NewContact from "../components/NewContact/NewContact";

const HomePage = () => {
    return (
        <div className="homePage">
            <NewContact />
            <ContactList />
        </div>
    );
}

export default HomePage;