import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Exercise from '../Exercise/Exercise';
import Header from '../Header/Header';
import User from '../User/User';
import './Akatsuki.css'

const Akatsuki = () => {
    const [exercises, setExercises] = useState([]);

    useEffect(() => {
        fetch("exerciseData.json")
            .then(res => res.json())
            .then(data => setExercises(data))
    }, [])

    console.log(exercises)

    return (
        <div className='akatsuki'>
            <div className='header-and-exercises'>
                <Header></Header>
                <div className='exercise-container'>
                    {
                        exercises.map(exercise => <Exercise
                            key={exercise.id}
                            name={exercise.name}
                            img = {exercise.img}
                            time={exercise.time}
                            description={exercise.description}

                        ></Exercise>)
                    }
                </div>
            </div>
            <div>
                <User></User>
            </div>
        </div>
    );
};

export default Akatsuki;