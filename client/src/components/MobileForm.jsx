import { useState } from 'react'
import styles from '../components/mobile.form.style.module.css'
import axios from 'axios'

const MobileForm = props => {
    // windowWidth passed down from parent
    const { windowWidth } = props

    // initialize empty form
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: "",
        reason: 'Just saying "hello."'
    })
    // input validation
    const [validState, setValidState] = useState({})

    // handler for form inputs
    const handleFormChange = e => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

    // submit handler 
    const handleSubmit = e => {
        e.preventDefault()

        axios.post("http://localhost:8000/api/contact", formState)
            .then(res => {
                setFormState({
                    name: "",
                    email: "",
                    message: "",
                    reason: 'Just saying "hello."'
                })
                document.getElementById("contactForm").reset()
                alert("message sent.")
            })
            .catch(err => {
                const { errors } = err.response.data
                let errObj = {}
                for (const [key, value] of Object.entries(errors)) {
                    errObj[key] = value.message
                }
                setValidState(errObj)
                alert("unable to send message.")
            })
    }

    return (
        <div >
            <div className={styles.contactTitle}>
                <p>Contact Brian</p>
            </div>
            <form id="contactForm" onSubmit={handleSubmit} className={styles.contactMain}>
                {/* NAME */}
                <div className={styles.formComponent}>
                    <label htmlFor="name" className={styles.label}>your name:</label>
                    <input name="name" onChange={handleFormChange} className={styles.textInput} type="text" />
                </div>
                {/* { (validState.name) ? <p className="text-danger"> { validState.name } </p> : null } */}

                {/* EMAIL */}
                <div className={styles.formComponent}>
                    <label htmlFor="email" className={styles.label}>your email:</label>
                    <input name="email" onChange={handleFormChange} className={styles.textInput} type="email" />
                </div>
                {/* { (validState.email) ? <p className="text-danger"> { validState.email } </p> : null } */}

                {/* MESSAGE */}
                <div className={styles.formComponent}>
                    <label htmlFor="message" className={styles.label}>message:</label>
                    <textarea name="message" onChange={handleFormChange} className={styles.textInput} rows="12" />
                </div>
                {/* { (validState.message) ? <p className="text-danger"> { validState.message } </p> : null } */}

                {/* REASON */}
                <div className={styles.formComponent}>
                    <label htmlFor="reason" className={styles.label}>reason for request:</label>
                    <select name="reason" onChange={handleFormChange} className={styles.textInput}>
                        <option className={styles.option} value='Just saying "hello."'>Just saying "hello."</option>
                        <option className={styles.option} value="Business inquiry.">Business inquiry.</option>
                        <option className={styles.option} value="Employment opportunity.">Employment opportunity.</option>
                        <option className={styles.option} value="Looking to network.">Looking to network.</option>
                        <option className={styles.option} value="Technical question.">Technical question.</option>
                    </select>
                </div>
                <div className={styles.buttonContainer}>
                    <button id="button" className={styles.formButton} type="submit">send</button>
                </div>
            </form>
        </div>
    )
}

export default MobileForm
