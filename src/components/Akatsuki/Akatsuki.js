import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Blog from '../Blog/Blog';
import Exercise from '../Exercise/Exercise';
import Header from '../Header/Header';
import User from '../User/User';
import './Akatsuki.css'

const Akatsuki = () => {
    const [exercises, setExercises] = useState([]);
    const [exerciseTime, setExerciseTime] = useState([]);

    useEffect(() => {
        fetch("exerciseData.json")
            .then(res => res.json())
            .then(data => setExercises(data))
    }, [])

    // console.log(exercises)

    const handleExercise = (exercise) => {
        // console.log(exercise);
        let exerciseTimeArray = [];
        exerciseTimeArray = [...exerciseTime, exercise];
        setExerciseTime(exerciseTimeArray);
    }

    return (
        <div>
            <div className='akatsuki'>
                <div className='header-and-exercises'>
                    <Header></Header>
                    <div className='exercise-container'>
                        {
                            exercises.map(exercise => <Exercise
                                key={exercise.id}
                                exercise={exercise}
                                handleExercise={handleExercise}

                            ></Exercise>)
                        }
                    </div>
                    <Blog></Blog>
                </div>
                <div className='user'>
                    <User exerciseTime={exerciseTime}></User>
                </div>
            </div>
        </div>
    );
};

export default Akatsuki;