import emailjs from 'emailjs-com';
import React, { Component } from 'react'
import classnames from "classnames";

//npm install emailjs-com --save



class Contact extends Component { 

  
    
    render() { 

          
  function SendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_mr6kj4v', 'template_4gh7wcg', e.target, 'user_h9YgLppr5SQKAnUfEtxzV')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);    
      });
      e.target.reset()
  }

        return( 

            <div className="login">
            <div className="container">
              <div className="row">
                <div className="col-md-8 m-auto">
                  <h1 className="display-4 text-center">Contact Us</h1>
                  <form onSubmit={SendEmail}>
                  <div className="form-group">
                      <input
                        type="text"
                        className={classnames("form-control form-control-lg", {
                        })}
                        placeholder="Name"
                        name="name"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className={classnames("form-control form-control-lg", {
                        })}
                        placeholder="Email Address"
                        name="email"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className={classnames("form-control form-control-lg", {
                        })}
                        placeholder="Subject"
                        name="subject"
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        type="text"
                        className={classnames("form-control form-control-lg", {
                        })}
                        placeholder="Message"
                        name="message"
                      />
                    </div>
                    <input type="submit" className="btn btn-info btn-block mt-4" value='send Message' />
                  </form>
                </div>
              </div>
            </div>
          </div>
        );
      }
    }

export default Contact; 