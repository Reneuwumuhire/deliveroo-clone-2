import { Feather } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import sanityClient from "../sanity";
import RestaurantCard from "./RestaurantCard";

const FeaturedRow = ({ id, title, description }) => {
	const [restaurants, setRestaurants] = useState([]);
	useEffect(() => {
		sanityClient
			.fetch(
				`
			*[_type == "featured" && _id == $id] {
				...,
				restaurants[]->{
					...,
					dishes[]->,
					type-> {
						name
					}
				},
			}[0]
		`,
				{ id },
			)
			.then((data) => {
				setRestaurants(data?.restaurants);
			});
	}),
		[id];

	return (
		<View>
			<View className="mt-4 flex-row items-center justify-between px-4">
				<Text className="text-lg font-bold">{title}</Text>
				<Feather name="arrow-right" size={24} color="#00CCBB" />
			</View>
			<Text className="text-xs text-gray-500 px-4">{description}</Text>
			<ScrollView
				horizontal
				contentContainerStyle={{
					paddingHorizontal: 15,
				}}
				showsHorizontalScrollIndicator={false}
				className="pt-4">
				{/* Restaurant card */}
				{restaurants.map((restaurant) => (
					<RestaurantCard
						key={restaurant._id}
						id={restaurant._id}
						title={restaurant.name}
						short_description={restaurant.short_description}
						imgUrl={restaurant.image}
						rating={restaurant.rating}
						genre={restaurant.type.name}
						address={restaurant.address}
						long={restaurant.long}
						lat={restaurant.lat}
						dishes="Pizza, Pasta, Salad"
					/>
				))}
			</ScrollView>
		</View>
	);
};

export default FeaturedRow;
