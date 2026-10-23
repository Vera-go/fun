import { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { PlusCircle, Edit, Trash2, Info, Globe, MapPin, Crown, UtensilsCrossed, Plane } from "lucide-react";
import { Restaurant, RestaurantWithVotes, Vote } from "@/types";
import { apiRequest } from "@/lib/queryClient";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { StarRating } from "@/components/ui/rating";
import { EditRestaurantModal } from "./EditRestaurantModal";
import { AddRestaurantModal } from "./AddRestaurantModal";
import { Badge } from "@/components/ui/badge";
import { VoteButton } from "./VoteButton";
import { VoteDetailsDialog } from "./VoteDetailsDialog";
import { useUser } from "./UserContext";
import { useEvent, isOpen, shortDate } from "@/lib/event";
import { useTerms } from "@/lib/terms";
import { Cover } from "./Cover";
import { 
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle
} from "@/components/ui/alert-dialog";

function RestaurantList() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const { currentUser } = useUser();
  const { event } = useEvent();
  const T = useTerms();
  // 推薦截止後就不能新增（主辦人例外）；資料庫也會檢查
  const recommendOpen = !!event && (isOpen(event.recommendDeadline, event.today) || currentUser?.isAdmin === 1);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editRestaurant, setEditRestaurant] = useState<Restaurant | null>(null);
  const [deleteRestaurant, setDeleteRestaurant] = useState<Restaurant | null>(null);
  const [userVotes, setUserVotes] = useState<number[]>([]);
  
  // 管理投票詳情對話框
  const [restaurantVoteDetails, setRestaurantVoteDetails] = useState<{
    restaurantId: number;
    restaurantName: string;
    isOpen: boolean;
  }>({
    restaurantId: 0,
    restaurantName: '',
    isOpen: false
  });

  // 獲取餐廳列表（包含投票數）
  const { data: restaurantsWithVotes = [], isLoading: isRestaurantsLoading } = useQuery<RestaurantWithVotes[]>({
    queryKey: ['/api/votes/restaurants'],
    enabled: true,
    refetchOnWindowFocus: false,
    staleTime: 10000
  });

  // 獲取唯一投票用戶數量
  const { data: uniqueVotersData } = useQuery<{ count: number }>({
    queryKey: ['/api/votes/unique-voters-count'],
    enabled: true,
    refetchOnWindowFocus: false,
    staleTime: 10000
  });

  // 獲取用戶已投票的餐廳
  const { data: votes = [], isLoading: isVotesLoading } = useQuery<Vote[]>({
    queryKey: [`/api/votes/users/${currentUser?.id}`],
    enabled: !!currentUser,
    refetchOnWindowFocus: false
  });
  
  // 當用戶投票狀態更新時，更新userVotes
  useEffect(() => {
    if (votes && votes.length > 0) {
      const votedRestaurantIds = votes.map(vote => vote.restaurantId);
      setUserVotes(votedRestaurantIds);
    } else {
      setUserVotes([]);
    }
  }, [JSON.stringify(votes)]); // 使用 JSON.stringify 可以深度比較

  // 將餐廳數據映射為常規Restaurant[]格式
  const restaurants = restaurantsWithVotes.map(r => ({
    id: r.id,
    name: r.name,
    type: r.type,
    price: r.price,
    address: r.address,
    distance: r.distance,
    rating: r.rating,
    notes: r.notes,
    imageUrl: r.imageUrl,
    recommender: r.recommender,
    websiteUrl: r.websiteUrl,
    createdBy: (r as any).createdBy
  }));

  const isLoading = isRestaurantsLoading || (currentUser && isVotesLoading);

  // Delete restaurant mutation
  const deleteRestaurantMutation = useMutation({
    mutationFn: async (id: number) => {
      return apiRequest("DELETE", `/api/restaurants/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/restaurants'] });
      queryClient.invalidateQueries({ queryKey: ['/api/votes/restaurants'] });
      toast({
        title: `${T.item}刪除成功！`,
        description: `該${T.item}已從列表中移除`
      });
      setDeleteRestaurant(null);
    },
    onError: (error: any) => {
      console.error("刪除失敗:", error);
      let errorMessage = "發生錯誤，請稍後再試";
      
      try {
        // 嘗試解析後端返回的錯誤訊息
        if (error.response && typeof error.response.json === 'function') {
          error.response.json().then((data: any) => {
            if (data && data.message) {
              toast({
                title: "刪除失敗",
                description: data.message,
                variant: "destructive",
              });
            }
          });
          return; // 提前返回，避免顯示兩次錯誤
        }
        
        // 如果有錯誤訊息直接使用
        if (error.message) {
          errorMessage = error.message;
        }
      } catch (parseError) {
        // 解析失敗時使用默認訊息
      }
      
      toast({
        title: "刪除失敗",
        description: errorMessage,
        variant: "destructive"
      });
    }
  });

  // 卡片漸層背景顏色
  const cardColors = [
    "bg-gradient-to-br from-pink-100 to-pink-200 border-pink-300",
    "bg-gradient-to-br from-blue-100 to-blue-200 border-blue-300",
    "bg-gradient-to-br from-green-100 to-green-200 border-green-300",
    "bg-gradient-to-br from-yellow-100 to-yellow-200 border-yellow-300",
    "bg-gradient-to-br from-purple-100 to-purple-200 border-purple-300",
    "bg-gradient-to-br from-red-100 to-red-200 border-red-300",
    "bg-gradient-to-br from-indigo-100 to-indigo-200 border-indigo-300",
    "bg-gradient-to-br from-orange-100 to-orange-200 border-orange-300",
  ];

  // 處理排名邏輯，解決平票問題
  const calculateRankings = (restaurants: RestaurantWithVotes[]) => {
    // 1. 先排序餐廳（按投票數降序）
    const sortedRestaurants = [...restaurants].sort((a, b) => b.voteCount - a.voteCount);
    
    // 2. 計算每個餐廳的實際排名
    let currentRank = 1;
    let previousVoteCount = -1;
    const rankMap = new Map<number, number>();
    
    sortedRestaurants.forEach((restaurant, index) => {
      // 如果與前一個餐廳票數不同，排名就是當前索引+1
      if (index > 0 && restaurant.voteCount < previousVoteCount) {
        currentRank = index + 1;
      }
      // 記錄當前餐廳的排名
      rankMap.set(restaurant.id, currentRank);
      // 更新前一個餐廳的票數
      previousVoteCount = restaurant.voteCount;
    });
    
    return {
      sortedRestaurants,
      rankMap
    };
  };

  if (isLoading) {
    return (
      <div className="space-y-8">
        <div className="flex justify-center mb-6">
          <Button 
            onClick={() => setIsAddModalOpen(true)}
            className="bg-primary hover:bg-accent text-white text-lg px-8 py-6 rounded-full transition-all transform hover:scale-105 shadow-lg"
            disabled={!currentUser || !recommendOpen}
          >
            <PlusCircle className="mr-2 h-6 w-6" />
            推薦{T.item}
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, index) => (
            <Card key={index} className="border-2 overflow-hidden animate-pulse">
              <div className="h-40 bg-gray-200"></div>
              <CardContent className="p-6 space-y-4">
                <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex justify-end">
                <div className="h-10 bg-gray-200 rounded w-24"></div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  // 計算餐廳排名
  const { sortedRestaurants, rankMap } = calculateRankings(restaurantsWithVotes);

  return (
    <div className="space-y-6">
      {/* 投票排名放最上面；推薦按鈕放在排名說明下面 */}
      <div className="text-center mb-6">
        <div className="relative inline-block">
          <h2 className="text-3xl font-serif text-primary font-medium mb-3 relative">
            {T.item}投票排名
            {restaurantsWithVotes.length > 0 && (
              <div className="absolute -top-5 -right-8 transform rotate-12">
                <Crown className="h-8 w-8 text-yellow-500 drop-shadow-md" />
              </div>
            )}
          </h2>
        </div>
        <div className="h-1 w-24 bg-yellow-500/50 mx-auto mb-3"></div>
        <p className="text-muted-foreground text-sm max-w-md mx-auto">
          票數越多排名越前，目前共有 <span className="font-medium text-primary">{uniqueVotersData?.count || 0}</span> 人參與投票。
          <span className="block mt-1 text-amber-600 text-xs font-medium">
            投票規則：一人有 {event?.votesPerPerson ?? 2} 票，同一{T.unit}{T.item}限投一票
          </span>
        </p>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
          <Button
            onClick={() => setIsAddModalOpen(true)}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-serif rounded-sm shadow-sm border border-primary/30"
            disabled={!currentUser || !recommendOpen} // 未登入或已過推薦截止日
          >
            <PlusCircle className="mr-1.5 h-4 w-4 opacity-90" />
            推薦{T.item}
          </Button>
          {!recommendOpen && event ? (
            <span className="italic text-amber-600 text-sm">推薦已於 {shortDate(event.recommendDeadline)} 截止</span>
          ) : !currentUser && (
            <span className="italic text-amber-600 text-sm">請先登入以推薦{T.item}</span>
          )}
        </div>
      </div>
      
      {restaurants.length === 0 ? (
        <div className="text-center py-16 bg-card border border-border/40 rounded-sm shadow-sm">
          <h3 className="text-xl font-serif tracking-wide font-medium mb-3 text-primary">{T.emptyTitle}</h3>
          <div className="h-[1px] w-20 bg-primary/20 mx-auto mb-4"></div>
          <p className="text-muted-foreground mb-10 font-serif">點上方「推薦{T.item}」開始新增您推薦的{T.item}</p>
          <div className="max-w-md mx-auto opacity-60">
            {/* 原本的外部插圖網站已失效，改用內建圖示 */}
            {event?.kind === "trip"
              ? <Plane aria-label="空地點列表插圖" className="w-24 h-24 mx-auto text-primary" strokeWidth={1.2} />
              : <UtensilsCrossed aria-label="空餐廳列表插圖" className="w-24 h-24 mx-auto text-primary" strokeWidth={1.2} />}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedRestaurants.map((restaurantWithVotes, index) => {
            // 取得對應的詳細餐廳資訊
            const restaurant = restaurants.find(r => r.id === restaurantWithVotes.id)!;
            // 取得該餐廳的排名
            const rank = rankMap.get(restaurantWithVotes.id) || index + 1;
            
            return (
              <Card 
                key={restaurant.id} 
                className={`border-2 overflow-hidden hover:shadow-xl transition-all 
                  ${rank === 1 
                    ? 'bg-gradient-to-br from-yellow-100 to-yellow-200 border-yellow-400 border-[3px] shadow-yellow-200/50' 
                    : cardColors[index % cardColors.length]
                  } 
                  ${rank === 1 ? 'transform hover:scale-105' : ''}
                  relative
                `}
              >
                {/* 排名標籤 */}
                <div className="absolute top-0 left-0 z-[5]">
                  {rank === 1 ? (
                    <div className="relative">
                      <div className="bg-yellow-500 w-16 h-16 m-2 rounded-full shadow-md flex flex-col items-center justify-center">
                        <Crown className="h-6 w-6 text-white mb-1 animate-pulse" />
                        <span className="text-white font-bold flex items-center">
                          <span className="text-lg">1</span>
                          <span className="ml-0.5 text-xs">位</span>
                        </span>
                      </div>
                      <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full animate-bounce">
                        冠軍
                      </div>
                    </div>
                  ) : (
                    <div className={`
                      flex items-center justify-center font-bold text-white
                      ${rank === 2 ? 'bg-gray-400' : rank === 3 ? 'bg-amber-700' : 'bg-primary/70'}
                      w-12 h-12 m-2 rounded-full shadow-md
                    `}>
                      {rank}
                      {rank <= 3 && <span className="ml-1 text-xs">位</span>}
                    </div>
                  )}
                </div>
                
                <div className="h-40 overflow-hidden relative group">
                  <Cover
                    src={restaurant.imageUrl}
                    alt={event?.kind === "trip" ? restaurant.name : `${restaurant.name}的美食`}
                    className="transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                    <Badge className="bg-primary">{restaurant.type}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    {rank === 1 ? (
                      <h2 className="text-xl font-bold text-yellow-700 border-b-2 border-yellow-400 pb-1">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-amber-700">
                          {restaurant.name}
                        </span>
                        <span className="ml-2 text-sm font-normal text-red-500">{T.champion}</span>
                      </h2>
                    ) : (
                      <h2 className="text-xl font-bold text-gray-800">{restaurant.name}</h2>
                    )}
                    <StarRating value={restaurant.rating} readOnly size="sm" />
                  </div>
                  
                  <div className="space-y-2 text-gray-600">
                    <div className="flex items-center">
                      <span className="font-medium mr-2">{T.priceShort}:</span> 
                      {restaurant.price}
                    </div>
                    <div className="flex items-start">
                      <span className="font-medium mr-2 mt-1 flex-shrink-0">{T.addressShort}:</span>
                      <a 
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(restaurant.address)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-700 hover:underline break-words flex items-start flex-grow"
                        title={restaurant.address}
                      >
                        <MapPin className="h-3.5 w-3.5 mr-1 flex-shrink-0 mt-1" />
                        <span className="inline-block break-words break-all whitespace-normal overflow-hidden text-sm">{restaurant.address}</span>
                      </a>
                    </div>
                    <div className="flex items-center mb-2">
                      <span className="font-medium mr-2">{T.distanceShort}:</span>
                      <Badge variant="outline" className="bg-white text-primary border-primary">
                        {restaurant.distance}
                      </Badge>
                    </div>
                    {restaurant.recommender && (
                      <div className="flex items-center mt-2">
                        <span className="font-medium mr-2">推薦人:</span>
                        <Badge className="bg-secondary text-white">
                          {restaurant.recommender}
                        </Badge>
                      </div>
                    )}
                    {restaurant.websiteUrl && (
                      <div className="flex items-center mt-2">
                        <span className="font-medium mr-2">網址:</span>
                        <a 
                          href={restaurant.websiteUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:text-blue-700 hover:underline flex items-center"
                        >
                          <Globe className="h-4 w-4 mr-1" />
                          <span>前往網站</span>
                        </a>
                      </div>
                    )}
                    {restaurant.notes && (
                      <p className="text-sm italic text-gray-500 mt-2">
                        備註: {restaurant.notes}
                      </p>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="px-6 pb-6 pt-0 flex justify-between gap-2">
                  <div>
                    {/* 投票按鈕 */}
                    <VoteButton 
                      restaurantId={restaurant.id}
                      restaurantName={restaurant.name}
                      hasVoted={userVotes.includes(restaurant.id)}
                      voteCount={restaurantWithVotes.voteCount || 0}
                    />
                  </div>
                  
                  {/* 管理員操作區域 */}
                  <div className="flex items-center gap-2">
                    {/* 只有管理員能看到的投票詳情按鈕 */}
                    {currentUser?.isAdmin === 1 && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-9 px-2 hover:bg-accent/10 hover:text-accent rounded-sm"
                        onClick={() => {
                          // 打開特定餐廳的投票詳情
                          setRestaurantVoteDetails({
                            restaurantId: restaurant.id,
                            restaurantName: restaurant.name,
                            isOpen: true
                          });
                        }}
                        title="查看投票詳情"
                      >
                        <Info className="h-4 w-4 text-primary/80" />
                      </Button>
                    )}
                    
                    {/* 編輯與刪除按鈕 - 只對推薦人本人或管理員顯示 */}
                    {currentUser && (
                      // 確認是否有權限編輯/刪除：推薦人本人或管理員
                      (currentUser.isAdmin === 1 || (restaurant as any).createdBy === currentUser.id) && (
                        <>
                          <Button 
                            variant="outline" 
                            size="sm"
                            className="h-9 px-2 hover:bg-secondary/10 hover:text-secondary rounded-sm"
                            onClick={() => setEditRestaurant(restaurant)}
                            title={currentUser.isAdmin === 1 ? "主辦人編輯" : "推薦人編輯"}
                          >
                            <Edit className="h-4 w-4 text-secondary/80" />
                          </Button>
                          
                          <Button 
                            variant="outline" 
                            size="sm"
                            className="h-9 px-2 hover:bg-destructive/10 hover:text-destructive rounded-sm"
                            onClick={() => setDeleteRestaurant(restaurant)}
                            title={currentUser.isAdmin === 1 ? "主辦人刪除" : "推薦人刪除"}
                          >
                            <Trash2 className="h-4 w-4 text-destructive/80" />
                          </Button>
                        </>
                      )
                    )}
                  </div>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      )}

      <AddRestaurantModal 
        isOpen={isAddModalOpen} 
        onClose={() => setIsAddModalOpen(false)} 
      />
      
      {editRestaurant && (
        <EditRestaurantModal 
          restaurant={editRestaurant} 
          isOpen={!!editRestaurant} 
          onClose={() => setEditRestaurant(null)} 
        />
      )}
      
      {/* 投票詳情對話框 */}
      <VoteDetailsDialog
        restaurantId={restaurantVoteDetails.restaurantId}
        restaurantName={restaurantVoteDetails.restaurantName}
        isOpen={restaurantVoteDetails.isOpen}
        onClose={() => setRestaurantVoteDetails({
          ...restaurantVoteDetails,
          isOpen: false
        })}
      />
      
      {/* 刪除確認對話框 */}
      <AlertDialog open={!!deleteRestaurant} onOpenChange={open => !open && setDeleteRestaurant(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>確認刪除{T.item}</AlertDialogTitle>
            <AlertDialogDescription>
              您確定要刪除「{deleteRestaurant?.name}」嗎？此操作無法撤銷，相關的投票記錄也將一併刪除。
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>取消</AlertDialogCancel>
            <AlertDialogAction 
              className="bg-red-500 hover:bg-red-600"
              onClick={() => deleteRestaurant && deleteRestaurantMutation.mutate(deleteRestaurant.id)}
            >
              確認刪除
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

export default RestaurantList;