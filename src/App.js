import React from 'react';
import './App.css';
import Nav from './components/Nav';
import About from './About';
import Homepage from './Homepage';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Box } from '@material-ui/core';
import CatholicTerps from './organizations/CatholicTerps/CatholicTerps';
import ChristianChaplaincies from './organizations/ChristianChaplaincies/ChristianChaplaincies';
import CounselingCenter from './organizations/CounselingCenter/CounselingCenter';
import DoGoodInstitute from './organizations/DoGoodInstitute/DoGoodInstitute';
import EquityCenter from './organizations/EquityCenter/EquityCenter';
import HealthProfessionsAdvisingOffice from './organizations/HealthProfessionsAdvisingOffice/HealthProfessionsAdvisingOffice';
import Hillel from './organizations/Hillel/Hillel';
import LCSL from './organizations/LCSL/LCSL';
import MarylandAthletics from './organizations/MarylandAthletics/MarylandAthletics';
import MarylandBands from './organizations/MarylandBands/MarylandBands';
import MICA from './organizations/MICA/MICA';
import RecWell from './organizations/RecWell/RecWell';
import SORC from './organizations/SORC/SORC';
import SUCCEEDSClinic from './organizations/SUCCEEDSClinic/SUCCEEDSClinic';
import TheDiamondback from './organizations/TheDiamondback/TheDiamondback';
import TransportationServices from './organizations/TransportationServices/TransportationServices';
import UMPD from './organizations/UMPD/UMPD';
import UniversityLibraries from './organizations/UniversityLibraries/UniversityLibraries';
import EducationAbroad from './organizations/EducationAbroad/EducationAbroad';
import MemorialChapel from './organizations/MemorialChapel/MemorialChapel';
import STAMP from './organizations/STAMP/STAMP';
import Chabad from './organizations/Chabad/Chabad';

function App() {

  return (
    <Router>
      <div className="App">
        <Nav />
        <Box px={8}>
        <Redirect exact from="/VirtualFair" to="/" />
        <Route path="/" exact component={Homepage} />
        <Route path="/about" component={About} />
        <Route path="/organizations/CatholicTerps" component={CatholicTerps} />
        <Route path="/organizations/Chabad" component={Chabad} />
        <Route path="/organizations/ChristianChaplaincies" component={ChristianChaplaincies} />
        <Route path="/organizations/CounselingCenter" component={CounselingCenter} />
        <Route path="/organizations/DoGoodInstitute" component={DoGoodInstitute} />
        <Route path="/organizations/EducationAbroad" component={EducationAbroad} />
        <Route path="/organizations/EquityCenter" component={EquityCenter} />
        <Route path="/organizations/HealthProfessionsAdvisingOffice" component={HealthProfessionsAdvisingOffice} />
        <Route path="/organizations/Hillel" component={Hillel} />
        <Route path="/organizations/LCSL" component={LCSL} />
        <Route path="/organizations/MarylandAthletics" component={MarylandAthletics} />
        <Route path="/organizations/MarylandBands" component={MarylandBands} />
        <Route path="/organizations/MemorialChapel" component={MemorialChapel} />
        <Route path="/organizations/MICA" component={MICA} />
        <Route path="/organizations/RecWell" component={RecWell} />
        <Route path="/organizations/SORC" component={SORC} />
        <Route path="/organizations/STAMP" component={STAMP} />
        <Route path="/organizations/SUCCEEDSClinic" component={SUCCEEDSClinic} />
        <Route path="/organizations/TheDiamondback" component={TheDiamondback} />
        <Route path="/organizations/TransportationServices" component={TransportationServices} />
        <Route path="/organizations/UMPD" component={UMPD} />
        <Route path="/organizations/UniversityLibraries" component={UniversityLibraries} />
        </Box>
      </div>
    </Router>
  );
}

export default App;
