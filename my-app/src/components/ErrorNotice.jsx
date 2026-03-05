const ErrorNotice = ({ message }) => (
  <div className="error-notice" role="alert">
    <h3>Unable to load data</h3>
    <p>{message || "Something went wrong while contacting the API."}</p>
  </div>
);

export default ErrorNotice;
