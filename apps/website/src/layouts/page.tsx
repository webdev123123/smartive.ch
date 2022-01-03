import { Logo, Navigation } from '@smartive/guetzli';
import { domAnimation, LazyMotion } from 'framer-motion';
import { usePlausible } from 'next-plausible';
import { useRouter } from 'next/dist/client/router';
import NextLink from 'next/link';
import React, { FC } from 'react';
import { PlausibleEvents } from '../utils/tracking';

const Main = [
  { label: 'Angebot', link: '/angebot' },
  { label: 'Projekte', link: '/projekte' },
  { label: 'Team', link: '/team' },
  { label: 'Agentur', link: '/agentur' },
  { label: 'Blog', link: '/blog' },
  { label: 'Jobs', link: '/jobs' },
];

const Meta = [
  { label: '+41 44 552 55 99', link: 'tel:0041445525599' },
  { label: 'hello@smartive.ch', link: 'mailto:hello@smartive.ch' },
];

export const Page: FC = ({ children }) => {
  const { pathname } = useRouter();
  const plausible = usePlausible<PlausibleEvents>();

  return (
    <div>
      <LazyMotion strict features={domAnimation}>
        <Navigation
          mainLinks={Main}
          metaLinks={Meta}
          currentPathname={pathname}
          home={<Logo className="h-[21px] w-auto py-[4px]" />}
          linkWrapper={(props) => <NextLink prefetch={false} {...props} />}
          onMetaLinkClick={(value: string) =>
            plausible('Contact Click', {
              props: {
                value,
                url: window?.location.toString(),
                component: 'navigation',
                device: 'desktop',
              },
            })
          }
          onHomeLinkContextMenu={() => (window.location.href = '/brand')}
        />
      </LazyMotion>
      <div id="pageContent" className="lg:container lg:mx-auto px-4 pt-8 max-w-[100vw]">
        {children}
      </div>
    </div>
  );
};