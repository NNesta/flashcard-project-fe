import React from 'react';
import PropTypes from 'prop-types';

type Props = {
  message: string;
  heading: string;
  variant: string;

}
const Alert = (props: Props) => {
  const { message, heading, variant} = props;
  let alertClass;
  if (variant === 'error') {
    alertClass = 'bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative my-5 ';
  } else if (variant === 'success') {
    alertClass =
      'bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative my-5 ';
  }
  return (
    <div className={ alertClass } role="alert">
      <strong className="font-bold">{heading}:</strong>
      <span className="block sm:inline">{message}</span>
    </div>
  );
};


export default Alert;
