import React from 'react';
import {Card} from 'react-bootstrap'
import './Preview.css'

const Preview = ({title,image,summary}) =>{

    
    function showHTML(body) {
        body=body.split(" ").slice(0,20).toString().replace(/,/g," ");
        body+="..."
        return (
         <div  dangerouslySetInnerHTML={{__html: body}} />
        )
      }




    return (
        <>
            <a href="#">
                <Card className="card">
                        <Card.Img src={image} className="cardImg" />

                        <Card.Body>
                            <Card.Title className="previewTitle">{title}</Card.Title>
                            <Card.Text className="cardText">
                                {showHTML(summary)}
                            </Card.Text>
                        </Card.Body>
                </Card>
            </a>


        </>
    )
}


export default Preview;