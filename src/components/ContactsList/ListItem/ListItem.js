import PropTypes from 'prop-types';
import css from './ListItem.module.css';


export const ContactList = ({}) => {


    ({id, name, number }) => {

        
        return (
            <li>
            <div>
              <p>
                {name}: <span>{number}</span>
              </p>
              <button
                className={css.listItem__button}
                type="button"
                onClick={}
                key={id}
              >
                Delete
              </button>
            </div>
          </li>
        )
      };
      










}





