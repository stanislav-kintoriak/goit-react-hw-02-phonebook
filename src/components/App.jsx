import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactsForm } from './ContactsForm/ContactsForm'
import { Filter } from './Filter/Filter'
import { ContactList } from './ContactsList/ContactsList'

import css from './App.module.css'


export class App extends Component {


  state = {
    contacts: [],
    filter: ''
  }


render(){


  return (
     <div className={css.divSection}>
        <h1 className={css.section__title}>Phonebook</h1>
        <ContactForm onFormSubmit={this.formSubmitHandler} />
        <h2 className={css.contacts__title}>Contacts</h2>
        <Filter filterData={filter} filterChange={this.filterChangeHandler} />
        <ContactList
          renderList={foundContacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
  );



}
};
