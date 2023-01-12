import React from 'react'
import './Tesla.css'
import Header from './Header'
import Section from './Section'
function Tesla() {
    return (
        <>
           <Header />

            <Section heading = "Model Y"
            text = "Schedule a Demo Drive"
            leftbtn = "Cutom Order"
            rightbtn= "View Inventory"
            backgroundImage="model-y.jpg"
            on = {true} />
            
            <Section heading = "Model 3"
            text = "Schedule a Demo Drive"
            leftbtn = "Cutom Order"
            rightbtn= "View Inventory"
            backgroundImage="model-3.jpg"/>
            
            <Section heading = "Model S"
            text = "Schedule a Demo Drive"
            leftbtn = "Cutom Order"
            rightbtn= "View Inventory"
            backgroundImage="model-s.jpg" />
            
            <Section heading = "Model X"
            text = "Schedule a Demo Drive"
            leftbtn = "Cutom Order"
            rightbtn= "View Inventory" 
            backgroundImage="model-x.jpg"/>
            
            <Section heading = "Solar Panel"
            text = "Lowest Cost Solar Panels in America"
            leftbtn = "Order Now"
            rightbtn= "Lear More"
            backgroundImage="solar-panel.jpg" />
            
            <Section heading = "Solar Roof"
            text = "Produce Clean Energy From Your Roof"
            leftbtn = "Order Now "
            rightbtn= "lear More"
            backgroundImage="solar-roof.jpg" />
            
            <Section heading = "Accessories"
            leftbtn = "Shop Now"
            backgroundImage="accessories.jpg"
             />
            
        </>

    );
}

export default Tesla