import React from 'react'
import butonImg from '../images/add.png'
import { Link } from 'react-router-dom'

const AddButton = () => (
    <Link to="exercise/new">
        <img src={butonImg} className="Fitness-Add" />
    </Link>
)


export default AddButton