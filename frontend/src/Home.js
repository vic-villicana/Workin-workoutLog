import React from 'react'
import Link from 'react-router-dom'
import Display from './components/Display'
import Card from './components/Card'
import clean from './imgs/editclean.jpg'
import gear from './imgs/editgear.jpg'
import shawty from './imgs/editshawty.jpg'
import weight from './imgs/editweights.jpg'
import Bbar from './components/ButtonBar'
import MenuBtn from './components/MenuBtn' 

const appMenu = [
    {
        name:"My Workouts",
        href:"/myworkouts",
        img:clean
    },
    {
        name:"Create Workout",
        href:"/createworkout",
        img:weight
    },
    {
        name:"My Workout Log",
        href:"/log",
        img:gear
    },
    {
        name:"Exercises",
        href:"/exercises",
        img:shawty
    }
]

class Home extends React.Component{
    constructor(props){
        super(props)
        
        this.renderCards = this.renderCards.bind(this)
    }

    
    renderCards(){
        const cards = appMenu.map((card) => {
            return <Card name={card.name} img={card.img} href={card.href}/>
        })
        return cards
    }

    render(){
        return(
            <div className="main">
                <Display />
                <Bbar name="Random Workout" btn={<MenuBtn name="Let's Go" />} />
                <div className="card-grid">
                    {this.renderCards()}
                </div>
                
            </div>
        )
    }
}

export default Home