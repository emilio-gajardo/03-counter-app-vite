import PropTypes from 'prop-types';

export const FirstApp = ({ title, subtitle}) => {
  return (
    <>
      {/* <h1>{title}</h1>
      <h2>{subtitle}</h2> */}
    </>
  );
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
}

FirstApp.defaultProps = {
  title: 'No title',
  subtitle: 'No subtitle',
}
