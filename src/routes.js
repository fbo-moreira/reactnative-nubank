import { createAppContainer, createSwitchNavigator } from "react-navigation";

import Main from "./pages/Main";


const Routes = createAppContainer(
    createSwitchNavigator({
        Home: Main,
    },
    {
        initialRouteName: 'Home',
      })
);

export default Routes;