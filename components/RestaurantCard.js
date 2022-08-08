import React from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { urlFor } from "../sanity";

export const RestaurantCard = ({
	id,
	imgUrl,
	title,
	rating,
	genre,
	address,
	short_description,
	dishes,
	long,
	lat,
}) => {
	return (
		<TouchableOpacity className="bg-white mr-3 shadow rounded-lg">
			<Image
				source={{
					uri: urlFor(imgUrl).url(),
				}}
				className="h-36 w-64 rounded-lg"
			/>
			<View className="px-3 pb-4">
				<Text className="text-lg font-bold pt-2">{title}</Text>
				<View className="flex-row items-center space-x-1">
					<Feather name="star" size={22} color="#00CCBB" />
					<Text className="text-gray-500 text-xs">
						<Text className="text-green-500">{rating} </Text>. {genre}
					</Text>
				</View>
				<View className="flex-row items-center space-x-1">
					<Feather name="map-pin" size={22} color="#00CCBB" />
					<Text className="text-xs text-gray-500">Nearby . {address}</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
};

export default RestaurantCard;
