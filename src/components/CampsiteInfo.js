import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';


function RenderCampsite({campsite}) {
return(
<CardBody>
    <CardText>{campsite.description}</CardText>
</CardBody>
 )

};

function RenderComments({comments}) {
    return(
        <CardBody>
            <CardText>{comments.description}</CardText>
        </CardBody>
         )

  };


function CampsiteInfo(props){
  
    if (props.campsite) {
        return(
            <div className="container">
            <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/directory">Directory</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.campsite.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <h2>{props.campsite.name}</h2>
                        <hr />
                    </div>
                </div>
            
            <div className="row">
                <RenderCampsite campsite={props.campsite} />
                <RenderComments comments={props.comments} />
            </div>
            </div>
            )
    } else {
        return(
            <div>

            </div>
        )
    }
    


}

export default CampsiteInfo;