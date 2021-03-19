### Moving between screen
  - use props navigation
  - Navigate to a route multiple times#
    example: navigation.navigate('name-screen') 
  - Going back#
    example: navigation.goBack()

### Passing parameters to routes
  - passing parameters: 

  ```
    navigation.navigate('Details', {
      itemId: 86,
      otherParam: 'anything you want here',
    });
          
  ```

  - Updating params#
  example:
  ```
    navigation.setParams({
      query: 'someText',
    })
  ```

### Initial params#
  ```
    <Stack.Screen
      name="Details"
      component={DetailsScreen}
      initialParams={{ itemId: 42 }}
    />
  ```

### Passing params to a previous screen#


### Updating options with setOptions#

### Passing params to nested navigators#


### Sharing common options across screens#
  - customer UI Stack.Navigator


### setOptions
  - headerShown: show navigator


### useNavigation


### Tab view
   - TabView 
    - tabBarPosition
    - navigationState = {{ index, routes }}
    - renderScence
    - renderTabBar 
        -> TabBar
          - indicatorStyle : border active
          - style : background
          - renderIcon : ({ route }) => {}
