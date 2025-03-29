import { useEffect, useLayoutEffect, useState } from "react";
import { loadMessages, sendMessage } from "./api";
import styles from'./UseLayoutEffectHuk.module.css'

function UseLayoutEffectHuk() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  // при монтуванні завантажити вже існуючі повідомлення
  useEffect(() => {
    loadMessages().then((data) => setMessages(data));
  }, []);

  // прокрутити сторінку, щоб знизу в'юпорта було поле введення
  // для нового повідомлення, як в мессенджерах.
  // useLayoutEffect робить це ДО перемалювання сторінки браузером,
  // тому прокрутка одразу буде здійснена в потрібну поцицію
  useLayoutEffect(() => {
    window.scrollTo({ top: document.body.scrollHeight });
  }, [messages.length]);

  // відправити запит на створення нового повідомлення
  // + додати новостворене повідомлення в масив повідомлень
  const submitHandler = (e) => {
    e.preventDefault();
    if (!newMessage) {
      return;
    }
    setNewMessage("");
    sendMessage({ body: newMessage, userId: "1" }).then((data) => {
      const messagesCopy = [...messages];
      messagesCopy.push(data);
      setMessages(messagesCopy);
    });
  };

  const handleMessageChange = ({ target: { value } }) => {
    setNewMessage(value);
  };

  return (
    <section className={styles.messagesPageContainer}>
      <ul className={styles.messagesContainer}>
        {messages.map((m) => (
          <li key={m.id}>{m.body}</li>
        ))}
      </ul>
      <form className={styles.formContainer} onSubmit={submitHandler}>
        <input
          className={styles.messageInput}
          value={newMessage}
          onChange={handleMessageChange}
        />
      </form>
    </section>
  );
}

export default UseLayoutEffectHuk
