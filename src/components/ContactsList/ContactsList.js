import PropTypes from 'prop-types';
import { ListItem } from './ListItem/ListItem';
import css from './ContactsList.module.css';

export const ContactList = ({ renderItems, deleteItem }) => {
  return (
    <ul className={css.contact__list}>
      <ListItem contacts={renderItems} deleteContact={deleteItem} />
    </ul>
  );
};

ContactList.propTypes = {
  deleteItem: PropTypes.func.isRequired,
  renderItems: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
