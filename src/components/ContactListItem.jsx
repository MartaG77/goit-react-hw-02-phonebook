import PropTypes from 'prop-types';

const ContactListItem = ({ onRemove, name, number, id }) => {
    return (
      <li>
        <p>
          {name}: {number}
        </p>
        <button value={name} onClick={() => onRemove(id)}>
          Delete
        </button>
      </li>
    );
  };

  ContactListItem.propTypes = {
    onRemove: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  };

  export default ContactListItem;