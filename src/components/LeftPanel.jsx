import React, { useState } from 'react';
import { Page, Block, Button, Panel } from 'framework7-react';

const LeftPanel = ({ theme, auth, signIn }) => {
  const [name, setName] = useState('');

  return (
    <Panel left cover containerEl="#panel-page" id="panel-nested">
      <Page>
        <Block>
          <h3>
             {theme === 'ios' ? 'Settings' : 'Left Panel'}
          </h3>
          <form>
            <label>
              Name
            </label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </form>
          {!auth ? <Button fill round onClick={() => signIn()}>Sign in</Button> : <p>Signed in</p>}
        </Block>
      </Page>
    </Panel>
  );
}

export default LeftPanel;
