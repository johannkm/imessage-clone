import React from 'react';
import { Page, Navbar, BlockTitle, Block } from 'framework7-react';

export default () => (
  <Page className="page-about">
    <Navbar large transparent title="About" titleLarge="About" backLink="Framework7"></Navbar>
    <BlockTitle medium>iMessage</BlockTitle>
    <Block strongIos outlineIos>
      <p>
        iMessage is a Realtime Chat App created in React, Framework7 & Firebase
      </p>
    </Block>
  </Page>
);
