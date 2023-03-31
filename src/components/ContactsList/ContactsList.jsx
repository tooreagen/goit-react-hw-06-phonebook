import { ContactsListItem } from 'components/ContactsListItem/ContactsListItem';
import { List } from './ContactsList.styled';
import PropTypes from 'prop-types';

export function ContactsList({ contacts, filterString, onDelete }) {
  return (
    <List>
      {contacts
        .filter(item => item.name.toLowerCase().includes(filterString))
        .map(item => {
          return (
            <ContactsListItem key={item.id} item={item} onDelete={onDelete} />
          );
        })}
    </List>
  );
}

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  filterString: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
};
