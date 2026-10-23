import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { X, Globe, MapPin, DollarSign, Star, FileText, Utensils, User } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Restaurant, CreateRestaurantInput } from "@/types";
import { createRestaurantSchema } from "@shared/schema";
import { Slider } from "@/components/ui/slider";
import { getImageByType } from '@/utils/restaurantImageUtils';
import { useUser } from "./UserContext";
import { useTerms } from "@/lib/terms";

interface EditRestaurantModalProps {
  restaurant: Restaurant;
  isOpen: boolean;
  onClose: () => void;
}

export function EditRestaurantModal({ restaurant, isOpen, onClose }: EditRestaurantModalProps) {
  const [rating, setRating] = useState<number>(restaurant.rating);
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const { currentUser } = useUser();
  const T = useTerms();
  
  // 確認當前用戶是否有權限編輯推薦人欄位（只有管理員可以）
  const canEditRecommender = currentUser?.isAdmin === 1;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CreateRestaurantInput>({
    resolver: zodResolver(createRestaurantSchema),
    defaultValues: {
      name: restaurant.name,
      type: restaurant.type,
      price: restaurant.price,
      address: restaurant.address,
      distance: restaurant.distance,
      rating: restaurant.rating,
      notes: restaurant.notes || "",
      recommender: restaurant.recommender || "",
      websiteUrl: restaurant.websiteUrl || "",
      imageUrl: restaurant.imageUrl
    },
  });

  useEffect(() => {
    if (isOpen) {
      reset({
        name: restaurant.name,
        type: restaurant.type,
        price: restaurant.price,
        address: restaurant.address,
        distance: restaurant.distance,
        rating: restaurant.rating,
        notes: restaurant.notes || "",
        recommender: restaurant.recommender || "",
        websiteUrl: restaurant.websiteUrl || "",
        imageUrl: restaurant.imageUrl
      });
      setRating(restaurant.rating);
    }
  }, [isOpen, restaurant, reset]);

  const updateRestaurantMutation = useMutation({
    mutationFn: async (data: CreateRestaurantInput) => {
      return apiRequest("PUT", `/api/restaurants/${restaurant.id}`, data).then(res => res.json());
    },
    onSuccess: (updatedRestaurant) => {
      queryClient.invalidateQueries({ queryKey: ['/api/restaurants'] });
      queryClient.invalidateQueries({ queryKey: ['/api/votes/restaurants'] });
      toast({
        title: `${T.item}更新成功！`,
        description: `「${updatedRestaurant.name}」的資訊已成功更新並儲存到資料庫`,
        variant: "default",
      });
      handleClose();
    },
    onError: (error) => {
      toast({
        title: `更新${T.item}失敗`,
        description: error.message || "發生錯誤，請稍後再試",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: CreateRestaurantInput) => {
    // 更新評分與餐廳圖片
    const formattedData = {
      ...data,
      rating,
      // 始終根據餐廳類型更新圖片，確保圖片與餐廳類型一致
      imageUrl: getImageByType(data.type)
    };
    updateRestaurantMutation.mutate(formattedData);
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-white to-blue-50">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-primary">編輯{T.item}資訊</h2>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="flex items-center">
                <Utensils className="h-4 w-4 mr-1 text-amber-500" />
                <span>{T.name}</span>
              </Label>
              <Input
                id="name"
                {...register("name")}
                placeholder={T.namePh}
                className={errors.name ? "border-destructive" : ""}
              />
              {errors.name && <p className="text-destructive text-sm">{errors.name.message}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="type" className="flex items-center">
                <Utensils className="h-4 w-4 mr-1 text-orange-500" />
                <span>{T.type}</span>
              </Label>
              <Input
                id="type"
                {...register("type")}
                placeholder={T.typePh}
                className={errors.type ? "border-destructive" : ""}
              />
              {errors.type && <p className="text-destructive text-sm">{errors.type.message}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="price" className="flex items-center">
                <DollarSign className="h-4 w-4 mr-1 text-green-500" />
                <span>{T.price}</span>
              </Label>
              <Input
                id="price"
                {...register("price")}
                placeholder={T.pricePh}
                className={errors.price ? "border-destructive" : ""}
              />
              {errors.price && <p className="text-destructive text-sm">{errors.price.message}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="address" className="flex items-center">
                <MapPin className="h-4 w-4 mr-1 text-red-500" />
                <span>{T.address}</span>
              </Label>
              <Input
                id="address"
                {...register("address")}
                placeholder={T.addressPh}
                className={errors.address ? "border-destructive" : ""}
              />
              {errors.address && <p className="text-destructive text-sm">{errors.address.message}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="distance" className="flex items-center">
                <MapPin className="h-4 w-4 mr-1 text-blue-500" />
                <span>{T.distance}</span>
              </Label>
              <Input
                id="distance"
                {...register("distance")}
                placeholder={T.distancePh}
                className={errors.distance ? "border-destructive" : ""}
              />
              {errors.distance && <p className="text-destructive text-sm">{errors.distance.message}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="recommender" className="flex items-center">
                <User className="h-4 w-4 mr-1 text-purple-500" />
                <span>推薦人</span>
                {!canEditRecommender && (
                  <span className="text-xs text-gray-500 ml-2">(只有管理員可以修改)</span>
                )}
              </Label>
              <Input
                id="recommender"
                {...register("recommender")}
                placeholder="請輸入推薦人姓名"
                className={errors.recommender ? "border-destructive" : ""}
                disabled={!canEditRecommender}
                title={!canEditRecommender ? "只有管理員可以修改推薦人" : ""}
              />
              {errors.recommender && <p className="text-destructive text-sm">{errors.recommender.message}</p>}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="websiteUrl" className="flex items-center">
                <Globe className="h-4 w-4 mr-1 text-blue-500" />
                <span>{T.website}</span>
              </Label>
              <Input
                id="websiteUrl"
                {...register("websiteUrl")}
                placeholder={T.websitePh}
                className={errors.websiteUrl ? "border-destructive" : ""}
              />
              {errors.websiteUrl && <p className="text-destructive text-sm">{errors.websiteUrl.message}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="rating" className="flex items-center">
                <Star className="h-4 w-4 mr-1 text-yellow-500" />
                <span>{T.rating}</span>
              </Label>
              <div className="flex items-center space-x-2">
                <Slider
                  id="rating"
                  min={1}
                  max={5}
                  step={0.1}
                  value={[rating]}
                  onValueChange={(value) => setRating(value[0])}
                  className="flex-1"
                />
                <span className="text-sm font-medium w-8">{rating.toFixed(1)}</span>
              </div>
            </div>

            <div className="md:col-span-2 space-y-2">
              <Label htmlFor="notes" className="flex items-center">
                <FileText className="h-4 w-4 mr-1 text-primary" />
                <span>備註</span>
              </Label>
              <Textarea
                id="notes"
                {...register("notes")}
                placeholder={T.notesPh}
                className={errors.notes ? "border-destructive" : ""}
                rows={3}
              />
              {errors.notes && <p className="text-destructive text-sm">{errors.notes.message}</p>}
            </div>

            <div className="md:col-span-2">
              <Input
                id="imageUrl"
                type="hidden"
                {...register("imageUrl")}
              />
            </div>
          </div>

          <div className="flex justify-end space-x-3">
            <Button
              type="button"
              variant="outline"
              onClick={handleClose}
            >
              取消
            </Button>
            <Button
              type="submit"
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? "儲存中..." : `儲存並更新${T.item}`}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default EditRestaurantModal;