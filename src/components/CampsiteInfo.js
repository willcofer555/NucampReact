import React, { Component } from 'react';
import {  CardBody, CardText, Button, Modal,
     ModalHeader, ModalBody, Row, Breadcrumb, BreadcrumbItem,  Label, Col, FormFeedback } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';


const required = val => val && val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);


class CommentForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
            isModalOpen: false
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    
    handleSubmit(values) {
        this.toggleModal();
        alert('Current state is: ' + JSON.stringify(values));
        this.props.addComment(this.props.campsiteId, values.rating, values.author, values.text);
    }

    
  /*  handleSubmit(values) {
        console.log('current state is: ' + JSON.stringify(values));
        alert('Current state is: ' + JSON.stringify(values));
        
    } */


    render() {
        return(
            <React.Fragment>
            <Button className="my-4" onClick={this.toggleModal}>Submit Comment</Button>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                    <LocalForm onSubmit={values => this.handleSubmit(values)}>
                    <Row className="form-group">
                                <Label htmlFor="rating" md={2}>Rating</Label>
                                <Col md={10}>
                                    <Control.select 
                                        model=".rating"
                                        className="form-control"
                                        id="rating" name="rating"
                                        placeholder="Rating"
                                                   
                                        >
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        
                                            </Control.select>
                                        

                            </Col>  
                            </Row> 
                            <Row className="form-group">
                                <Label htmlFor="author" md={2}>Author</Label>
                                <Col md={10}>
                                    <Control.text 
                                        model=".author"
                                        className="form-control"
                                        id="author" name="author"
                                        placeholder="Author"
                                        validators={{
                                            required,
                                            minLength: minLength(2),
                                            maxLength: maxLength(15)
                                        }}       
                                        />
                                        <Errors
                                        className="text-danger"
                                        model=".author"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required,
                                            minLength: 'Must be at least 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />
                                            
                                        

                            </Col>  
                            </Row>   

                            <Row className="form-group" row>
                                <Label htmlFor="comment" md={2}>Comment</Label>
                                <Col md={10}>
                                    <Control.textarea 
                                        model=".comment"
                                        className="form-control"
                                        id="comment" name="comment"
                                        placeholder="Comment"
                                        rows="6"                     
                                        >
                                            </Control.textarea>
                                        

                            </Col>  
                            </Row > 
                            <Button type="submit" value="submit" color="primary">Submit Comment</Button>
   
                            </LocalForm>
                    </ModalBody>
                                 </Modal>
                </React.Fragment>
        )
    }
}




function RenderCampsite({campsite}) {
return(
<CardBody>
    <CardText>{campsite.description}</CardText>
</CardBody>
 )

};

function RenderComments({comments, addComment, campsiteId}) {
    if (comments) {

        return (

            <div className="col-md-5 m-1">

                <h4>Comments</h4>

                {comments.map(comment => {

                    return (

                        <div key={comment.id}>

                            <p>{comment.text}<br />

                                -- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}

                            </p>

                        </div>

                    );

                })}
                <CommentForm campsiteId={campsiteId} addComment={addComment}/>
            </div>

        );

    }

    return <div />;

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
                <RenderComments comments={props.comments} addComment={props.addComment} campsiteId={props.campsite.id} />
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