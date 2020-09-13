import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps101014Navigator from '../features/Maps101014/navigator';
import Add-Item101013Navigator from '../features/Add-Item101013/navigator';
import Maps101009Navigator from '../features/Maps101009/navigator';
import UserProfile101005Navigator from '../features/UserProfile101005/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps101014: { screen: Maps101014Navigator },
Add-Item101013: { screen: Add-Item101013Navigator },
Maps101009: { screen: Maps101009Navigator },
UserProfile101005: { screen: UserProfile101005Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
