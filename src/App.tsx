import { BrowserRouter, Route, Switch } from "react-router-dom"
import { AuthContextProvider } from "./context/AuthContext";
import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";

export function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/rooms/new" component={NewRoom} />
          <NewRoom />
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  )
}