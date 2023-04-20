import { Navbar, Welcome, Footer, Services, Transactions , ErrorBoundary,Home} from "./components";

const App = () => (
  <ErrorBoundary>
  <div className="min-h-screen">
    <div className="gradient-bg-welcome">
      {/* <Navbar /> */}
      <Home />
    </div>
    {/* <Services /> */}
    {/* <Transactions /> */}
    {/* <Footer /> */}
  </div>
  </ErrorBoundary>
);

export default App;