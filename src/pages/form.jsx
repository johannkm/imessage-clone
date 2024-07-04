import React from 'react';
import {
  Page,
  Navbar,
  BlockTitle,
  List,
  ListItem,
  Label,
  Input,
  Button,
  Block,
  Buttons,
  Grid,
  Col
} from 'framework7-react';

const FormPage = () => {
  return (
    <Page>
      <Navbar title="Form" backLink="Back" sliding />
      <BlockTitle>Form</BlockTitle>
      <List form>
        <ListItem>
          <Label>Name</Label>
          <Input type="text" placeholder="Name" />
        </ListItem>
        <ListItem>
          <Label>Password</Label>
          <Input type="password" placeholder="Password" />
        </ListItem>
        <ListItem>
          <Label>E-mail</Label>
          <Input type="email" placeholder="E-mail" />
        </ListItem>
        <ListItem>
          <Label>URL</Label>
          <Input type="url" placeholder="URL" />
        </ListItem>
        <ListItem>
          <Label>Phone</Label>
          <Input type="tel" placeholder="Phone" />
        </ListItem>
        <ListItem>
          <Label>Birth date</Label>
          <Input type="date" placeholder="Birth date" value="2014-04-30" />
        </ListItem>
        <ListItem>
          <Label>Date time</Label>
          <Input type="datetime-local" />
        </ListItem>
        <ListItem>
          <Label>Gender</Label>
          <Input type="select">
            <option value="1">Male</option>
            <option value="2">Female</option>
          </Input>
        </ListItem>
        <ListItem>
          <Label>Switch</Label>
          <Input type="switch" />
        </ListItem>
        <ListItem>
          <Label>Range</Label>
          <Input type="range" min="0" max="100" step="1" value="90" />
        </ListItem>
        <ListItem>
          <Label>Textarea</Label>
          <Input type="textarea" placeholder="Textarea" />
        </ListItem>
      </List>

      <BlockTitle>Form With Floating Labels</BlockTitle>
      <List form>
        <ListItem>
          <Label floating>Name</Label>
          <Input type="text" placeholder="Name" />
        </ListItem>
        <ListItem>
          <Label floating>Password</Label>
          <Input type="password" placeholder="Password" />
        </ListItem>
        <ListItem>
          <Label floating>E-mail</Label>
          <Input type="email" placeholder="E-mail" />
        </ListItem>
      </List>

      <BlockTitle>Form Without Labels</BlockTitle>
      <List form>
        <ListItem>
          <Input type="text" placeholder="Name" />
        </ListItem>
        <ListItem>
          <Input type="password" placeholder="Password" />
        </ListItem>
        <ListItem>
          <Input type="email" placeholder="E-mail" />
        </ListItem>
      </List>

      <BlockTitle>Checkboxes</BlockTitle>
      <List form>
        {[1, 2, 3].map(n => (
          <ListItem key={n} checkbox name="my-checkbox" value={n} title={`Checkbox ${n}`} />
        ))}
      </List>

      <BlockTitle>Radios</BlockTitle>
      <List form>
        {[1, 2, 3].map(n => (
          <ListItem key={n} radio name="my-radio" checked={n === 1} value={n} title={`Radio ${n}`} />
        ))}
      </List>

      <BlockTitle>Buttons</BlockTitle>
      <Block inner>
        <p><Button>Button</Button></p>
        <p><Button round>Button Round</Button></p>
        <p><Button fill>Button Fill</Button></p>
        <p>
          <Buttons>
            <Button round active>Button 1</Button>
            <Button round>Button 2</Button>
            <Button round>Button 3</Button>
          </Buttons>
        </p>
        <p>
          <Buttons color="orange">
            <Button round big>Button 1</Button>
            <Button round big active>Button 2</Button>
            <Button round big>Button 3</Button>
          </Buttons>
        </p>
        <p>
          <Grid>
            <Col><Button big fill color="green">Send</Button></Col>
            <Col><Button big fill color="red">Delete</Button></Col>
          </Grid>
        </p>
        <p>
          <Grid>
            <Col><Button fill raised color="green">Raised</Button></Col>
            <Col><Button raised color="red">Raised</Button></Col>
            <Col><Button fill raised color="pink">Raised</Button></Col>
          </Grid>
        </p>
      </Block>
    </Page>
  );
}

export default FormPage;
