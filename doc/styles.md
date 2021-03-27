# Components
	- TouchableNativeFeedback : don't run on ios

## underlayColor : when click and fade out


## Center item in view 

 - Default : 
  + alignItems: 'center' : horizontal
  + Collection : 
    flex: 1, 
    justifyContent: 'center'
    + default: flex column : vertical

```
 <View style={[{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }]}
    >

      <AppImage
        containerStyles={{
          width: 36,
          height: 36,
        }}
        uri={require('../../assets/images/ic-plus-normal.png')}
      />

    </View>
```
