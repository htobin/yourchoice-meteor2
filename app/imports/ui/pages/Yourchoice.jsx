import React from 'react';
import TopMenu from '../components/TopMenu';
import FooterMenu from '../components/FooterMenu';
import MiddleGrid from '../components/MiddleGrid';


export default class Yourchoice extends React.Component {

  render() {
    return (
        <div>
          <TopMenu/>
          <MiddleGrid/>
          <FooterMenu/>
        </div>
    );
  }
}
