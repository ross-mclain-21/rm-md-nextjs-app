import React, { useState } from 'react';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getServerSideProps() {
  const contacts = await prisma.contact.findMany();
  return {
    props: {
      initialContacts: contacts
    }
  };
}

export default function ContactTest({ initialContacts }) {
  const [contacts, setContacts] = useState(initialContacts);
  return (
    <div className={'d-flex flex-column container justify-content-center flex-fill'}>
      <h1>Contacts</h1>
      <div className={'p-3'}>
        {contacts.map(contact => (
          <div className={'d-flex flex-column'}>
            <span>{contact.firstname}</span>
            <span>{contact.lastname}</span>
            <span>{contact.email}</span>
            <span>{contact.id}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
