// LeftPanel.jsx
import React from 'react';
import { Panel, View, Navbar, Pages, Page, List, ListItem, Label, Input, Button } from 'framework7-react';

const LeftPanel = ({ name, auth, signIn }) => (
  <Panel left reveal layout="dark">
    <View id="left-panel-view" navbarThrough dynamicNavbar>
      <Navbar title="Settings" sliding ios />
      <Pages>
        <Page>
          <Navbar title="Left Panel" sliding material />
          <List form>
            <ListItem>
              <Label>Name</Label>
              <Input type="text" value={name} />
            </ListItem>
          </List>
          <div>
            {!auth ? (
              <Button big fill color="green" onClick={signIn}>Sign in</Button>
            ) : (
              <Label>Signed in</Label>
            )}
          </div>
        </Page>
      </Pages>
    </View>
  </Panel>
);

export default LeftPanel;
