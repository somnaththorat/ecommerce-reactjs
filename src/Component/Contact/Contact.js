import React from 'react';
import styled from 'styled-components';

const Contact = () => {
  return (
    <Wrapper>
      <h3 className='common-heading'>Contact Page</h3>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30178.95241699017!2d73.9262666495756!3d19.003452686961147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd30d128913813%3A0x908cd5c41e4b8673!2sManchar%2C%20Maharashtra%20410503!5e0!3m2!1sen!2sin!4v1690353812709!5m2!1sen!2sin" width="100%" height="350" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='abMap'></iframe>


      <div className='container'>
        <div className='contact-form'>
          <form action='' method='POST' className='contact-inputs'>
            <input type='text'  name='username' placeholder='Username'  required autoComplete='off'/>
            <input type='email'  name='email' placeholder='Email'  required autoComplete='off'/>
            <textarea name='message' cols={30} rows={10} required autoComplete='off' placeholder='Enter Message'>
            </textarea>
            <input type='submit' value='send'/>
          </form>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;


export default Contact;