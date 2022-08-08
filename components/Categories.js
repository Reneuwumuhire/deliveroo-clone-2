import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import sanityClient, { urlFor } from "../sanity";

export const Categories = () => {
	const [categories, setCategories] = useState([]);
	useEffect(() => {
		sanityClient
			.fetch(
				`
			*[_type == "category"] `,
			)
			.then((data) => {
				setCategories(data);
			});
	}),
		[];
	return (
		<ScrollView
			contentContainerStyle={{
				paddingHorizontal: 15,
				paddingBTop: 10,
			}}
			showsHorizontalScrollIndicator={false}
			horizontal>
			{categories.map((category) => {
				return (
					<CategoryCard
						key={category._id}
						title={category.name}
						imgUrl={urlFor(category.image).width(200).url()}
					/>
				);
			})}
		</ScrollView>
	);
};

export default Categories;
