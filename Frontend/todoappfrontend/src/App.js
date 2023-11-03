import Home from './Components/HomeComp/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './pages/Root';
import ErrorElement from './pages/ErrorElement';
import AuthenticationSignup, { action as signUpAction } from './pages/AuthenticationSignup';
import AuthenticationLogin, { action as loginAction } from './pages/AuthenticationLogin';
import { tokenLoader } from './auth/token';
import AddToDoPage, { action as addToDoAction } from './pages/AddToDoPage';
import TextValidProvider from './Components/Context/TextValidationContext/TextValid-Provider';
import { loader as getToDoLoader } from './pages/ToDoContainerPage'
import RecycledTodoPage, { loader as recycledTodoLoader, action as recycledTodoAction } from './pages/RecycledTodoPage';
import TodoEditPage, { action as editToDoAction } from './pages/TodoEditPage';

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
      { path: "/recycledToDo", element: <RecycledTodoPage />, loader: recycledTodoLoader, action: recycledTodoAction },
      { path: "/login", element: <AuthenticationLogin />, action: loginAction },
      { path: "/signup", element: <AuthenticationSignup />, action: signUpAction, id: "signUpRoute" },
      { path: "/editToDo/:todoId", element: <TodoEditPage />, action: editToDoAction }
    ]
  },
])

function App() {
  return (
    <>
      <TextValidProvider>
          <RouterProvider router={router} />
      </TextValidProvider>
    </>
  );
}

export default App;