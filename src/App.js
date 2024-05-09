import {BrowserRouter} from "react-router-dom";
import {AdminRouter, WebRouter} from "./router";
import { AuthProvider } from "./contexts";


function App() {
  return (
    <AuthProvider>
   <BrowserRouter>
   <AdminRouter/>
   <WebRouter/>
   </BrowserRouter>
   </AuthProvider>


  );
}

export default App;
