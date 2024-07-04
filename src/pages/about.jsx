import React from 'react';
import { F7Page, F7Navbar, F7Block, F7Link } from 'framework7-react'; // Assuming F7 components are imported

const AboutPage = () => {
  return (
    <F7Page>
      <F7Navbar title="About" backLink="Back" sliding />
      <F7Block inner>
        <p>Here is About page!</p>
        <p>
          You can go <F7Link href="/">back</F7Link>.
        </p>
      </F7Block>
    </F7Page>
  );
};

export default AboutPage;
