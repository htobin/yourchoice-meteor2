import React from 'react';
import { Grid, Image, Item } from 'semantic-ui-react';

export default class IslandSnowLogo extends React.Component {
  render() {
    return (

        <Grid centered container>
          <Grid.Row>
            <h1> Na'au Wala'au Designs</h1>
          </Grid.Row>
          <hr/>
          <Grid.Row>
            <Image src={'https://cdn.shopify.com/s/files/1/1824/1089/files/sleeve_logo_large.jpg?v=1509566938'}/>
          </Grid.Row>
          <Grid.Row className={'explain'}>
            <Grid.Column textAlign={'center'} width={13}>
              Naʻau Walaʻau Designs is a graphic design company that shares stories through products. When I first
              launched, I hand stamped ʻOhe Kāpala (bamboo stamping) t-shirts and kīhei. Because the demand started to
              grow, I started to sell screen printed t-shirts. From here, I grew into other products, such as hats,
              pareu,
              and eventually jewelry. Today, I focus mostly on Sterling Silver jewelry however we also produce
              traditional
              male clothing in old Hawaiʻi called Malo (loincloth). My goal at Naʻau Walaʻau Designs is to perpetuate
              Hawaiian culture and history through each of our pieces.
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Item.Content className={'store-link-wrap2'}> I invite you to click on the links below that share some of my
              designs and its stories:
            </Item.Content>
          </Grid.Row>
          <Grid.Row>
            <a className={'biglink'} href="https://www.kamakapili.com/pages/designs-malo-collection-2017">MALO
              COLLECTION 2017</a>
          </Grid.Row>
          <Grid.Row>
            <a className={'biglink'} href="https://www.kamakapili.com/pages/designs-malo-collection-2016">MALO
              COLLECTION 2016</a>
          </Grid.Row>
          <Grid.Row>
            <a className={'biglink'} href="https://www.kamakapili.com/pages/designs-aloha-collection">ALOHA
              COLLECTION</a>
          </Grid.Row>
          <Grid.Row>
            <a className={'biglink'} href="https://www.kamakapili.com/pages/designs">OTHER DESIGNS</a>
          </Grid.Row>
          <Grid.Row className={'dashes'}>
            ----
          </Grid.Row>
          <Grid.Row>
            <a className={'biglink'} href="https://www.kamakapili.com/pages/how-to-tie-a-malo">CLICK HERE TO LEARN HOW
              TO TIE A MALO</a>

          </Grid.Row>
          <Grid.Row className={'store-link-wrap'}>
            Be sure to check out&nbsp; <a className='store-link' href="https://www.kamakapili.com/collections">the
            Store</a>&nbsp;to see
            my designs on products that last a lifetime
          </Grid.Row>
          <Grid.Row>
            &nbsp;
          </Grid.Row>
          <hr/>
        </Grid>

    );
  }
}
