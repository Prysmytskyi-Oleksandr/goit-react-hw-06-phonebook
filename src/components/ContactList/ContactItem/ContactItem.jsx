import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contacts-actions';

import styles from '../contactList.module.css';

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    const action = deleteContact(id);
    dispatch(action);
  };

  return (
    <li key={contact.id} className={styles.contact_item}>
      <p>
        {contact.name}: {contact.number}
      </p>

      <button
        className={styles.button}
        type="button"
        onClick={() => handleDeleteContact(contact.id)}
      >
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
  }).isRequired,
};

export default ContactItem;
