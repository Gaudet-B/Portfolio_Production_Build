import { useState, useEffect } from 'react'
import styles from '../components/form.style.module.css'
import axios from 'axios'


const Form = props => {

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
                alert("Message sent.")
            })
            .catch(err => {
                const {errors} = err.response.data
                let errObj = {}
                for (const [key, value] of Object.entries(errors)) {
                    errObj[key] = value.message
                }
                setValidState(errObj)
            })
    }

    return (
        <div style={(windowWidth > 800) ? { paddingTop: "5em" } : { paddingTop: "2em", paddingBottom: "3em", marginBottom: "1em" }}>
            <form id="contactForm" onSubmit={handleSubmit} className={(windowWidth > 800) ? styles.mainForm : styles.responsiveMain}>
                {/* NAME */}
                <div className={(windowWidth > 800) ? styles.formComponent : styles.responsiveComponent}>
                    <label htmlFor="name" className={(windowWidth > 800) ? styles.label : styles.responsiveLabel}>your name</label>
                    <input name="name" onChange={handleFormChange} className={(windowWidth > 800) ? styles.textInput : styles.responsiveInput} type="text" />
                </div>
                {/* { (validState.name) ? <p className="text-danger"> { validState.name } </p> : null } */}

                {/* EMAIL */}
                <div className={(windowWidth > 800) ? styles.formComponent : styles.responsiveComponent}>
                    <label htmlFor="email" className={(windowWidth > 800) ? styles.label : styles.responsiveLabel}>your email address</label>
                    <input name="email" onChange={handleFormChange} className={(windowWidth > 800) ? styles.textInput : styles.responsiveInput} type="email" />
                </div>
                {/* { (validState.email) ? <p className="text-danger"> { validState.email } </p> : null } */}

                {/* MESSAGE */}
                <div className={(windowWidth > 800) ? styles.formComponent : styles.responsiveComponent}>
                    <label htmlFor="message" className={(windowWidth > 800) ? styles.label : styles.responsiveLabel}>message</label>
                    <textarea name="message" onChange={handleFormChange} className={(windowWidth > 800) ? styles.textInput : styles.responsiveInput} rows="12" />
                </div>
                {/* { (validState.message) ? <p className="text-danger"> { validState.message } </p> : null } */}

                {/* REASON */}
                <div className={(windowWidth > 800) ? styles.formComponent : styles.responsiveComponent}>
                    <label htmlFor="reason" className={(windowWidth > 800) ? styles.label : styles.responsiveLabel}>reason for request</label>
                    <select name="reason" onChange={handleFormChange} className={(windowWidth > 800) ? styles.textInput : styles.responsiveInput}>
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

export default Form
