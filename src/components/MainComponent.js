import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Directory from './DirectoryComponents';
import CampsiteInfo from './CampsiteInfo';
import { CAMPSITES } from './shared/campsites';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect } from 'react-router';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import { About } from './AboutComponent';
import { COMMENTS } from '../shared/comments';
import { PARTNERS } from '../shared/partners';
import { PROMOTIONS } from '../shared/promotions';




class Main extends Component {


    constructor(props) {
        super(props);
        this.state = {
            campsites: CAMPSITES,
            comments: COMMENTS,
            partners: PARTNERS,
            promotions: PROMOTIONS


        };
    }
    
    
    

    render() {

        const AboutComponent = () => {
            return (
                <About partners={this.state.partners}/>

                
            );
        }

        const HomePage = () => {
            return (
                <Home 
                campsite={this.state.campsites.filter(campsite => campsite.featured)[0]}
                promotion={this.state.promotions.filter(promotion => promotion.featured)[0]}
                partner={this.state.partners.filter(partner => partner.featured)[0]}
                />
                   
            );
        }

        const CampsiteWithId = ({match}) => {
            return (
                <CampsiteInfo 
                    campsite={this.state.campsites.filter(campsite => campsite.id === +match.params.campsiteId)[0]}
                    comments={this.state.comments.filter(comment => comment.campsiteId === +match.params.campsiteId)}
                />
            );
        };    
    
        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage}/>
                    <Route path='/directory/:campsiteId' component={CampsiteWithId} />
                    <Route exact path='/aboutus' component={AboutComponent} />
                    <Route exact path='/contactus' component={Contact} />
                    <Redirect to='/home' />
                </Switch>
                
            </div>
        );
    };
}

export default Main;