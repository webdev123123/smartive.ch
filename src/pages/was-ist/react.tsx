import { Copy, Explainer, Grid, Link, PageSection, TextBlock, UnorderedList } from '@smartive/guetzli';
import React from 'react';

import { PageHeader } from '../../compositions/page-header';
import { Page } from '../../layouts/page';

const WasIstReact = () => (
  <Page>
    <PageHeader
      markdownTitle="_React_ bringt die Inhalte auf den Bildschirm."
      pageTitle="Was ist eigentlich React?"
      description="React kümmert sich um die Darstellung interaktiver Web-Inhalte – sei es eine Website, eine App oder ein
      Videostreamingportal. Benutzerinteraktionen im Browser können zwar in reinem Javascript programmiert werden, doch bei
      komplexeren Fällen bietet sich eine Library oder ein Framework wie React an. So behalten wir die Kontrolle über jedes
      Detail in der Darstellung – ohne uns ständig um Details kümmern zu müssen."
    >
      <Copy>
        React kümmert sich um die <strong>Darstellung interaktiver Web-Inhalte</strong> – sei es eine Website, eine App oder
        ein Videostreamingportal. Benutzerinteraktionen im Browser können zwar in reinem Javascript programmiert werden, doch
        bei komplexeren Fällen bietet sich eine Library oder ein Framework wie React an. So behalten wir die Kontrolle über
        jedes Detail in der Darstellung – ohne uns ständig um Details kümmern zu müssen.
      </Copy>
    </PageHeader>

    <main>
      <PageSection title="React plus X">
        <Copy>
          React legt das Fundament für eine effiziente Entwicklung. Und es öffnet die Tür zu einem Dschungel von weiteren
          Libraries (wir nennen es Ökosystem), die darauf aufbauen oder sich sehr gut kombinieren lassen:
        </Copy>
        <UnorderedList
          items={[
            'Ein Widget? React.',
            'Eine ganze Website mit Server-side Rendering? React und Next.js.',
            'Eine App mit vielen möglichen Zuständen? React und XState.',
          ]}
        />
        <Grid cols={2}>
          <div className="bg-cornflower-500 rounded p-8 lg:p-12" id="typescript">
            <TextBlock title="TypeScript">
              <Copy>
                <Link href="https://www.typescriptlang.org/" newTab>
                  TypeScript
                </Link>{' '}
                ist der neue beste Freund von Javascript. In Javascript ist alles möglich – auch Saltos mit blutiger Nase und
                Knochenbrüchen. TypeScript beendet den Wildwuchs, indem es die Entwickler*innen zwingt, Implizites explizit
                zu machen (
                <Explainer title="Jede Datenstruktur wird definiert: «User hat ein name vom Typ string, optional ein Alter vom Typ number, …»">
                  Typisierung
                </Explainer>
                ).
              </Copy>
              <Copy>
                Eine definierte Datenstruktur ist wie ein zahmes Känguru: Keine Boxhiebe, aber alles im Beutel. Das gibt
                Sicherheit. Das Resultat sind weniger Bugs und eine stabile Basis, die auch grosse Projekte langfristig
                wartbar macht.
              </Copy>
            </TextBlock>
          </div>
          <div className="bg-mint-500 rounded p-8 lg:p-12" id="next">
            <TextBlock title="Next.js">
              <Copy>
                Mit React generieren wir Komponenten, also Teile einer Seite. Für einen ganzen Webauftritt mit vielen Seiten
                gibt es{' '}
                <Link href="https://nextjs.org/" newTab>
                  Next.js
                </Link>
                .
              </Copy>
              <Copy>
                Next.js ergänzt React um Cleverness auf der Server-Seite – Vorgenerierte Seiten, ad hoc generierte und nur
                bei Änderung neu generierte sind damit ein Leichtes. Auf dieser Basis lässt sich wunderbar eine Plattform wie{' '}
                <Link href="/projekte/migipedia">Migipedia</Link> mit einer Mischung aus statischen, dynamischen und
                personalisierten Inhalten bauen.
              </Copy>
              <Copy>
                <Link href="https://nextjs.org/showcase" newTab>
                  Wo Next.js überall drinsteckt
                </Link>
              </Copy>
            </TextBlock>
          </div>
        </Grid>
        <Grid cols={2}>
          <div className="bg-apricot-500 rounded p-8 lg:p-12" id="xstate">
            <TextBlock title="XState">
              <Copy>
                Viele mögliche Interaktionen bedeutet auch viele mögliche Zustände – etwa bei einem Verkaufsvorgang: Hat die
                Benutzerin schon ein Konto? Mit Adresse? Was ist im Warenkorb? In welchem Schritt ist der Bezahlvorgang?
              </Copy>
              <Copy>
                Hinter{' '}
                <Link href="https://xstate.js.org/docs/" newTab>
                  XState
                </Link>{' '}
                steckt ein Konzept aus der theoretischen Informatik: <strong>State Machines</strong> sind eine elegante
                Lösung, um Zustände und Abhängigkeiten zu modellieren und zugehörige Daten zu verwalten. So landen
                Benutzer*innen nicht in einer Sackgasse, sondern bewegen sich auf definierten Pfaden durch eine digitale
                Landschaft. Das schafft die Basis die für kritische Anwendungen wie z.B. ein Kassensystem.
              </Copy>
              <Copy>
                Robert hat auf unserem Blog ausführlich erklärt,{' '}
                <Link href="https://blog.smartive.ch/what-state-machines-are-and-why-we-use-them-5ea55183be09">
                  was es mit State Machines und XState genau auf sich hat
                </Link>
                .
              </Copy>
            </TextBlock>
          </div>
          <div className="bg-cornflower-500 rounded p-8 lg:p-12" id="tailwind">
            <TextBlock title="Tailwind">
              <Copy>
                An CSS kommt im Web niemand vorbei. Layout, Farben, Schriften, Spacing – kurz: Das Erscheinungsbild jeder
                Website ist in Stylesheets festgelegt.
              </Copy>
              <Copy>
                CSS ist mittlerweile sehr umfangreich und bietet ausufernde Möglichkeiten. Das führt natürlich zu einer
                gewissen Komplexität, was wiederum eine Suche nach dem besten Ansatz zur Folge hat, um CSS zu bändigen.
              </Copy>
              <Copy>
                Der beste Anwärter auf den heiligen Gral ist unseres Erachtens{' '}
                <Link href="https://tailwindcss.com/" newTab>
                  Tailwind
                </Link>
                . Die Umsetzung von Designs beschleunigt es jedenfalls erheblich.
              </Copy>
            </TextBlock>
          </div>
        </Grid>
      </PageSection>
    </main>
  </Page>
);

export default WasIstReact;
