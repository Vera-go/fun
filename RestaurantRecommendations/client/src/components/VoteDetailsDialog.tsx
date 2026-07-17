import { useQuery } from "@tanstack/react-query";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { RestaurantVoteDetail } from "@/types";
import { useUser } from "./UserContext";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/hooks/use-toast";

interface VoteDetailsDialogProps {
  restaurantId: number;
  restaurantName: string;
  isOpen: boolean;
  onClose: () => void;
}

export function VoteDetailsDialog({ restaurantId, restaurantName, isOpen, onClose }: VoteDetailsDialogProps) {
  const { isAdmin, currentUser } = useUser();
  const { toast } = useToast();
  
  // 特意使用字符串連接而不是模板字符串，以避免isAdmin在變化時自動重新獲取
  const apiUrl = `/api/votes/restaurants/${restaurantId}?isAdmin=${isAdmin ? '1' : '0'}`;
  console.log(`[VoteDetail] 請求 API: ${apiUrl}, isAdmin=${isAdmin}`);
  
  // 獲取投票詳情，包括投票者名單（僅管理者可見）
  const { data: voteDetail, isLoading, isError } = useQuery<RestaurantVoteDetail>({
    queryKey: [apiUrl],
    enabled: isOpen && !!restaurantId, // 只有在對話框打開時才發出請求
    refetchOnWindowFocus: false,
    retry: 1
  });
  
  console.log(`[VoteDetail] 餐廳=${restaurantId}, 用戶=${currentUser?.name}, 管理員=${isAdmin ? '是' : '否'}, 投票者:`, voteDetail?.voters);

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-md bg-card border border-border/50 rounded-sm">
        <DialogHeader>
          <DialogTitle className="text-xl font-medium text-primary font-serif tracking-wider relative pb-3">
            {restaurantName}
            <div className="h-[1px] w-20 bg-primary/30 absolute bottom-0 left-0"></div>
          </DialogTitle>
          <DialogDescription className="text-muted-foreground font-serif mt-2">
            <span className="text-primary/80">總計投票數：</span> {voteDetail?.voteCount || 0} 票
          </DialogDescription>
        </DialogHeader>
        
        <div className="mt-6">
          {isLoading ? (
            <div className="space-y-3">
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-full" />
            </div>
          ) : isError ? (
            <p className="text-destructive font-serif">載入失敗，請稍後再試</p>
          ) : (
            <div>
              {isAdmin && voteDetail?.voters && voteDetail.voters.length > 0 ? (
                <div className="bg-muted/50 p-4 rounded-sm border border-border/40">
                  <h3 className="font-medium text-primary/80 mb-3 font-serif pb-2 border-b border-primary/20">投票者名單</h3>
                  <ul className="space-y-2 font-serif">
                    {voteDetail.voters.map((voter: { id: number; name: string }) => (
                      <li key={voter.id} className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary/70"></div>
                        {voter.name}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : isAdmin && (!voteDetail?.voters || voteDetail.voters.length === 0) ? (
                <p className="text-muted-foreground italic font-serif bg-muted/50 p-4 rounded-sm border border-border/40">暫無人投票</p>
              ) : !isAdmin && voteDetail?.voteCount && voteDetail.voteCount > 0 ? (
                <p className="text-muted-foreground italic font-serif bg-muted/50 p-4 rounded-sm border border-border/40">只有管理者可以查看投票者名單</p>
              ) : (
                <p className="text-muted-foreground italic font-serif bg-muted/50 p-4 rounded-sm border border-border/40">暫無投票數據</p>
              )}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}