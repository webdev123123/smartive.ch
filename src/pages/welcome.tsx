import { Copy, Grid, GridSlider, Heading2, Heading3, LinkList } from '@smartive/guetzli';
import { GetStaticProps, NextPage } from 'next';
import React from 'react';
import { NextContentCard } from '../components/content-card';
import { Image, ImageVariant } from '../components/image';
import { PageHeader } from '../compositions/page-header';
import { Link } from '../elements/link';
import { LandingPage } from '../layouts/landing-page';
import { Section } from '../layouts/section';

const STATIC_IMAGES = {
  boats: '/images/welcome/boats.jpg',
  pool: '/images/welcome/pool.jpg',
  fire: '/images/welcome/fire.jpg',
  aescher: '/images/welcome/aescher.jpg',
};

type Props = {
  images: typeof STATIC_IMAGES;
};
const Welcome: NextPage<Props> = ({ images }) => (
  <LandingPage>
    <PageHeader
      markdownTitle="Smart Move™"
      description="Hoi! Schön bisch da 🤗 Da wir Bäume 🌳 eigentlich ganz gut mögen, haben wir dir kein 500-Seiten-Dossier ausgedruckt und auf deinen neuen Arbeitsplatz gelegt, sondern stellen dir alles was du brauchst digital zur Verfügung."
    >
      <Copy>
        Hoi! Schön bisch da 🤗 Da wir Bäume 🌳 eigentlich ganz gut mögen, haben wir dir kein 500-Seiten-Dossier ausgedruckt
        und auf deinen neuen Arbeitsplatz gelegt, sondern stellen dir alles was du brauchst digital zur Verfügung. Macht noch
        Sinn, so als Digital Agentur. Haha. Egal. Wichtig ist, dass du endlich da bist. Wir konntens kaum erwarten.
      </Copy>

      <LinkList links={[{ label: 'Google Account einrichten', href: `https://accounts.google.com/signin` }]} />
    </PageHeader>

    <Section>
      <Grid cols={2}>
        <Image
          src={images.boats}
          alt="smartive Team auf einem Weidling (Boot) auf dem Rhein"
          variant={ImageVariant.FillContainer}
          width={720}
          height={380}
        />

        <div className="hidden md:block md:col-start-2 md:row-span-2 relative">
          <Image
            src={images.aescher}
            alt="smartive Team vor dem Aescher"
            variant={ImageVariant.FillContainer}
            width={1440}
            height={1000}
          />
        </div>
        <div className="block md:hidden">
          <Image
            src={images.aescher}
            alt="smartive Team vor dem Aescher"
            variant={ImageVariant.FillContainer}
            width={720}
            height={500}
          />
        </div>
        <Image
          src={images.pool}
          alt="Drei smartive Mitarbeitende mit Bier im Pool bei der Aussicht über das Verzascatal"
          variant={ImageVariant.FillContainer}
          width={720}
          height={500}
        />
      </Grid>
    </Section>

    <Section>
      <Heading2>Deine ersten, digitalen Schritte</Heading2>
      <Copy>
        Slack hast du wahrscheinlich schon. Aber es sieht noch nicht so nach smartive aus. Schau doch mal auf unserer{' '}
        <Link href="/brand">Brandseite</Link>
        vorbei um dir dein Slack Theme zu ergattern. Und wenn du schon mal da bist, lies dir die Sachen doch rasch durch. 😇
      </Copy>
      <Heading3>Love Thy Neighbor</Heading3>
      <Copy>
        Erster Tag. So. viele. Namen. 😩 Unsere <Link href="/team">Teamseite</Link> schafft Abhilfe. Da findest du alle
        smarties mit Foto und ein paar kurzweiligen Facts.
      </Copy>
      <Copy>
        Zu wissen wie die Leute heissen ist sicher schon mal ein guter Schritt. Aber du fragst dich vielleicht an wen du dich
        wenden kannst, wenn du Fragen zum Thema{' '}
        <Link href="https://smarties.app/roles/smartive-and-beer" newTab>
          Bier 🍻
        </Link>{' '}
        hast (ja, wirklich…). Oder wie genau dieses{' '}
        <Link href="https://smarties.app/roles/scrum-master" newTab>
          Scrum
        </Link>{' '}
        denn funktioniert. Diese Infos findest du in den{' '}
        <Link href="https://smarties.app/roles" newTab>
          smartive Roles
        </Link>
        .
      </Copy>

      <Heading3>Du willst auch auf diese Seite?</Heading3>
      <Copy>
        Unbedingt! Sprich doch kurz Robert oder Kevin an, sie zeigen dir wo und wie du dein Profil erfassen musst, damit du
        auf der Webseite auftauchst.
      </Copy>
    </Section>
    <Section>
      <Heading2>Du brauchst noch mehr Infos?</Heading2>
      <GridSlider>
        <NextContentCard
          background="apricot"
          label="Notion 🏠"
          title="Das Zuhause aller unserer Infos"
          content="Alles was du sonst noch benötigen könntest, findest du in Notion. Wir helfen dir aber natürlich auch so gerne weiter. Trau dich zu fragen. 😊"
          link={{ label: 'Zu Notion', href: 'https://www.notion.so/smartive/smartive-2162e1ba518e410db64cfe86bd600d2b' }}
        />
        <NextContentCard
          background="mint"
          label="smarties 🍬"
          title="Unsere eigene, kleine App"
          content="In der smarties.app (WIP 👷) findest du die Übersicht über deine Zeiten, Ferientage und deine Buddies."
          link={{ label: 'Zur smarties App', href: 'https://smarties.app' }}
        />
        <NextContentCard
          background="cornflower"
          label="Zahlen 🧮"
          title="Zeiterfassung und Spesen"
          content="In Harvest kannst du deine Zeiten und Spesen erfassen. Auch für die Planung von Projekten brauchen wir Harvest."
          link={{ label: 'Zu Harvest', href: 'https://smartive.harvestapp.com/' }}
        />
      </GridSlider>
    </Section>
  </LandingPage>
);

export const getStaticProps: GetStaticProps<Props> = async () => {
  const images = STATIC_IMAGES;

  return { props: { images } };
};

export default Welcome;
