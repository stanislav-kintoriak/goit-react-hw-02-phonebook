import PropTypes from 'prop-types';
import css from './ListItem.module.css';


export const ContactList = ({renderItems, deleteItem}) => {

    return renderItems.map(({id, name, number }) => {

        
        return (
            <li>
            <div>
              <p>
                {name}: <span>{number}</span>
              </p>
              <button
                className={css.listItem__button}
                type="button"
                onClick={() => deleteItem(id)}
                key={id}
              >
                Delete
              </button>
            </div>
          </li>
        )
      }
      



    )
}





