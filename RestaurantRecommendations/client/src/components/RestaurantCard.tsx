import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { MapPin } from "lucide-react";
import { Restaurant } from "@/types";
import { StarRating } from "@/components/ui/rating";

interface RestaurantCardProps {
  restaurant: Restaurant;
}

export function RestaurantCard({ restaurant }: RestaurantCardProps) {
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  return (
    <>
      <Card className="overflow-hidden restaurant-card border border-border/40 shadow-sm hover:shadow transition-all duration-300">
        <div className="h-52 overflow-hidden relative">
          <img
            src={restaurant.imageUrl}
            alt={`${restaurant.name}的美食`}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute top-3 right-3 bg-primary/80 px-2 py-1 rounded-sm">
            <StarRating value={restaurant.rating} readOnly size="sm" />
          </div>
        </div>
        
        <CardContent className="p-5">
          <div className="border-b border-primary/20 pb-3 mb-4">
            <h2 className="text-xl font-serif tracking-wide text-primary font-medium">{restaurant.name}</h2>
            <p className="text-sm text-muted-foreground mt-1 font-serif">{restaurant.type}</p>
          </div>

          <div className="space-y-2.5 text-sm text-foreground/90 font-serif">
            <div className="flex items-start">
              <span className="text-primary/80 font-medium w-20">價格範圍:</span> 
              <span>{restaurant.price}</span>
            </div>
            
            <div className="flex items-start">
              <span className="text-primary/80 font-medium w-20">距離:</span>
              <span className="bg-accent/80 text-accent-foreground text-xs px-2 py-0.5 rounded-sm">
                {restaurant.distance}
              </span>
            </div>
            
            <div className="flex items-start">
              <span className="text-primary/80 font-medium w-20">位置:</span> 
              <span className="text-sm">{restaurant.address}</span>
            </div>
          </div>

          {restaurant.notes && (
            <div className="mt-4 text-sm border-t border-primary/20 pt-3">
              <p className="text-muted-foreground font-serif italic">
                <span className="text-primary/80 font-medium not-italic">備註:</span> {restaurant.notes}
              </p>
            </div>
          )}

          <div className="pt-4 mt-2">
            <Button
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-colors font-serif rounded-sm"
              onClick={() => setIsDetailOpen(true)}
            >
              查看詳情
            </Button>
          </div>
        </CardContent>
      </Card>

      <Dialog open={isDetailOpen} onOpenChange={setIsDetailOpen}>
        <DialogContent className="max-w-3xl bg-card border border-border/50 rounded-sm">
          <DialogHeader>
            <DialogTitle className="text-2xl font-serif tracking-wide text-primary font-medium relative pb-3">
              {restaurant.name}
              <div className="h-[1px] w-20 bg-primary/30 absolute bottom-0 left-0"></div>
            </DialogTitle>
          </DialogHeader>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
            <div>
              <img
                src={restaurant.imageUrl}
                alt={`${restaurant.name}的美食`}
                className="w-full h-72 object-cover rounded-sm border border-border/50"
              />
              {restaurant.websiteUrl && (
                <a 
                  href={restaurant.websiteUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block mt-3 text-center text-primary underline hover:text-primary/80 font-serif text-sm"
                >
                  訪問餐廳官網
                </a>
              )}
            </div>
            
            <div className="space-y-5 font-serif">
              <div className="flex justify-between items-center border-b border-primary/20 pb-2">
                <h3 className="text-primary/80 font-medium text-lg">評分</h3>
                <StarRating value={restaurant.rating} readOnly />
              </div>
              
              <div className="border-b border-primary/20 pb-3">
                <h3 className="text-primary/80 font-medium">餐廳類型</h3>
                <p className="mt-1">{restaurant.type}</p>
              </div>
              
              <div className="border-b border-primary/20 pb-3">
                <h3 className="text-primary/80 font-medium">價格範圍</h3>
                <p className="mt-1">{restaurant.price}</p>
              </div>
              
              <div className="border-b border-primary/20 pb-3">
                <h3 className="text-primary/80 font-medium">地址</h3>
                <p className="mt-1">
                  <a 
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(restaurant.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline hover:text-primary/80 whitespace-nowrap overflow-hidden text-ellipsis inline-flex items-center max-w-full"
                    title={restaurant.address}
                  >
                    <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
                    <span>{restaurant.address}</span>
                  </a>
                </p>
              </div>
              
              <div>
                <h3 className="text-primary/80 font-medium">距離</h3>
                <p className="mt-1">
                  <span className="bg-accent/80 text-accent-foreground text-xs px-2 py-0.5 rounded-sm">
                    {restaurant.distance}
                  </span>
                </p>
              </div>
              
              {restaurant.recommender && (
                <div className="border-t border-primary/20 pt-3 mt-5">
                  <h3 className="text-primary/80 font-medium">推薦人</h3>
                  <p className="mt-1 italic text-muted-foreground">{restaurant.recommender}</p>
                </div>
              )}
            </div>
          </div>
          
          {restaurant.notes && (
            <div className="mt-6 bg-muted p-4 rounded-sm">
              <h3 className="text-primary/80 font-medium font-serif">備註</h3>
              <p className="text-muted-foreground mt-2 font-serif">{restaurant.notes}</p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}

export default RestaurantCard;
