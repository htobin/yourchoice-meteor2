import React from 'react';
import { Container, Menu, Image, Dropdown, Icon } from 'semantic-ui-react';

export default class TopMenu extends React.Component {
  render() {
    return (
        <Container className={'centered grid'}>
          <Menu borderless className="topmenu">
            <Image className={'logo'}
                   src="https://cdn.shopify.com/s/files/1/1824/1089/files/KP_logo_180x@2x.png?v=1509325929"/>
            <Dropdown item text="ABOUT" icon="dropdown">
              <Dropdown.Menu>
                <Dropdown.Item>Calendar Events</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown item text="#SHAREALOHA" icon="dropdown">
              <Dropdown.Menu>
                <Dropdown.Item>Hawaiian Airlines</Dropdown.Item>
                <Dropdown.Item>Hawai'i Tourism Authority.</Dropdown.Item>
                <Dropdown.Item>MAMo Wearable Arts Show</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown item text="ENDEAVORS" icon="dropdown">
              <Dropdown.Menu>
                <Dropdown.Item>Aloha Aunthentic</Dropdown.Item>
                <Dropdown.Item>Native Stories</Dropdown.Item>
                <Dropdown.Item>NH ACE</Dropdown.Item>
                <Dropdown.Item>Na'au Wala'au Designs</Dropdown.Item>
                <Dropdown.Item>Toastmasters</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown item text="STORE" icon="dropdown">
              <Dropdown.Menu>
                <Dropdown.Item>Jewelry</Dropdown.Item>
                <Dropdown.Item>Malo</Dropdown.Item>
                <Dropdown.Item>Lapel Pins</Dropdown.Item>
                <Dropdown.Item>Mugs</Dropdown.Item>
                <Dropdown.Item>T-Shirts</Dropdown.Item>
                <Dropdown.Item>Pillows</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Item><Icon name={'search'}/></Menu.Item>
            <Menu.Item><Icon name={'shop'}/></Menu.Item>
          </Menu>
        </Container>
    );
  }
}
