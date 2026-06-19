import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";
import { ToastContainer } from "react-toastify";
import BackToTop from "./components/BackToTop";
function App() {
 return (
   <>
     <Navbar />
<main>
       <AppRoutes />
     </main>
      <ToastContainer
        position="top-right"
        autoClose={2000}
      />
      <BackToTop />
   </>
 );
}

export default App;