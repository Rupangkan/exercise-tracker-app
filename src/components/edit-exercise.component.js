import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class EditExercise extends Component {
    constructor(props){
        super(props)

        this.deleteExercise = this.deleteExercise.bind(this)
        
        this.state = {exercises : []}
    }

    componentDidMount(){
       axios.get("http://localhost/exercises")
       .then(res => {
           this.setState(
               {
                   exercises : res.data
               }
           )
       })
       .catch(err => { 
           console.log(err)
       }) 
    }

    deleteExercise(id){
        axios.delete("http://localhost/exercises/" + id)
        .then(res => console.log(res.data))

        this.state({
            exercises : this.state.exercises.filter(exer => exer._id != id)
        })
    }

    render() {
        return (
            <div>
                <p>You are on Edit Exercise Component</p>
            </div>
        )
    }
}