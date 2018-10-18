import React, {Component}  from 'react';
import request from 'superagent';

class ContactForm extends Component {

    formSubmitHandler= (event) => {
        let firstName = document.getElementById('firstName').value; 
        let lastName = document.getElementById('lastName').value;
        let email = document.getElementById('email').value;
        let phoneNumber = document.getElementById('phoneNumber').value;
        let addressLine1 = document.getElementById('addressLine1').value;
        let addressLine2 = document.getElementById('addressLine2').value;



        request 
            .post("http://localhost:3000/contacts")
            .send({
                firstName, lastName, email, phoneNumber,
                addressLine1, addressLine2
            })
            .then((res) => {
                console.log('Values Inserted!!!!');
            });

    }
    render(){

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

            <button type="button" onClick={this.formSubmitHandler}>Sumbit This, Yo</button>


        </form>
    );
}

}

export default ContactForm;