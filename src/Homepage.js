import React from 'react';
import './App.css';
import { Grid, Typography, Divider } from '@material-ui/core';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import FrontpageCard from './components/FrontpageCard';
import CarouselItem from './components/CarouselItem';

function Homepage() {
  return (
    <div>
        <Grid container>
            <Grid item xs={"auto"} md={3} lg={4}/>
            <Grid item xs={12} md={6} lg={4} style={{margin: "auto"}}>
                <Carousel dynamicHeight={false} infiniteLoop autoPlay interval={5000} stopOnHover emulateTouch useKeyboardArrows showThumbs={false} width="100%">
                    <CarouselItem source={require("./organizations/ArmyROTC/CCPatch.jpg")} href="/organizations/armyrotc" caption="Army ROTC"/>
                    <CarouselItem source={require("./organizations/CatholicTerps/CatholicTerpsHeader.jpg")} href="/organizations/catholicterps" caption="Catholic Terps"/>
                    <CarouselItem source={require("./organizations/Chabad/GeneralInfo.jpeg")} href="/organizations/chabad" caption="Chabad"/>
                    <CarouselItem source={require("./organizations/ChristianChaplaincies/EpiscopalTerpsFlyer.png")} href="/organizations/christianchaplaincies" caption="Christian Chaplaincies"/>
                    <CarouselItem source={require('./organizations/CounselingCenter/CC.jpg')} href="/organizations/counselingcenter" caption="Counseling Center"/>
                    <CarouselItem source={require('./organizations/DoGoodInstitute/DoGood.jpg')} href="/organizations/dogoodinstitute" caption="Do Good Institute"/>
                    <CarouselItem source={require('./organizations/EducationAbroad/EdAbroad.png')} href="/organizations/educationabroad" caption="Education Abroad"/>
                    <CarouselItem source={require('./organizations/EquityCenter/EquityCenter.jpg')} href="/organizations/equitycenter" caption="Equity Center"/>
                    <CarouselItem source={require('./organizations/HealthProfessionsAdvisingOffice/HPAO.jpeg')} href="/organizations/healthprofessionsadvisingoffice" caption="Health Professions Advising Office"/>
                    <CarouselItem source={require("./organizations/Hillel/CoverPhoto.png")} href="/organizations/hillel" caption="Hillel"/>
                    <CarouselItem source={require("./organizations/LCSL/Orientation_summer_2020_LCSL_header.jpg")} href="/organizations/LCSL" caption="Leaderhip & Community Service-Learning"/>
                    <CarouselItem source={require('./organizations/MarylandAthletics/AthleticsLogo.png')} href="/organizations/MarylandAthletics" caption="Maryland Athletics"/>
                    <CarouselItem source={require("./organizations/MarylandBands/MSOM.jpg")} href="/organizations/MarylandBands" caption="Maryland Bands"/>
                    <CarouselItem source={require("./organizations/MemorialChapel/chapel.png")} href="/organizations/MemorialChapel" caption="Memorial Chapel"/>
                    <CarouselItem source={require("./organizations/MICA/Orientation_summer_2020_MICA_header.jpg")} href="/organizations/MICA" caption="MICA"/>
                    <CarouselItem source={require('./organizations/MuslimChaplaincy/MSA_Logo.png')} href="/organizations/MuslimChaplaincy" caption="Muslim Chaplaincy"/>
                    <CarouselItem source={require('./organizations/NyumburuCulturalCenter/Nyumburu1.png')} href="/organizations/NyumburuCulturalCenter" caption="Nyumburu Cultural Center"/>
                    <CarouselItem source={require("./organizations/RecWell/recwell.jpg")} href="/organizations/RecWell" caption="RecWell"/>
                    <CarouselItem source={require("./organizations/Signa/SIGNAcover.PNG")} href="/organizations/Signa" caption="SIGNA"/>
                    <CarouselItem source={require("./organizations/SORC/SORCPIC.jpg")} href="/organizations/SORC" caption="SORC"/>
                    <CarouselItem source={require("./organizations/STAMP/stamp.jpg")} href="/organizations/STAMP" caption="STAMP"/>
                    <CarouselItem source={require("./organizations/SUCCEEDSClinic/SUCCEEDSLOGO.jpg")} href="/organizations/SUCCEEDSClinic" caption="SUCCEEDS Clinic"/>
                    <CarouselItem source={require("./organizations/TheDiamondback/DBK.png")} href="/organizations/TheDiamondback" caption="The Diamondback"/>
                    <CarouselItem source={require("./organizations/TransportationServices/UMD_DOTS_Logo.jpg")} href="/organizations/TransportationServices" caption="Transportation Services"/>
                    <CarouselItem source={require("./organizations/UMPD/UMPD.jpg")} href="/organizations/UMPD" caption="UMPD"/>
                    <CarouselItem source={require("./organizations/UniversityLibraries/mckeldin.jpg")} href="/organizations/UniversityLibraries" caption="University Libraries"/>
                </Carousel>
            </Grid>
            <Grid item xs={"auto"} md={3} lg={4}/>
            <Typography gutterBottom variant="h5">
                Organizations
                <Divider/>
            </Typography>
            <Grid container item xs={12} spacing={2}>
                <FrontpageCard source={require('./organizations/ArmyROTC/CCPatch.jpg')} title="Army ROTC" href="/organizations/armyrotc" />
                <FrontpageCard source={require("./organizations/CatholicTerps/CatholicTerpsHeader.jpg")} title="Catholic Terps" href="/organizations/catholicterps" />
                <FrontpageCard source={require('./organizations/Chabad/GeneralInfo.jpeg')} title="Chabad" href="/organizations/chabad" />
                <FrontpageCard source={require('./organizations/ChristianChaplaincies/EpiscopalTerpsFlyer.png')} title="Christian Chaplaincies" href="/organizations/christianchaplaincies" />
                <FrontpageCard source={require('./organizations/CounselingCenter/CC.jpg')} title="Counseling Center" href="/organizations/counselingcenter" />
                <FrontpageCard source={require('./organizations/DoGoodInstitute/DoGood.jpg')} title="Do Good Institute" href="/organizations/dogoodinstitute" />
                <FrontpageCard source={require('./organizations/EducationAbroad/EdAbroad.png')} title="Education Abroad" href="/organizations/educationabroad" />
                <FrontpageCard source={require('./organizations/EquityCenter/EquityCenter.jpg')} title="Equity Center" href="/organizations/equitycenter" />
                <FrontpageCard source={require('./organizations/HealthProfessionsAdvisingOffice/HPAO.jpeg')} title="Health Professions Advising Office" href="/organizations/healthprofessionsadvisingoffice" />
                <FrontpageCard source={require('./organizations/Hillel/CoverPhoto.png')} title="Hillel" href="/organizations/hillel" />
                <FrontpageCard source={require('./organizations/LCSL/Orientation_summer_2020_LCSL_header.jpg')} title="Leadership & Community Service-Learning" href="/organizations/LCSL" />
                <FrontpageCard source={require('./organizations/MarylandAthletics/AthleticsLogo.png')} title="Maryland Athletics" href="/organizations/MarylandAthletics" />
                <FrontpageCard source={require('./organizations/MarylandBands/MSOM.jpg')} title="Maryland Bands" href="/organizations/MarylandBands" />
                <FrontpageCard source={require('./organizations/MemorialChapel/chapel.png')} title="Memorial Chapel" href="/organizations/MemorialChapel" />
                <FrontpageCard source={require('./organizations/MICA/Orientation_summer_2020_MICA_header.jpg')} title="MICA" href="/organizations/MICA" />
                <FrontpageCard source={require('./organizations/MuslimChaplaincy/MSA_Logo.png')} title="Muslim Chaplaincy" href="/organizations/MuslimChaplaincy" />
                <FrontpageCard source={require('./organizations/NyumburuCulturalCenter/Nyumburu1.png')} title="Nyumburu Cultural Center" href="/organizations/NyumburuCulturalCenter" />            
                <FrontpageCard source={require('./organizations/RecWell/recwell.jpg')} title="RecWell" href="/organizations/RecWell" />
                <FrontpageCard source={require('./organizations/Signa/SIGNAcover.PNG')} title="SIGNA" href="/organizations/Signa" />
                <FrontpageCard source={require('./organizations/SORC/SORCPIC.jpg')} title="SORC" href="/organizations/SORC" />
                <FrontpageCard source={require('./organizations/STAMP/stamp.jpg')} title="STAMP" href="/organizations/STAMP" />
                <FrontpageCard source={require('./organizations/SUCCEEDSClinic/SUCCEEDSLOGO.jpg')} title="SUCCEEDS Clinic" href="/organizations/SUCCEEDSClinic" />
                <FrontpageCard source={require('./organizations/TheDiamondback/DBK.png')} title="The Diamondback" href="/organizations/TheDiamondback" />
                <FrontpageCard source={require('./organizations/TransportationServices/UMD_DOTS_Logo.jpg')} title="Transportation Services" href="/organizations/TransportationServices" />
                <FrontpageCard source={require('./organizations/UMPD/UMPD.jpg')} title="UMPD" href="/organizations/UMPD" />
                <FrontpageCard source={require('./organizations/UniversityLibraries/mckeldin.jpg')} title="University Libraries" href="/organizations/UniversityLibraries" />
            </Grid>
        </Grid>
    </div>
  );
}

export default Homepage;
