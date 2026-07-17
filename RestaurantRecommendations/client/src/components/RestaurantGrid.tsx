import { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import RestaurantCard from "@/components/RestaurantCard";
import { Restaurant, FilterOptions } from "@/types";
import { getPriceValue } from "@/lib/utils";

interface RestaurantGridProps {
  filters: FilterOptions;
}

export function RestaurantGrid({ filters }: RestaurantGridProps) {
  const { data: restaurants = [], isLoading } = useQuery<Restaurant[]>({
    queryKey: ['/api/restaurants'],
  });

  const [filteredRestaurants, setFilteredRestaurants] = useState<Restaurant[]>([]);

  useEffect(() => {
    let results = [...restaurants];

    // Apply search filter
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      results = results.filter(
        (restaurant) =>
          restaurant.name.toLowerCase().includes(searchTerm) ||
          restaurant.type.toLowerCase().includes(searchTerm) ||
          restaurant.address.toLowerCase().includes(searchTerm)
      );
    }

    // Apply type filter
    if (filters.type) {
      results = results.filter((restaurant) => restaurant.type === filters.type);
    }

    // Apply price filter
    if (filters.price) {
      results = results.filter((restaurant) => {
        // Extract the numeric value from the price string
        const priceValue = getPriceValue(restaurant.price);
        if (!priceValue) return true;

        switch (filters.price) {
          case "0-1000":
            return priceValue <= 1000;
          case "1000-1500":
            return priceValue > 1000 && priceValue <= 1500;
          case "1500-2000":
            return priceValue > 1500 && priceValue <= 2000;
          case "2000+":
            return priceValue > 2000;
          default:
            return true;
        }
      });
    }

    // Apply distance filter
    if (filters.distance) {
      results = results.filter((restaurant) => {
        // Extract the numeric value from the distance string
        const distanceMatch = restaurant.distance.match(/(\d+)/);
        if (!distanceMatch) return true;
        
        const distance = parseInt(distanceMatch[0], 10);
        
        switch (filters.distance) {
          case "0-30":
            return distance <= 30;
          case "30-60":
            return distance > 30 && distance <= 60;
          case "60+":
            return distance > 60;
          default:
            return true;
        }
      });
    }

    setFilteredRestaurants(results);
  }, [restaurants, filters]);

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md h-96 animate-pulse">
            <div className="h-48 bg-gray-200"></div>
            <div className="p-4 space-y-4">
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="space-y-2">
                <div className="h-3 bg-gray-200 rounded"></div>
                <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                <div className="h-3 bg-gray-200 rounded w-4/6"></div>
              </div>
              <div className="h-10 bg-gray-200 rounded"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (filteredRestaurants.length === 0) {
    return (
      <div className="text-center py-16">
        <h3 className="text-xl font-bold mb-2">沒有符合條件的餐廳</h3>
        <p className="text-gray-500">請嘗試調整搜尋條件或新增餐廳</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredRestaurants.map((restaurant) => (
        <RestaurantCard key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
}

export default RestaurantGrid;
