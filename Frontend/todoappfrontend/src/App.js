import Home from './Components/HomeComp/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './pages/Root';
import ErrorElement from './pages/ErrorElement';
import RecycledTodo from './Components/MainToDoComp/RecycledToDoComp/RecycledTodo';
import TodoEdit from './Components/MainToDoComp/TodoEditComp/TodoEdit';
import EditTodoProvider from './Components/Context/EditToDoContext/EditTodo-Provider';
import AuthenticationSignup, { action as signUpAction } from './pages/AuthenticationSignup';
import AuthenticationLogin, { action as loginAction } from './pages/AuthenticationLogin';
import { tokenLoader } from './auth/token';
import AddToDoPage, { action as addToDoAction } from './pages/AddToDoPage';
import TextValidProvider from './Components/Context/TextValidationContext/TextValid-Provider';
import { loader as getToDoLoader } from './pages/ToDoContainerPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    id: 'root',
    loader: tokenLoader,
    errorElement: <ErrorElement />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/addToDo", element: <AddToDoPage />, action: addToDoAction, loader: getToDoLoader },
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
      <TextValidProvider>
        <EditTodoProvider>
          <RouterProvider router={router} />
        </EditTodoProvider>
      </TextValidProvider>
    </>
  );
}

export default App;