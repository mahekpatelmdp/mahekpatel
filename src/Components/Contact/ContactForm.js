import { useState } from 'react';
import useInput from '../../hooks/use-input';
import Input from '../UI/Input';
import './ContactForm.css';
import emailjs from '@emailjs/browser';
import { Modal } from '../UI/Modal';
import ContactEmailResult from './ContactEmailResult';
import { CgClose } from 'react-icons/cg';
import { Oval } from 'react-loader-spinner';
import ContactInformation from './ContactInformation';

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [emailModal, setEmailModal] = useState({
    show: false,
    successful: false,
  });

  const showSuccessEmailModal = () => {
    setEmailModal({
      show: true,
      successful: true,
    });
  };

  const showFailureEmailModal = () => {
    setEmailModal({
      show: true,
      successful: false,
    });
  };

  const hideEmailModal = () => {
    setEmailModal({
      show: false,
      successful: false,
    });
  };

  const {
    value: nameValue,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    resetInput: resetNameInput,
    isValid: nameIsValid,
  } = useInput((value) => value.trim() !== '');

  const {
    value: emailValue,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    resetInput: resetEmailInput,
    isValid: emailIsValid,
  } = useInput((value) => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    return value.trim() !== '' && emailRegex.test(value);
  });

  const {
    value: queryValue,
    hasError: queryHasError,
    valueChangeHandler: queryChangeHandler,
    inputBlurHandler: queryBlurHandler,
    resetInput: resetQueryInput,
    isValid: queryIsValid,
  } = useInput((value) => value.trim().length >= 30);

  const submitFormHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }

    // implement loading state here
    setIsLoading(true);
    emailjs
      .send(
        process.env.REACT_APP_EMAIL_SERVICE,
        process.env.REACT_APP_EMAIL_TEMPLATE,
        {
          email: emailValue,
          message: queryValue,
          name: nameValue,
        },
        process.env.REACT_APP_EMAIL_PUBLIC
      )
      .then(function (response) {
        if (response.status === 200) {
          showSuccessEmailModal();
        } else {
          showFailureEmailModal();
        }
      })
      .catch(function (response) {
        showFailureEmailModal();
      })
      .finally(() => {
        resetNameInput();
        resetEmailInput();
        resetQueryInput();
        setIsLoading(false);
      });
  };

  let formIsValid = nameIsValid && emailIsValid && queryIsValid;

  return (
    <>
      <h2 className="text-5xl font-bold mb-8 text-center">Let's Connect!</h2>
      <div className="contact-form-wrapper text-center flex flex-col">
        <form onSubmit={submitFormHandler} className="mb-10">
          <Input
            placeholder="Name*"
            identifier="name"
            input={{
              type: 'text',
              minLength: '1',
              maxLength: '25',
            }}
            value={nameValue}
            hasError={nameHasError}
            onChangeHandler={nameChangeHandler}
            onBlurHandler={nameBlurHandler}
            errorMessage="Name is required."
          />
          <Input
            placeholder="Email*"
            identifier="email"
            input={{ type: 'email' }}
            value={emailValue}
            hasError={emailHasError}
            onChangeHandler={emailChangeHandler}
            onBlurHandler={emailBlurHandler}
            errorMessage="Please enter a valid email."
          />
          <div className="queries-wrapper">
            <textarea
              placeholder="Comments/Queries*"
              id="queries"
              minLength="30"
              maxLength="400"
              value={queryValue}
              onChange={queryChangeHandler}
              onBlur={queryBlurHandler}
              className={queryHasError ? 'field-error' : ''}
            />
            {queryHasError && (
              <span className="form-error-message text-red-500 font-bold block">
                Your query should have atleast 30 characters.
              </span>
            )}
          </div>

          <button
            disabled={!formIsValid}
            className="button block contact-us-submit m-auto"
          >
            Send Email
          </button>
        </form>
        {isLoading && (
          <Oval
            height={80}
            width={80}
            color="#4fa94d"
            wrapperStyle={{}}
            wrapperClass="loading-wrapper"
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#4fa94d"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
        )}
        {emailModal.show && (
          <Modal onClose={hideEmailModal}>
            <div className="email-modal flex h-full w-full justify-center content-center flex-col-reverse	">
              <ContactEmailResult result={emailModal.successful} />
              <button className="self-start" onClick={hideEmailModal}>
                <CgClose />
              </button>
            </div>
          </Modal>
        )}
        <ContactInformation />
      </div>
    </>
  );
};

export default ContactForm;
