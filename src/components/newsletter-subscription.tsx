import React, { FC, FormEvent, useState } from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import { Button } from '../elements/button';
import { Input } from '../elements/input';
import { Label } from '../elements/label';
import { Tooltip } from '../elements/tooltip';

type Props = {
  className?: string;
  label?: string;
};

export const NewsletterSubscription: FC<Props> = ({ className = '', label = '' }) => {
  const [email, setEmail] = useState('');
  const [notification, setNotification] = useState('');

  const handleChange = (event) => {
    setNotification('');
    setEmail(event.target.value.trim());
  };

  const handleSubmit = (event: FormEvent, subscribe: ({ EMAIL: string }) => void) => {
    event.preventDefault();
    subscribe({ EMAIL: email });
  };

  return (
    <MailchimpSubscribe
      url={process.env.NEXT_PUBLIC_MAILCHIMP_NEWSLETTER}
      render={({ subscribe, status, message }) => {
        switch (status) {
          case 'success':
            setNotification('Danke für dein Interesse! Du solltest eine E-Mail von uns bekomment haben.');
            setEmail('');
            break;
          case 'error':
            setNotification(
              message.includes('already subscribed')
                ? 'Du bekommst unseren tollen Newsletter bereits!'
                : message.includes('address is invalid')
                ? 'Diese E-Mail Addresse sieht leider nicht ganz richtig aus.'
                : 'Uups, etwas ist schief gelaufen. Sorry.'
            );
            break;
          default:
            break;
        }

        return (
          <div className={`grid grid-flow-row w-full ${className}`}>
            {label && <Label className="col-span-2">{label}</Label>}
            <form className="grid grid-cols-form" onSubmit={(event) => handleSubmit(event, subscribe)}>
              <Tooltip text={notification} isOpen={!!notification}>
                <Input
                  disabled={status === 'sending'}
                  placeholder="E-Mail-Adresse"
                  className="mr-2"
                  value={email}
                  onChange={(event) => handleChange(event)}
                  type="email"
                />
              </Tooltip>
              <Button type="submit" disabled={status === 'sending'}>
                {status === 'sending' ? '...' : 'Go!'}
              </Button>
            </form>
          </div>
        );
      }}
    />
  );
};
