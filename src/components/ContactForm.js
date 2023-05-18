import React, {useState} from 'react'
import styles from '../styles/ContactForm.module.scss'
import Button from './Button';

const ContactForm = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

  
    const handleSubmit = async (event) => {
      event.preventDefault()
      try {
        const response = await fetch("/api/sendgrid", {
          body: JSON.stringify({
            email: email,
            name: name,
            subject: subject,
            message: message,
          }),
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
        })

        if (!response.ok) {
          throw new Error('Failed to send email')
        }
        alert('Email sent successfully!')
      } catch (error) {
        console.error(error)
        console.log(({
          email: email,
          name: name,
          subject: subject,
          message: message,
        }))
        alert('Failed to send email')
      }
    };

  return (
    <div className={styles.ContactForm}>
      <p className={styles.ContactForm__title + " ani-surge_l_r"}>SEND ME AN E-MAIL</p>
      <form onSubmit={handleSubmit} className={styles.ContactForm__form}>
        {/* <label htmlFor="name">Name:</label> */}
        <input
          className={styles.ContactForm__input + " ani-surge_l_r"}
          lining="single"
          placeholder='NAME'
          id="name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
        {/* <label htmlFor="email">Email:</label> */}
        <input
          className={styles.ContactForm__input + " ani-surge_l_r"}
          lining="single"
          placeholder='E-MAIL'
          id="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <input
          className={styles.ContactForm__input + " ani-surge_l_r"}
          lining="single"
          placeholder='SUBJECT'
          id="subject"
          type="subject"
          value={subject}
          onChange={(event) => setSubject(event.target.value)}
          required
        />
        {/* <label htmlFor="message">Message:</label> */}
        <textarea
          className={styles.ContactForm__textarea + " ani-surge_l_r"}
          lining="multi"
          placeholder='TALK YOUR GUTS OUT!'
          rows='6'
          id="message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          required
        />
        {/* <button type="submit" lining="single" className={styles.ContactForm__input}>SEND IT</button> */}
        <Button type="submit" icon="send">SEND IT</Button>
      </form>
    </div>
  )
}

export default ContactForm
