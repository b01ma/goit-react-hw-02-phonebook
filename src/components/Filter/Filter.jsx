import { Wrapper, Input } from './Filter.css';
import propTypes from 'prop-types';

export const Filter = ({ value, onChange }) => {
  return (
    <Wrapper>
      <h2>Find contacts by name</h2>
      <Input type="text" name="filter" value={value} onChange={onChange} />
    </Wrapper>
  );
};

Filter.propTypes = {
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
};
