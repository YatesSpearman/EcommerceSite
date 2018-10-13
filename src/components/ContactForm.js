import React from 'react';

function ContactForm(){
    return (
        <form method="post" action="#" className="ContactForm">
            <legend>Please Submit Your Contact Information</legend>

            <hr />

            <section>
                <label for="firstName">First Name</label>
                <input type="text" name="firstName" id="firstName" placeholder="First Name" required />
            </section>

            <section>
                <label for="lastName">Last Name</label>
                <input type="text" name="lastName" id="lastName" placeholder="Last Name" required />
            </section>

            <section>
                <label for="email">Email</label>
                <input type="email" name="email" id="email" placeholder="Email" required />
            </section>

            <section>
                <label for="phoneNumber">Phone Number</label>
                <input type="text" name="phoneNumber" id="phoneNumber" placeholder="Phone Number" required />
            </section>

            <section>
                <label for="addressLine1">Address Line 1</label>
                <input type="text" name="addressLine1" id="addressLine1" placeholder="Street Address" required />
            </section>

            <section>
                <label for="addressLine2">Address Line 2</label>
                <input type="text" name="addressLine2" id="addressLine2" placeholder="City, State, Zipcode" required />
            </section>

            <input type="submit" className="formSubmit"/>


        </form>
    );
}

export default ContactForm;