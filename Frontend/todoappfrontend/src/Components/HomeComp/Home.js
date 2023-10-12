import React from 'react'
import Navbar from '../Navbar/Navbar'
import mainHomeImg from '../../Images/homeImage.jpg'
import classes from './Home.module.css'
import TodoBtn from '../TodoControlButtonComp/TodoBtn'
import { useState } from 'react'
import mainHomeMobileImg from '../../Images/homeImageSmall.jpg'

function Home() {
  const [currentWidthImage, setCurrentWidthImage] = useState(window.innerWidth);

  useState(() => {
    const handleResize = () => {
      setCurrentWidthImage(window.innerWidth)
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  } , []);

  const homeImg = currentWidthImage <= 575 ? mainHomeMobileImg : mainHomeImg
  return (
    <section className={classes.mainHomeSection}>
      <Navbar />
      <section className={classes.homeImageSection}>
        <img src={homeImg} className={classes.mainHomeImg} alt="" />
        <TodoBtn controlBtnName={"Add To-Do"} dynamicToDoBtnClassName={classes.addTodoBtn} />
      </section>

      <h1 className={classes.todoMainHeading}>Add Your To-Dos Now!!</h1>
    </section>
  )
}

export default Home
