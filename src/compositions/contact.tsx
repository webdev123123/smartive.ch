import React, { FC } from 'react';
import { LinkList } from './link-list';
import { Employee } from '../data/employees';
import { Heading2 } from '../elements/heading-2';
import { Portrait, PortraitVariant } from '../elements/portrait';

type Props = {
  contact: Employee;
};

export const Contact: FC<Props> = ({
  contact,
  children = (
    <>
      Fragen oder Interesse? <br />
      {contact.firstname} hilft dir gerne weiter.
    </>
  ),
}) => {
  const { firstname, lastname, portrait, tel, email } = contact;
  return (
    <div className="grid place-content-center items-center justify-items-center text-center lg:text-left grid-flow-row lg:grid-flow-col gap-12 px-4 lg:px-14">
      <Portrait
        image={portrait}
        alt={`${firstname} ${lastname}`}
        variant={PortraitVariant.Big}
        className="h-16 w-16 lg:h-52 lg:w-52"
      />
      <div>
        <Heading2>{children}</Heading2>
        <div className="grid place-items-center lg:place-items-start">
          <LinkList
            links={[
              { label: email, href: `mailto:${email}` },
              { label: tel, href: `tel:${tel}` },
            ]}
          />
        </div>
      </div>
    </div>
  );
};
