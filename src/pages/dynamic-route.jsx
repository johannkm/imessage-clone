import React from 'react';
import { Page, Navbar, Block, Link } from 'framework7-react';

const DynamicRoutePage = ({ f7route }) => {
  return (
    <Page>
      <Navbar title="Dynamic Route" backLink="Back" sliding />
      <Block inner>
        <ul>
          <li><b>Url:</b> {f7route.url}</li>
          <li><b>Path:</b> {f7route.path}</li>
          <li><b>Hash:</b> {f7route.hash}</li>
          <li><b>Params:</b>
            <ul>
              {Object.entries(f7route.params).map(([key, value]) => (
                <li key={key}><b>{key}:</b> {value}</li>
              ))}
            </ul>
          </li>
          <li><b>Query:</b>
            <ul>
              {Object.entries(f7route.query).map(([key, value]) => (
                <li key={key}><b>{key}:</b> {value}</li>
              ))}
            </ul>
          </li>
          <li><b>Route:</b> {f7route.route.path}</li>
        </ul>
      </Block>
      <Block inner>
        <Link onClick={() => f7route.view.router.back()}>Go back via Router API</Link>
      </Block>
    </Page>
  );
}

export default DynamicRoutePage;
