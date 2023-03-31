import { ListItem, Button } from './ContactsListItem.styled';
import PropTypes from 'prop-types';

export function ContactsListItem(props) {
  const { id, name, number } = props.item;
  return (
    <ListItem>
      {`${name}: ${number}`}{' '}
      <Button onClick={() => props.onDelete(id)}>Delete</Button>
    </ListItem>
  );
}

ContactsListItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  onDelete: PropTypes.func.isRequired,
};
