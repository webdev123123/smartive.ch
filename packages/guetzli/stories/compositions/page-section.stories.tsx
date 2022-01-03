import { Meta, Story } from '@storybook/react';
import React from 'react';
import { PageSection as PageSectionComponent, PageSectionProps } from '../../src/compositions/page-section';
import { Copy } from '../../src/identity/copy';

export default {
  title: 'Compositions/Page Section',
  component: PageSectionComponent,
} as Meta;

export const PageSection: Story<PageSectionProps> = (props) => <PageSectionComponent {...props} />;
PageSection.args = {
  title: 'Öppis Spannends',
  children: (
    <Copy>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi doloremque obcaecati est sed, esse, ut nulla nostrum
      tenetur eum reprehenderit asperiores, aspernatur ab molestias quis! Asperiores obcaecati laudantium dolorem culpa!
    </Copy>
  ),
};
