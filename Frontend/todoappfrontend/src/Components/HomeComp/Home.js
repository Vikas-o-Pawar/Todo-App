import React from 'react'
import mainHomeImg from '../../Images/Home/homeImage.jpg'
import classes from './Home.module.css'
import TodoBtn from '../TodoControlButtonComp/TodoBtn'
import { useState } from 'react'
import mainHomeMobileImg from '../../Images/Home/homeImageSmall.jpg'
import { useNavigate, useRouteLoaderData } from 'react-router-dom'

function Home() {
  const [currentWidthImage, setCurrentWidthImage] = useState(window.innerWidth);
  const navigate = useNavigate();
  const token = useRouteLoaderData("root");
  useState(() => {
    const handleResize = () => {
      setCurrentWidthImage(window.innerWidth)
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // changing the title
  document.title = "Home"

  const navigateHandler = () => {
    if (token === null) {
      navigate("/login")
    } else {

      navigate("/addToDo")
    }
  }

  const homeImg = currentWidthImage <= 575 ? mainHomeMobileImg : mainHomeImg
  return (
    <section className={classes.mainHomeSection}>

      <section className={classes.homeImageSection}>
        <img src={homeImg} className={classes.mainHomeImg} alt="" />
        <TodoBtn controlBtnName={"Add To-Do"} onClick={navigateHandler} dynamicToDoBtnClassName={classes.addTodoBtn} />
      </section>

      <h1 className={classes.todoMainHeading}>Add Your To-Dos Now!!</h1>
    </section>
  )
}

export default Home
