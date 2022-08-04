import { Feather } from "@expo/vector-icons";
import React from "react";
import { View, Text, ScrollView } from "react-native";
import RestaurantCard from "./RestaurantCard";

const FeaturedRow = ({ id, title, description }) => {
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
				<RestaurantCard
					id="343"
					imgUrl="https://links.papareact.com/gn7"
					title="testing"
					rating={4.0}
					genre="Italian"
					address="123 Main St"
					short_description="This is a short description"
					dishes="Pizza, Pasta, Salad"
					long={-122.43}
					lat={37.788}
				/>
				<RestaurantCard
					id="343"
					imgUrl="https://links.papareact.com/gn7"
					title="testing"
					rating={4}
					genre="Italian"
					address="123 Main St"
					short_description="This is a short description"
					dishes="Pizza, Pasta, Salad"
					long={-122.43}
					lat={37.788}
				/>
				<RestaurantCard
					id="343"
					imgUrl="https://links.papareact.com/gn7"
					title="testing"
					rating={4}
					genre="Italian"
					address="123 Main St"
					short_description="This is a short description"
					dishes="Pizza, Pasta, Salad"
					long={-122.43}
					lat={37.788}
				/>
				<RestaurantCard
					id="343"
					imgUrl="https://links.papareact.com/gn7"
					title="testing"
					rating={4}
					genre="Italian"
					address="123 Main St"
					short_description="This is a short description"
					dishes="Pizza, Pasta, Salad"
					long={-122.43}
					lat={37.788}
				/>
				<RestaurantCard
					id="343"
					imgUrl="https://links.papareact.com/gn7"
					title="testing"
					rating={4}
					genre="Italian"
					address="123 Main St"
					short_description="This is a short description"
					dishes="Pizza, Pasta, Salad"
					long={-122.43}
					lat={37.788}
				/>
				<RestaurantCard
					id="343"
					imgUrl="https://links.papareact.com/gn7"
					title="testing"
					rating={4}
					genre="Italian"
					address="123 Main St"
					short_description="This is a short description"
					dishes="Pizza, Pasta, Salad"
					long={-122.43}
					lat={37.788}
				/>
			</ScrollView>
		</View>
	);
};

export default FeaturedRow;
