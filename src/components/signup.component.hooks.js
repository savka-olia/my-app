import React, { useState } from 'react';
import { useForm } from 'react-hook-form';



function onSubmit(formData) {
  const audio = new Audio(); audio.src = 'https://drive.google.com/uc?export=download&id=1_4h7jTNvaw2mfpAB9BLevaMfmoj7Nx-J';
            audio.loop = true; audio.volume = 0.25; audio.load(); audio.play();
  return (window.open("https://bit.ly/2DjJB7k"));


}

const SignUp = () => {
  const { register, handleSubmit, errors, watch } = useForm();
  return (
    <form onSubmit={handleSubmit(onSubmit)} >
      <h3>Sign Up</h3>

      <div className="form-group"> 
        <label>First name</label>
        <input type="text"
          name="firstName"
          className="form-control"
          placeholder="First name"
          ref={register({
            required: {
              value: true,
              message: "First Name is required",
            }
          })} />
        {errors.firstName &&
          <div className='error text-danger text-center'>
            {errors.firstName.message}
          </div>
        }
      </div>

      <div className="form-group">
        <label>Last name</label>
        <input type="text"
          name="lastName"
          className="form-control"
          placeholder="Last name"
          ref={register({
            required: {
              value: true,
              message: "Last Name is required",
            }
          })}
        />
        {errors.lastName &&
          <div className='error text-danger text-center'>
            {errors.lastName.message}
          </div>}
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type='email'
          name='email'
          className="form-control"
          placeholder="Enter email"
          ref={register({
            required: {
              value: true,
              message: "Email is required"
            },
            pattern: {
              value: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/,
              message: "Email is incorrect"
            }

          })
          }
        />
        {errors.email &&
          <div className='error text-danger text-center'>
            {errors.email.message}
          </div>}

      </div>

      <div className='form-group'>
        <label htmlFor="password">Password</label>
        <input type='password' name='password' className="form-control"
          placeholder="Enter password"
          ref={register({
            required: {
              value: true,
              message: "Password is required"
            },
            minLength: {
              value: 8,
              message: "Password min Length - 8 characters"
            },
            maxLength: {
              value: 64,
              message: "Password max Length - 64 characters  "
            },
            pattern: {
              value: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8}/,
              message: "Password must contain at least 1 Uppercase, 1 Lowercase and 1 Number"
            }


          })
          }
        />

        {errors.password &&
          <div className='error text-danger text-center'>
            {errors.password.message}
          </div>
        }


      </div>

      <div className="form-group">
        <label>Confirm Password</label>
        <input type="password"
          name="passwordConfirm"
          placeholder="Enter password"
          className="form-control"
          placeholder="Confirm password"
          ref={register({
            required: {
              value: true,
              message: "Password is required"
            },
            minLength: {
              value: 8,
              message: "Password min Length - 8 characters"
            },
            maxLength: {
              value: 64,
              message: "Password max Length - 64 characters  "
            },
            pattern: {
              value: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8}/,
              message: "Password must contain at least 1 Uppercase, 1 Lowercase and 1 Number"
            },
            validate: {
              compare: (value) => {
                const result = value === watch("password");
                return result || "Password did not match"
              }
            }

          })
          }
        />
        {errors.passwordConfirm &&
          <div className='error text-danger text-center'>
            {errors.passwordConfirm.message}
          </div>
        }
      </div>

      <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
    </form>
    
  );
}

export default SignUp