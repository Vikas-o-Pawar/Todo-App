import React from 'react'
import Navbar from '../Navbar/Navbar'
import mainHomeImg from '../../Images/homeImage.jpg'
import classes from './Home.module.css'
import TodoBtn from '../TodoControlButtonComp/TodoBtn'


function Home() {
  return (
    <section className={classes.mainHomeSection}>
      <Navbar />
      <section className={classes.homeImageSection}>
        <img src={mainHomeImg} className={classes.mainHomeImg} alt="couldn't load image" />
        <TodoBtn controlBtnName={"Add To-Do"} dynamicToDoBtnClassName={classes.addTodoBtn} />
      </section>

      <h1 className={classes.todoMainHeading}>Add Your To-Dos Now!!</h1>
    </section>
  )
}

export default Home
