import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { X, Utensils, Plane, MapPin, DollarSign, Star, FileText, Globe, User } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { CreateRestaurantInput } from "@/types";
import { createRestaurantSchema } from "@shared/schema";
import { Slider } from "@/components/ui/slider";
import { getImageByType } from '@/utils/restaurantImageUtils';
import { useUser } from "./UserContext";
import { useTerms } from "@/lib/terms";

interface AddRestaurantModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AddRestaurantModal({ isOpen, onClose }: AddRestaurantModalProps) {
  const [rating, setRating] = useState<number>(4.0);
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [selectedFoodType, setSelectedFoodType] = useState<string | null>(null);
  const { currentUser } = useUser();
  const T = useTerms();

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CreateRestaurantInput>({
    resolver: zodResolver(createRestaurantSchema),
    defaultValues: {
      name: "",
      type: "",
      price: "",
      address: "",
      distance: "",
      rating: 4.0,
      notes: "",
      recommender: currentUser?.name || "",
      websiteUrl: "",
      imageUrl: getImageByType("default")
    },
  });

  // 當對話框開啟或登入狀態改變時，更新推薦人欄位
  useEffect(() => {
    if (isOpen && currentUser) {
      setValue("recommender", currentUser.name);
    }
  }, [isOpen, currentUser, setValue]);

  const createRestaurantMutation = useMutation({
    mutationFn: async (data: CreateRestaurantInput) => {
      return apiRequest("POST", "/api/restaurants", data).then(res => res.json());
    },
    onSuccess: (newRestaurant) => {
      queryClient.invalidateQueries({ queryKey: ['/api/restaurants'] });
      queryClient.invalidateQueries({ queryKey: ['/api/votes/restaurants'] });
      toast({
        title: `${T.item}新增成功！`,
        description: `「${newRestaurant.name}」已成功添加並儲存到資料庫`,
        variant: "default",
      });
      handleClose();
    },
    onError: (error) => {
      toast({
        title: `新增${T.item}失敗`,
        description: error.message || "發生錯誤，請稍後再試",
        variant: "destructive",
      });
    },
  });

  // 導入並使用共享的餐廳圖片選擇函數

  const onSubmit = (data: CreateRestaurantInput) => {
    // Update rating with the current state value
    const formattedData = {
      ...data,
      rating,
      // 根據餐廳類型選擇合適的照片
      imageUrl: getImageByType(data.type)
    };
    createRestaurantMutation.mutate(formattedData);
  };

  const handleClose = () => {
    reset();
    setRating(4.0);
    setSelectedFoodType(null);
    onClose();
  };

