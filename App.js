import { Navigation } from "react-native-navigation";
import SplashScreen from "./src/Screens/SplashScreen/SplashScreen";
import Home from "./src/Screens/HomeScreen/Home";
import SideDrawer from "./src/Screens/SideDrawer/SideDrawer";
import Stages from "./src/Screens/Stages/Stages";

import { Provider } from "react-redux";
import store from "./src/Store/config";

//Register your screens
Navigation.registerComponent('builder.SplashScreen', () => SplashScreen, store, Provider);
Navigation.registerComponent('builder.Home', () => Home, store, Provider);
Navigation.registerComponent('builder.SideDrawer', () => SideDrawer, store, Provider);
Navigation.registerComponent('builder.Stages', () => Stages, store, Provider);

//Start your app
const App = Navigation.startSingleScreenApp({
  screen: {
    screen: "builder.SplashScreen",
    title: "Login",
    navigatorStyle: {
      navBarHidden: true,
      orientation: 'portrait'
    }
  }
});

export default App;