import { useState } from 'react'

import demoImg from './assets/pmt-img.PNG'

import styles from './square.style.module.css'


const PaymentForm = props => {

    const { paymentForm, handleNext } = props

    const [cardBrand, setCardBrand] = useState("")
    const [nonce, setNonce] = useState(undefined)
    const [googlePay, setGooglePay] = useState(false)
    const [applePay, setApplePay] = useState(false)
    const [masterpass, setMasterpass] = useState(false)

    const requestCardNonce = () => {
        // paymentForm.requestCardNonce()
        handleNext()
    }

    // const style = {
    //     name: {
    //         verticalAlign: "top",
    //         display: "none",
    //         margin: 0,
    //         border: "none",
    //         fontSize: "16px",
    //         fontFamily: "Helvetica Neue",
    //         padding: "16px",
    //         color: "#373F4A",
    //         backgroundColor: "transparent",
    //         lineHeight: "1.15em",
    //         placeholderColor: "#000",
    //         _webkitFontSmoothing: "antialiased",
    //         _mozOsxFontSmoothing: "grayscale"
    //     },
    //     leftCenter: {
    //         float: "left",
    //         textAlign: "center"
    //     },
    //     blockRight: {
    //         display: "block",
    //         float: "right"
    //     },
    //     center: {
    //         textAlign: "center"
    //     }
    // };

    // const config = {
    //     applicationId: "sq0idp-rARHLPiahkGtp6mMz2OeCA",
    //     locationId: "GMT96A77XABR1",
    //     inputClass: "inputCls",
    //     autoBuild: false,
    //     inputstyle: [
    //         {
    //             fontSize: "16px",
    //             fontFamily: "Helvetica Neue",
    //             padding: "16px",
    //             color: "#373F4A",
    //             backgroundColor: "transparent",
    //             lineHeight: "1.15em",
    //             placeholderColor: "#000",
    //             _webkitFontSmoothing: "antialiased",
    //             _mozOsxFontSmoothing: "grayscale"
    //         }
    //     ],
    //     applePay: {
    //         elementId: "sq-apple-pay"
    //     },
    //     masterpass: {
    //         elementId: "sq-masterpass"
    //     },
    //     googlePay: {
    //         elementId: "sq-google-pay"
    //     },
    //     cardNumber: {
    //         elementId: "sq-card-number",
    //         placeholder: "• • • •  • • • •  • • • •  • • • •"
    //     },
    //     cvv: {
    //         elementId: "sq-cvv",
    //         placeholder: "CVV"
    //     },
    //     expirationDate: {
    //         elementId: "sq-expiration-date",
    //         placeholder: "MM/YY"
    //     },
    //     postalCode: {
    //         elementId: "sq-postal-code",
    //         placeholder: "Zip"
    //     },
    //     callbacks: {
    //         methodsSupported: methods => {
    //             if (methods.googlePay) {
    //                 setGooglePay(methods.googlePay);
    //             }
    //             if (methods.applePay) {
    //                 setApplePay(methods.applePay);
    //             }
    //             if (methods.masterpass) {
    //                 setMasterpass(methods.masterpass);
    //             }
    //             return;
    //         },
    //         createPaymentRequest: () => {
    //             return {
    //                 requestShippingAddress: false,
    //                 requestBillingInfo: true,
    //                 currencyCode: "USD",
    //                 countryCode: "US",
    //                 total: {
    //                     label: "MERCHANT NAME",
    //                     amount: "100",
    //                     pending: false
    //                 },
    //                 lineItems: [
    //                     {
    //                         label: "Subtotal",
    //                         amount: "100",
    //                         pending: false
    //                     }
    //                 ]
    //             };
    //         },
    //         cardNonceResponseReceived: (errors, nonce, cardData) => {
    //             if (errors) {
    //                 console.log("Encountered errors:");
    //                 errors.forEach(function (error) {
    //                     console.log("  " + error.message);
    //                 });
    //                 return;
    //             }
    //             setNonce(nonce);
    //         },
    //         unsupportedBrowserDetected: () => { },
    //         inputEventReceived: inputEvent => {
    //             switch (inputEvent.eventType) {
    //                 case "focusClassAdded":
    //                     break;
    //                 case "focusClassRemoved":
    //                     break;
    //                 case "errorClassAdded":
    //                     document.getElementById("error").innerHTML =
    //                         "Please fix card information errors before continuing.";
    //                     break;
    //                 case "errorClassRemoved":
    //                     document.getElementById("error").style.display = "none";
    //                     break;
    //                 case "cardBrandChanged":
    //                     if (inputEvent.cardBrand !== "unknown") {
    //                         setCardBrand(inputEvent.cardBrand);
    //                     } else {
    //                         setCardBrand("");
    //                     }
    //                     break;
    //                 case "postalCodeChanged":
    //                     break;
    //                 default:
    //                     break;
    //             }
    //         },
    //         paymentFormLoaded: function () {
    //             let name = document.getElementById("name")
    //             if (name) {
    //                 name.style.display = "inline-flex";
    //             }
                    
    //         }
    //     }
    // };

    // config for Sqaure Payments, based on above
    // const pmtForm = new paymentForm(config);
    // this function uses API to build the Square Payment Form - it is disabled for this demo
    // pmtForm.build();

    const applePayStyles = `${styles.walletButton} ${styles.sqApplePay}`
    const googePayStyles = `${styles.walletButton} ${styles.sqGooglePay}`
    const masterpassStyles = `${styles.walletButton} ${styles.sqMasterpass}`
    
    return (
        // <div className="container">
        <div className="container">
            {/* <img src={demoImg}/> */}

            {/* Square Payments: */}
            <div id="form-container" className={styles.formContainer}  style={{ backgroundImage: `url(${demoImg})`, backgroundSize: "cover", width: "460px", height: "387px" }}>
                <div className="d-flex flex-column justify-content-evenly text-center text-danger fs-4" style={{ height: "inherit", width: "inherit", backgroundColor: "rgba(178, 178, 178, .6)" }}>
                    <p style={{ backgroundColor: "#f8f9faca", padding: "1rem 0" }}>Square API diabled for demo version</p>
                </div>
                {/* <div id="sq-walletbox" className={styles.sqWalletbox}>
                    <button
                        style={{ display: applePay ? "inherit" : "none" }}
                        className={applePayStyles}
                        id="sq-apple-pay"
                        disabled={"disabled"}
                    />
                    <button
                        style={{ display: masterpass ? "block" : "none" }}
                        className={masterpassStyles}
                        id="sq-masterpass"
                        disabled={"disabled"}
                    />
                    <button
                        style={{ display: googlePay ? "inherit" : "none" }}
                        className={googePayStyles}
                        id="sq-google-pay"
                        disabled={"disabled"}
                    />
                    <hr />
                </div> */}

                {/* <div id="sq-ccbox" className={styles.sqCcbox}>
                    <p>
                        <span style={style.leftCenter}>Enter Card Info Below </span>
                        <span style={style.blockRight}>
                            {cardBrand.toUpperCase()}
                        </span>
                    </p>
                    <div id="cc-field-wrapper" className={styles.ccFieldWrapper}>
                        <div id="sq-card-number" className={styles.sqCardNumber}/>
                        <input type="hidden" id="card-nonce" name="nonce" disabled />
                        <div id="sq-expiration-date" className={styles.sqExpirationDate} />
                        <div id="sq-cvv" className={styles.sqCvv}/>
                    </div>
                    <input
                        id="name"
                        style={style.name}
                        type="text"
                        placeholder="Name"
                        disabled
                    />
                    <div id="sq-postal-code" className={styles.sqPostalCode}/>
                </div> */}
                
            </div>
            <button className={styles.buttonCreditCard} onClick={requestCardNonce}>Continue to Shipping</button>
            {/* <p style={style.center} id="error" /> */}
        </div>
    )
}

export default PaymentForm