  const handleSelectFoodType = (type: string) => {
    setSelectedFoodType(type);
    setValue("type", type);
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-white to-yellow-50">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-2">
            <div className="bg-primary rounded-full p-2 text-white">
              {T.item === "地點" ? <Plane className="h-6 w-6" /> : <Utensils className="h-6 w-6" />}
            </div>
            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              推薦{T.item}
            </h2>
          </div>

        </div>

        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="flex items-center text-lg font-medium text-gray-700">
                <span className="mr-1">{T.name}</span>
                <span className="text-red-500">*</span>
              </Label>
              <Input
                id="name"
                {...register("name")}
                placeholder={T.namePh}
                className={`rounded-lg text-lg py-6 ${errors.name ? "border-destructive" : "border-gray-300 focus:border-primary"}`}
              />
              {errors.name && <p className="text-destructive text-sm">{errors.name.message}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="type" className="flex items-center text-lg font-medium text-gray-700">
                <span className="mr-1">{T.type}</span>
                <span className="text-red-500">*</span>
              </Label>
              <Input
                id="type"
                {...register("type")}
                placeholder={T.typePh}
                className={`rounded-lg text-lg py-6 ${errors.type ? "border-destructive" : "border-gray-300 focus:border-primary"}`}
              />
              {errors.type && <p className="text-destructive text-sm">{errors.type.message}</p>}

              <div className="flex flex-wrap gap-2 mt-2">
                {T.typeChips.map((type) => (
                  <Button
                    key={type}
                    type="button"
                    size="sm"
                    variant="outline"
                    className={selectedFoodType === type 
                      ? "bg-primary text-white" 
                      : "bg-white hover:bg-primary/10"}
                    onClick={() => handleSelectFoodType(type)}
                  >
                    {type}
                  </Button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="price" className="flex items-center text-lg font-medium text-gray-700">
                <DollarSign className="h-4 w-4 mr-1 text-green-600" />
                <span className="mr-1">{T.price}</span>
                <span className="text-red-500">*</span>
              </Label>
              <Input
                id="price"
                {...register("price")}
                placeholder={T.pricePh}
                className={`rounded-lg text-lg py-6 ${errors.price ? "border-destructive" : "border-gray-300 focus:border-primary"}`}
              />
              {errors.price && <p className="text-destructive text-sm">{errors.price.message}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="address" className="flex items-center text-lg font-medium text-gray-700">
                <MapPin className="h-4 w-4 mr-1 text-red-500" />
                <span className="mr-1">{T.address}</span>
                <span className="text-red-500">*</span>
              </Label>
              <Input
                id="address"
                {...register("address")}
                placeholder={T.addressPh}
                className={`rounded-lg text-lg py-6 ${errors.address ? "border-destructive" : "border-gray-300 focus:border-primary"}`}
              />
              {errors.address && <p className="text-destructive text-sm">{errors.address.message}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="distance" className="flex items-center text-lg font-medium text-gray-700">
                <span className="mr-1">{T.distance}</span>
                <span className="text-red-500">*</span>
              </Label>
              <Input
                id="distance"
                {...register("distance")}
                placeholder={T.distancePh}
                className={`rounded-lg text-lg py-6 ${errors.distance ? "border-destructive" : "border-gray-300 focus:border-primary"}`}
              />
              {T.distanceChips.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {T.distanceChips.map(d => (
                    <Button key={d} type="button" size="sm" variant="outline" className="bg-white hover:bg-primary/10"
                      onClick={() => setValue("distance", d, { shouldValidate: true })}>{d}</Button>
                  ))}
                </div>
              )}
              {errors.distance && <p className="text-destructive text-sm">{errors.distance.message}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="recommender" className="flex items-center text-lg font-medium text-gray-700">
                <User className="h-4 w-4 mr-1 text-amber-500" />
                <span className="mr-1">推薦人</span>
                <span className="text-red-500">*</span>
              </Label>
              <div className="relative">
                <Input
                  id="recommender"
                  {...register("recommender")}
                  disabled={true}
                  readOnly={true}
                  value={currentUser?.name || ""}
                  className={`rounded-lg text-lg py-6 bg-gray-100 ${errors.recommender ? "border-destructive" : "border-gray-300"}`}
                />
                <p className="text-amber-600 text-xs mt-1 italic">
                  注意：推薦人欄位自動設為您的登入名稱，之後只有您本人或管理員可以編輯/刪除此{T.item}
                </p>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-gray-500 italic">
                  自動填入登入者名稱
                </div>
              </div>
              {errors.recommender && <p className="text-destructive text-sm">{errors.recommender.message}</p>}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="websiteUrl" className="flex items-center text-lg font-medium text-gray-700">
                <Globe className="h-4 w-4 mr-1 text-blue-500" />
                <span className="mr-1">{T.website}</span>
              </Label>
              <Input
                id="websiteUrl"
                {...register("websiteUrl")}
                placeholder={T.websitePh}
                className={`rounded-lg text-lg py-6 ${errors.websiteUrl ? "border-destructive" : "border-gray-300 focus:border-primary"}`}
              />
              {errors.websiteUrl && <p className="text-destructive text-sm">{errors.websiteUrl.message}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="rating" className="flex items-center text-lg font-medium text-gray-700">
                <Star className="h-4 w-4 mr-1 text-yellow-500" />
                <span>{T.rating}</span>
              </Label>
              <div className="flex items-center space-x-2 bg-white p-3 rounded-lg border border-gray-300">
                <Slider
                  id="rating"
                  min={1}
                  max={5}
                  step={0.1}
                  value={[rating]}
                  onValueChange={(value) => setRating(value[0])}
                  className="flex-1"
                />
                <span className="text-lg font-medium w-10 text-primary">{rating.toFixed(1)}</span>
              </div>
            </div>

            <div className="md:col-span-2 space-y-2">
              <Label htmlFor="notes" className="flex items-center text-lg font-medium text-gray-700">
                <FileText className="h-4 w-4 mr-1 text-blue-500" />
                <span>備註</span>
              </Label>
              <Textarea
                id="notes"
                {...register("notes")}
                placeholder={T.notesPh}
                className={`rounded-lg text-base ${errors.notes ? "border-destructive" : "border-gray-300 focus:border-primary"}`}
                rows={3}
              />
              {errors.notes && <p className="text-destructive text-sm">{errors.notes.message}</p>}
            </div>

            <Input
              id="imageUrl"
              type="hidden"
              {...register("imageUrl")}
            />
          </div>

          <div className="flex justify-end space-x-3 pt-4 border-t">
            <Button
              type="button"
              variant="outline"
              onClick={handleClose}
              className="rounded-full px-6"
            >
              取消
            </Button>
            <Button
              type="submit"
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white rounded-full px-8 py-6 text-lg transition-all transform hover:scale-105"
              disabled={isSubmitting}
            >
              {isSubmitting ? "儲存中..." : `儲存${T.item}資訊`}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default AddRestaurantModal;
