// import React, { Component } from "react";

// let validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
// let validPasswordRegex = RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,64}$/);

// export default class SignUp extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//           firstName: '',
//           lastName: '',
//           password: '',
//           passwordConfirm: '',
//           formValid: false,
//           errors: {
//             firstName: '',
//             lastName: '',
//             email: '',
//             password: '',
//             passwordConfirm: ''
//           }
//         };
//       }


//     handleChange = (event) => {
//         event.preventDefault();
//         const { name, value } = event.target;
//         let errors = this.state.errors;
      
//         switch (name) {
//           case 'firstName': 
//           this.setState({firstName: value});
//           errors.firstName = value.length > 0
//               ? ''
//               : 'First Name is required';
//           break;
//           case 'lastName': 
//           this.setState({lastName: value});
//           errors.lastName = value.length > 0
//               ? ''
//               : 'Last Name is required';
//           break;
//           case 'email': 
//             errors.email = 
//               validEmailRegex.test(value)
//                 ? ''
//                 : 'Email is not valid!';
//             break;
//           case 'password': 
//             this.setState({password: value});
//             errors.password = 
//               validPasswordRegex.test(value)
//                 ? ''
//                 : 'Password must contain 8-64 characters at least 1 Uppercase, 1 Lowercase and 1 Number';
//                 errors.passwordConfirm = 
//                 value !== this.state.passwordConfirm
//                   ? 'Passwords does not match'
//                   : '';
//             break;
//             case 'passwordConfirm': 
//             this.setState({passwordConfirm: value});
//             errors.passwordConfirm = 
//               value !== this.state.password
//                 ? 'Passwords does not match'
//                 : '';
//             break;
//           default:
//             break;
//         }
      
//         this.setState({errors, [name]: value});
//     }

//     handleSubmit = (event) => {
//         event.preventDefault();
//         let errorsCount = 0;
//         Object.values(this.state.errors).forEach(
//             (error) => {
//                 if (error.length > 0) {
//                     errorsCount++;
//                 }
//             });
//         return(window.open("https://bit.ly/3f1wfcu"))
//       }
   
//     render() {
//         const {errors, formValid} = this.state;
//         return (
//             <form onSubmit={this.handleSubmit} noValidate>
//                 <h3>Sign Up</h3>

//                 <div className="form-group">
//                     <label>First name</label>
//                     <input type="text"
//                     name="firstName"
//                     className="form-control" 
//                     placeholder="First name"
//                     onChange={this.handleChange} noValidate />
//                     {errors.firstName.length > 0 && 
//                         <div className='error text-danger text-center'>{errors.firstName}</div>}
//                 </div>

//                 <div className="form-group">
//                     <label>Last name</label>
//                     <input type="text"
//                     name="lastName"
//                     className="form-control" 
//                     placeholder="Last name"
//                     onChange={this.handleChange} noValidate />
//                     {errors.lastName.length > 0 && 
//                         <div className='error text-danger text-center'>{errors.lastName}</div>}
//                 </div>

//                 <div className="form-group">
//                     <label htmlFor="email">Email</label>
//                     <input type='email' name='email' className="form-control"
//                          placeholder="Enter email" 
//                          onChange={this.handleChange} noValidate />
//                     {errors.email.length > 0 && 
//                         <div className='error text-danger text-center'>{errors.email}</div>}
//                 </div>

//                 <div className='form-group'>
//                     <label htmlFor="password">Password</label>
//                     <input type='password' name='password' className="form-control"
//                            placeholder="Enter password"
//                            onChange={this.handleChange} noValidate />
//                     {errors.password.length > 0 && 
//                         <span className='error text-danger text-center'>{errors.password}</span>}
//                 </div>
                
//                 <div className="form-group">
//                     <label>Confirm Password</label>
//                     <input type="password"
//                         name="passwordConfirm"
//                         placeholder="Enter password"
//                         className="form-control"  
//                         placeholder="Confirm password"
//                         onChange={this.handleChange} noValidate  />
//                         {errors.passwordConfirm.length > 0 && 
//                     <span className='error text-danger text-center'>{errors.passwordConfirm}</span>}
//                 </div>
                
//                 <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
//             </form>
//         );
//     }
// }
