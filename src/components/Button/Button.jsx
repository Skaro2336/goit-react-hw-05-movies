import PropTypes from 'prop-types';
import { Btn } from './ButtonStyles';

const Button = ({ text }) => {
  return <Btn type="button">{text}</Btn>;
};
export default Button;

Button.propTypes = {
  text: PropTypes.string,
};
