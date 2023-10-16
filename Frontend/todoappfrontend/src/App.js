import Signup from './Components/LoginSignUpComponent/Signup';
import Home from './Components/HomeComp/Home';
import Login from './Components/LoginSignUpComponent/Login'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './pages/Root';
import ErrorElement from './pages/ErrorElement';
import AddToDo from './Components/MainToDoComp/TodoAddComp/AddToDo';
import RecycledTodo from './Components/MainToDoComp/RecycledToDoComp/RecycledTodo';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorElement />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/addToDo", element: <AddToDo /> },
      { path: "/recycledToDo", element: <RecycledTodo /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },
    ]
  },
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;