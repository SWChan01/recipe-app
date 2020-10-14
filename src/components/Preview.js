import React from 'react';
import {Card,Modal,Button} from 'react-bootstrap'
import './Preview.css'
import JSONres from '../res.js'
import {useState,useEffect} from 'react'



const Preview = ({title,image,summary,ingredients,instructions}) =>{
    const [show, setShow] = useState(false);
    const toggleModal = () => setShow(!show);


    
    function showHTML(body) {
        body=body.split(" ").slice(0,20).toString().replace(/,/g," ");
        body+="..."
        return (
         <div  dangerouslySetInnerHTML={{__html: body}} />
        )
    }

    function showFullHTML(body) {
        return (
            <div  dangerouslySetInnerHTML={{__html: body}} />
           )
    }




    return (
        <>
            <a href="#" onClick={toggleModal}>
                <Card className="card">
                        <Card.Img src={image} className="cardImg" />

                        <Card.Body>
                            <Card.Title className="previewTitle">{title}</Card.Title>
                            <Card.Text className="cardText">
                                {showHTML(summary)}
                            </Card.Text>
                        </Card.Body>
                </Card>
                <Modal           
                    show = {show} 
                    onHide ={toggleModal}
                >
                    <Modal.Header closeButton>
                        <Modal.Title className="modalTitle">{title}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <ul>
                            <li>Summary: {showFullHTML(summary)}</li>
                            <li>Ingredients:
                                <ul> 
                                    {ingredients.map(element=> (
                                        <>
                                            <li>{element.amount} {element.unit} {element.name} </li>
                                            
                                        </>              
                                    
                                    ))}
                                </ul>
                            </li>
                            <li>Instructions:
                            <ol>
                                {
                                    instructions.map(element => (element.steps.map(subElement=> <li> {subElement.step} </li> )))
                                }
                            </ol>
                            </li>
                            <li>Image: <img src={image}/>  </li>

                        </ul>

                    </Modal.Body>


                    <Modal.Footer>
                        <Button variant="secondary" onClick={toggleModal}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>




            </a>


        </>
    )
}


export default Preview;