import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import { UserDataContext } from "./context/Context";
import useStore from "./context/store";

function Dashboard() {
  const { user, theme, setTheme, isAuthhorized, setIsAuthhorized } = useStore();

  const contextData = {
    user: user,
    theme: theme,
    setTheme,
    auth: isAuthhorized,
    setIsAuthhorized,
  };

  return (
    <UserDataContext.Provider value={contextData}>
      <div>
        <Navbar />
        <Main />
        <Footer />
      </div>
    </UserDataContext.Provider>
  );
}

export default Dashboard;
