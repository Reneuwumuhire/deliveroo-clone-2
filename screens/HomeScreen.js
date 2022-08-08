import React, { useEffect, useLayoutEffect, useState } from "react";
import { Entypo, Feather } from "@expo/vector-icons";
import {
	View,
	Text,
	SafeAreaView,
	Image,
	TextInput,
	ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import sanityClient from "../sanity";

export const HomeScreen = () => {
	const navigation = useNavigation();
	const [featuredCategories, setFeaturedCategories] = useState([]);

	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "featured"]{
				...,
				restaurants[]->{
					...,
					dishes[]->,
					type-> {
						name
					}
				}
			}`,
			)
			.then((data) => {
				setFeaturedCategories(data);
			});
	}),
		[featuredCategories];
	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: false,
		});
	});
	return (
		<SafeAreaView className="bg-white pt-5">
			<View className="flex-row pb-3 items-center mx-4 space-x-2">
				<Image
					source={{
						uri: "https://links.papareact.com/wru",
					}}
					className="h-7 w-7 bg-gray-300 p04 rounded-full"
				/>
				<View className="flex-1">
					<Text className="font-bold text-gray-400 text-xs">Deliver now</Text>
					<Text className="font-bold text-xl">
						Current location
						<Entypo name="chevron-small-down" size={20} color="#00CCBB" />
					</Text>
				</View>
				<Entypo name="user" size={35} color="#00CCBB" />
			</View>
			{/* Search */}
			<View className="flex-row items-center space-x-2 pb-2 mx-4">
				<View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
					<Feather name="search" size={20} color="gray" />
					<TextInput
						placeholder="Restaurant and Cuisine"
						keyboardType="default"
					/>
				</View>
				<Feather name="sliders" size={24} color="#00CCBB" />
			</View>
			{/* Body */}
			<ScrollView
				className="bg-gray-100"
				contentContainerStyle={{
					paddingBottom: 100,
				}}>
				{/* Category */}
				<Categories />
				{featuredCategories.map((featured) => (
					<FeaturedRow
						key={featured._id}
						id={featured._id}
						title={featured.name}
						description={featured.short_description}
					/>
				))}
			</ScrollView>
		</SafeAreaView>
	);
};

export default HomeScreen;
