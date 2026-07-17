import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { ThumbsUp, Check, Info } from "lucide-react";
import { useUser } from "./UserContext";
import { type Vote } from "@/types";
import { VoteDetailsDialog } from "./VoteDetailsDialog";

interface VoteButtonProps {
  restaurantId: number;
  restaurantName: string; // 增加餐廳名稱以在詳情對話框中顯示
  hasVoted: boolean;
  voteCount: number;
  className?: string;
}

export function VoteButton({ restaurantId, restaurantName, hasVoted, voteCount, className }: VoteButtonProps) {
  const { currentUser, isAdmin } = useUser();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [showVoteDetails, setShowVoteDetails] = useState(false);

  // 投票 mutation
  const voteMutation = useMutation({
    mutationFn: async () => {
      if (!currentUser) {
        throw new Error("請先登入");
      }
      
      const data = {
        userId: currentUser.id,
        restaurantId
      };
      
      return apiRequest("POST", "/api/votes", data).then(res => res.json());
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/votes/restaurants'] });
      queryClient.invalidateQueries({ queryKey: [`/api/votes/users/${currentUser?.id}`] });
      
      toast({
        title: "投票成功",
        description: "你已成功為這家餐廳投票",
      });
    },
    onError: (error: any) => {
      // 預設的用戶友好錯誤訊息
      let errorMessage = "發生錯誤，請稍後再試";
      
      try {
        // 嘗試解析後端返回的錯誤訊息，從responseJSON中提取
        if (error.response && typeof error.response.json === 'function') {
          error.response.json().then((data: any) => {
            if (data && data.message) {
              toast({
                title: "投票失敗",
                description: data.message,
                variant: "destructive",
              });
            }
          });
          return; // 提前返回，避免顯示兩次錯誤
        } 
        
        // 後備：如果有錯誤訊息直接使用
        if (error.message && !error.message.includes("400") && !error.message.includes("failed")) {
          errorMessage = error.message;
        }
      } catch (parseError) {
        // 如果解析錯誤訊息時發生錯誤，使用預設訊息
      }
      
      toast({
        title: "投票失敗",
        description: errorMessage,
        variant: "destructive",
      });
    }
  });
  
  // 取消投票 mutation
  const cancelVoteMutation = useMutation({
    mutationFn: async () => {
      if (!currentUser) {
        throw new Error("請先登入");
      }
      
      const data = {
        userId: currentUser.id,
        restaurantId
      };
      
      return apiRequest("DELETE", "/api/votes", data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/votes/restaurants'] });
      queryClient.invalidateQueries({ queryKey: [`/api/votes/users/${currentUser?.id}`] });
      
      toast({
        title: "取消投票成功",
        description: "你已成功取消為這家餐廳的投票",
      });
    },
    onError: (error: any) => {
      // 預設的用戶友好錯誤訊息
      let errorMessage = "發生錯誤，請稍後再試";
      
      try {
        // 嘗試解析後端返回的錯誤訊息，從responseJSON中提取
        if (error.response && typeof error.response.json === 'function') {
          error.response.json().then((data: any) => {
            if (data && data.message) {
              toast({
                title: "取消投票失敗",
                description: data.message,
                variant: "destructive",
              });
            }
          });
          return; // 提前返回，避免顯示兩次錯誤
        } 
        
        // 後備：如果有錯誤訊息直接使用
        if (error.message && !error.message.includes("400") && !error.message.includes("failed")) {
          errorMessage = error.message;
        }
      } catch (parseError) {
        // 如果解析錯誤訊息時發生錯誤，使用預設訊息
      }
      
      toast({
        title: "取消投票失敗",
        description: errorMessage,
        variant: "destructive",
      });
    }
  });

  // 點擊投票按鈕
  const handleVoteClick = () => {
    if (!currentUser) {
      toast({
        title: "請先登入",
        description: "登入後才能進行投票",
        variant: "destructive",
      });
      return;
    }
    
    if (hasVoted) {
      cancelVoteMutation.mutate();
    } else {
      voteMutation.mutate();
    }
  };

  const isLoading = voteMutation.isPending || cancelVoteMutation.isPending;
  
  // 點擊投票數顯示詳情
  const handleVoteDetailsClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // 防止觸發投票按鈕的點擊
    setShowVoteDetails(true);
  };
  
  return (
    <div>
      {/* 投票按鈕 */}
      <Button
        variant={hasVoted ? "default" : "outline"}
        size="sm"
        className={`flex items-center space-x-1 rounded-sm font-serif vote-btn min-w-[120px] h-9 ${className} 
                    ${hasVoted ? "bg-primary text-primary-foreground hover:bg-primary/90" : "border-primary/40 hover:border-primary/70"} 
                    ${!currentUser ? "bg-muted hover:bg-muted/80 text-muted-foreground border-muted cursor-pointer" : ""}`}
        onClick={handleVoteClick} 
        disabled={isLoading} 
        title={!currentUser ? "請先登入以進行投票" : hasVoted ? "點擊取消投票" : "點擊投票"}
      >
        {isLoading ? (
          <span className="animate-spin">⟳</span>
        ) : !currentUser ? (
          <>
            <ThumbsUp className="h-4 w-4 opacity-70 flex-shrink-0" />
            <span>請登入後投票 ({voteCount})</span>
          </>
        ) : hasVoted ? (
          <>
            <Check className="h-4 w-4 opacity-90 flex-shrink-0" />
            <span>已投票 ({voteCount})</span>
          </>
        ) : (
          <>
            <ThumbsUp className="h-4 w-4 opacity-90 flex-shrink-0" />
            <span>投票 ({voteCount})</span>
          </>
        )}
      </Button>
      
      {/* 投票詳情對話框 - 由於管理員操作區域已有投票詳情按鈕，這裡不再顯示按鈕 */}
      <VoteDetailsDialog
        restaurantId={restaurantId}
        restaurantName={restaurantName}
        isOpen={showVoteDetails}
        onClose={() => setShowVoteDetails(false)}
      />
    </div>
  );
}