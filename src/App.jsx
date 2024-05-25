import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import ChatPage from "./pages/ChatPage";
import ProfilePage from "./pages/ProfilePage";
import FeedPage from "./pages/FeedPage";
import LoginPage from "./pages/login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/feed",
    element: <FeedPage />,
  },
  {
    path: "/chat",
    element: <ChatPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
