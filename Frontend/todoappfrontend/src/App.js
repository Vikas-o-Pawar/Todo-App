import Signup from './Components/LoginSignUpComponent/Signup';
import Home from './Components/HomeComp/Home';
import Login from './Components/LoginSignUpComponent/Login'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './pages/Root';
import ErrorElement from './pages/ErrorElement';
import AddToDo from './Components/MainToDoComp/TodoAddComp/AddToDo';
import RecycledTodo from './Components/MainToDoComp/RecycledToDoComp/RecycledTodo';
import TodoEdit from './Components/MainToDoComp/TodoEditComp/TodoEdit';
import EditTodoProvider from './Components/Context/EditToDoContext/EditTodo-Provider';

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
      { path: "/editToDo", element: <TodoEdit /> }
    ]
  },
])

function App() {
  return (
    <>
      <EditTodoProvider>
        <RouterProvider router={router} />
      </EditTodoProvider>
    </>
  );
}

export default App;