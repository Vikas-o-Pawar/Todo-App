import Home from './Components/HomeComp/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './pages/Root';
import ErrorElement from './pages/ErrorElement';
import AddToDo from './Components/MainToDoComp/TodoAddComp/AddToDo';
import RecycledTodo from './Components/MainToDoComp/RecycledToDoComp/RecycledTodo';
import TodoEdit from './Components/MainToDoComp/TodoEditComp/TodoEdit';
import EditTodoProvider from './Components/Context/EditToDoContext/EditTodo-Provider';
import AuthenticationSignup, { action as signUpAction } from './pages/AuthenticationSignup';
import AuthenticationLogin, { action as loginAction } from './pages/AuthenticationLogin';
import { tokenLoader } from './auth/token';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    id: 'root',
    loader: tokenLoader,
    errorElement: <ErrorElement />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/addToDo", element: <AddToDo /> },
      { path: "/recycledToDo", element: <RecycledTodo /> },
      { path: "/login", element: <AuthenticationLogin />, action: loginAction },
      { path: "/signup", element: <AuthenticationSignup />, action: signUpAction, id: "signUpRoute" },
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