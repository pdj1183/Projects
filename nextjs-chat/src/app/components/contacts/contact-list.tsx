import { Contact } from "./contact";
import styles from "./contacts.module.css";
import useGetChatObject from "../../lib/chat-context";

export function ContactList() {

    const { selected, setSelected, contacts } = useGetChatObject()

    const handleClick = (index: any) => {
        setSelected(index);
    };
    return (
        <section className={styles.list}>
            {contacts.map((contact, index) => (
                <div className={styles.contact} onClick={() => handleClick(index)}>
                    <Contact
                        key={index}
                        name={contact}
                        selected={selected === index ? true : false}
                    />
                </div>
            ))}
        </section>
    );
}
