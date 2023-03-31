import { FilterWrap, P, Input } from './Filter.styled';
import PropTypes from 'prop-types';

export function Filter({ handleFind }) {
  return (
    <FilterWrap>
      <P>Find contacts by name</P>
      <Input type="text" onChange={handleFind} />
    </FilterWrap>
  );
}

Filter.propTypes = {
  handleFind: PropTypes.func.isRequired,
};
