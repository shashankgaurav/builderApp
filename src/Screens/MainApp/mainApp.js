import { Navigation } from "react-native-navigation";
import FontAwesome, { Icons } from "react-native-fontawesome";

const startMainApp = () => {
    Navigation.startTabBasedApp({
        tabs: [
            {
                label: 'Stages',
                screen: 'builder.Stages',
                icon: require('../../Assets/calendar.png'),
                title: "Stages",
                navigatorStyle: {
                    navBarHidden: true,
                    orientation: 'portrait'
                  },
                navigatorButtons: {
                    leftButtons: [
                        {
                            icon: require("../../Assets/menu.png"),
                            title: "menu",
                            id: "sideDrawer" 
                        }
                    ],
                }

            },

            {
                label: 'Defects',
                screen: 'builder.Home',
                icon: require('../../Assets/calendar.png'),
                title: "Defects",
                navigatorButtons: {
                    leftButtons: [
                        {
                            icon: require("../../Assets/menu.png"),
                            title: "menu",
                            id: "sideDrawer" 
                        }
                    ],
                }
            },

            {
                label: 'Inspections',
                screen: 'builder.Home',
                icon: require('../../Assets/calendar.png'),
                title: "Inspections",
                navigatorButtons: {
                    leftButtons: [
                        {
                            icon: require("../../Assets/menu.png"),
                            title: "menu",
                            id: "sideDrawer" 
                        }
                    ],
                }
            },

            {
                label: 'Issues',
                screen: 'builder.Home',
                icon: require('../../Assets/calendar.png'),
                title: "Issues",
                navigatorButtons: {
                    leftButtons: [
                        {
                            icon: require("../../Assets/menu.png"),
                            title: "menu",
                            id: "sideDrawer" 
                        }
                    ],
                }
            },

            {
                label: 'Files',
                screen: 'builder.Home',
                icon: require('../../Assets/calendar.png'),
                title: "Files",
                navigatorButtons: {
                    leftButtons: [
                        {
                            icon: require("../../Assets/menu.png"),
                            title: "menu",
                            id: "sideDrawer" 
                        }
                    ],
                }
            }
        ],

        tabsStyle: {
          },

        appStyle: {
            tabBarButtonColor: '#22334F', // optional, change the color of the tab icons and text (also unselected). On Android, add this to appStyle
            tabBarSelectedButtonColor: '#FEFEFE', // optional, change the color of the selected tab icon and text (only selected). On Android, add this to appStyle
            tabBarBackgroundColor: '#bbb', // optional, change the background color of the tab bar
            tabBarSelectedBackgroundColor: "#fff",
            initialTabIndex: 0,
            forceTitlesDisplay: true,
            activeTintColor: "#000",            
        },

        drawer: {
            left: {
                screen: "builder.SideDrawer"
            }            
        },

        animationType: "none"
    });
};

export default startMainApp;
