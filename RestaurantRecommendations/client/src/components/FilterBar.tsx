import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Search } from "lucide-react";
import { FilterOptions } from "@/types";

interface FilterBarProps {
  filters: FilterOptions;
  onFilterChange: (filters: Partial<FilterOptions>) => void;
  restaurantTypes: string[];
}

export function FilterBar({ filters, onFilterChange, restaurantTypes }: FilterBarProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-8">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <Label htmlFor="search" className="text-sm font-medium mb-1">搜尋</Label>
          <div className="relative">
            <Input
              id="search"
              placeholder="搜尋餐廳名稱或類型..."
              value={filters.search}
              onChange={(e) => onFilterChange({ search: e.target.value })}
              className="pl-4 pr-10"
            />
            <Search className="h-5 w-5 absolute right-3 top-2.5 text-gray-400" />
          </div>
        </div>
        
        <div>
          <Label htmlFor="type" className="text-sm font-medium mb-1">餐廳類型</Label>
          <Select 
            value={filters.type} 
            onValueChange={(value) => onFilterChange({ type: value })}
          >
            <SelectTrigger id="type" className="w-[180px]">
              <SelectValue placeholder="全部類型" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">全部類型</SelectItem>
              {restaurantTypes.map((type) => (
                <SelectItem key={type} value={type}>{type}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <Label htmlFor="price" className="text-sm font-medium mb-1">價格區間</Label>
          <Select 
            value={filters.price} 
            onValueChange={(value) => onFilterChange({ price: value })}
          >
            <SelectTrigger id="price" className="w-[180px]">
              <SelectValue placeholder="全部價格" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">全部價格</SelectItem>
              <SelectItem value="0-1000">$1000以下</SelectItem>
              <SelectItem value="1000-1500">$1000-$1500</SelectItem>
              <SelectItem value="1500-2000">$1500-$2000</SelectItem>
              <SelectItem value="2000+">$2000以上</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <Label htmlFor="distance" className="text-sm font-medium mb-1">距離</Label>
          <Select 
            value={filters.distance} 
            onValueChange={(value) => onFilterChange({ distance: value })}
          >
            <SelectTrigger id="distance" className="w-[180px]">
              <SelectValue placeholder="全部距離" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">全部距離</SelectItem>
              <SelectItem value="0-30">30分鐘內</SelectItem>
              <SelectItem value="30-60">30-60分鐘</SelectItem>
              <SelectItem value="60+">60分鐘以上</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}

export default FilterBar;
