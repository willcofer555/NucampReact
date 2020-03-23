import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';




class CampsiteInfo extends Component {
  constructor(props) {
      super(props)
  }
    


  renderCampsite(campsite) {

    return(
        <div className="col-md-5 m-1">
            <Card>
                    <CardImg top src={campsite.image} alt={campsite.name} />
                    <CardBody>
                        <CardTitle>{campsite.name}</CardTitle>
                        <CardText>{campsite.description}</CardText>
                    </CardBody>
                </Card>
        </div>
    )
  }

  renderComments(comments) {
    if (comments) {
        return(
            <div className="col col-md-5 m-1">
                <h4>Comments</h4>
                <ul>
                {
                    comments.map((comment,key) => (
                        <li key={key.toString()}>
                            <p>{comment.text}</p>
                            <p>{comment.author}</p> <p>{comment.Date}</p>
                        </li>
                    ))
                }
                </ul>

            </div>
        )
    }
  }

render() {
    if (this.props.campsite) {
        return(
            <div className="container">
            <div className="row">
                {this.renderCampsite(this.props.campsite)}
                {this.renderComments(this.props.campsite.comments)}
            
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

}

export default CampsiteInfo;