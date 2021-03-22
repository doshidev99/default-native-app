### example


```
 <View style={{ flex: 1 }}>
	<Carousel
		loop
		ref={isCarousel}
		data={data}
		renderItem={CarouselCardItem}
		sliderWidth={widthScreen}
		itemWidth={widthScreen}
		inactiveSlideShift={0}
		onSnapToItem={(index) => setCurrentActive(() => index)}

	/>
	<Pagination
		dotsLength={data.length}
		activeDotIndex={currentActive}
		carouselRef={isCarousel}
		containerStyle={{
			position: 'absolute',
			bottom: '-10%',
			left: '50%',
			transform: [
				{ translateX: '-50%' },
			],
		}}
		dotStyle={{
			width: 6,
			height: 6,
			borderRadius: 5,
			backgroundColor: '#FF1515',
		}}
		inactiveDotStyle={{
			// Define styles for inactive dots here
		}}
		inactiveDotOpacity={0.4}
		inactiveDotScale={0.6}
	/>
</View>
```