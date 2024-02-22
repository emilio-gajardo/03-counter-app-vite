import PropTypes from 'prop-types';

export const FirstApp = ({ title, subtitle, name}) => {
  return (
    <>
      <h1 data-testid="test-title">{title}</h1>
      <h2>{subtitle}</h2>
      <h2>{subtitle}</h2>
      <h3>{name}</h3>
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
  name: 'Joham',
}
