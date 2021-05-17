import React, { useState } from "react"
import { Tab, Tabs} from 'react-bootstrap';
import MyProfil from "../../pages/profil/MyProfil";
import MyLoan from "../../pages/loan/MyLoan";
import "./NavBar.css"

function ControlledTabs() {
    const [key, setKey] = useState('profil');
  
    return (
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab eventKey="profil" title="My Profil">
          <MyProfil />
        </Tab>
        <Tab eventKey="loan" title="My Loan">
            <MyLoan />
        </Tab>
      </Tabs>
    );
  }

class NavBar extends React.Component{
    render(){
        return(
            <ControlledTabs/>
        )
    }
}


export default (NavBar);