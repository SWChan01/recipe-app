import React from 'react';


const displayRecipe = ({title,ingredients,summary,instructions,image}) =>{
    return (
        <>
            <ul>
                <li>Title: {title}</li>
                <li>Ingredients:
                    <ul> 
                        {ingredients.map(element=> (
                            <>
                                <li> name: {element.name} </li>
                                <li> amount: {element.amount} {element.unit} </li>
                                
                            </>
                        
                        
                        
                        ))}
                    </ul>
                </li>
                <li>Summary: {summary}</li>
                <li>Instructions:
                <ol>
                    {
                        instructions.map(element => (element.steps.map(subElement=> <li> {subElement.step} </li> )))
                        //instructions[0].steps[0].step
                    }
                </ol>
                </li>
                <li>Image: <img src={image}/>  </li>
            
            </ul>



        </>
    )
}


export default displayRecipe;