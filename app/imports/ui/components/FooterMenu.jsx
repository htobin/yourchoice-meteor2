import React from 'react';
import { Grid, List, Icon, } from 'semantic-ui-react';

export default class FooterMenu extends React.Component {
  render() {
    return (
        <Grid centered columns={5}>
          <Grid.Column>
            <List>
              <List.Item className='normal'><a href={'https://www.kamakapili.com/'}>Home</a></List.Item>
              <List.Item><a href={'https://www.kamakapili.com/pages/contact'}>Contact</a></List.Item>
              <List.Item><a className={'normal'} href={'https://www.kamakapili.com/search'}>Search</a></List.Item>
            </List>
          </Grid.Column>
          <Grid.Column textAlign={'left'} width={5}>
            <List>
              <List.Item><Icon fitted name={'facebook'}/>Facebook</List.Item>
              <List.Item><Icon name={'twitter'}/>Twitter</List.Item>
              <List.Item><Icon name={'instagram'}/>Instagram</List.Item>
              <List.Item><Icon name={'youtube'}/>Youtube</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column className={'store-link-wrap'} textAlign={'right'}>
            <Grid.Row>
              ©2018,Kamaka Pili® Store
            </Grid.Row>
            <Grid.Row>
              Powered by Shopify
            </Grid.Row>
            <Grid.Row>
              <Grid>
                <Grid.Column floated={'right'} width={4}><Icon size={'big'} name={'american express'}/></Grid.Column>
                <Grid.Column width={4}><Icon size={'big'} name={'apple pay'}/></Grid.Column>
                <Grid.Column width={4}><Icon size={'big'} name={'diners club'}/></Grid.Column>
                <Grid.Column width={4}><Icon size={'big'} name={'discover'}/></Grid.Column>
              </Grid>
            </Grid.Row>
            <Grid.Row>
              <Grid>
                <Grid.Column floated={"right"} width={4}><Icon size={"big"} name={"jcb"}/></Grid.Column>
                <Grid.Column width={4}><Icon size={"big"} name={"mastercard"}/></Grid.Column>
                <Grid.Column width={4}><Icon size={"big"} name={"paypal"}/></Grid.Column>
                <Grid.Column width={4}><Icon size={"big"} name={"visa"}/></Grid.Column>
              </Grid>
            </Grid.Row>
          </Grid.Column>
        </Grid>

    );
  }
}
