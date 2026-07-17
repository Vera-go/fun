import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Restaurant } from "@/types";
import Header from "@/components/Header";
import RestaurantList from "@/components/RestaurantList";
import { Link } from "wouter";
import { CalendarClock, Clock, AlertTriangle, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const { data: restaurants = [] } = useQuery<Restaurant[]>({
    queryKey: ['/api/restaurants'],
  });
  
  // 計算距離截止日期的天數
  const calculateDaysRemaining = (targetDate: string) => {
    const today = new Date();
    const deadline = new Date(2025, targetDate.startsWith("5/") ? 4 : 5, parseInt(targetDate.split("/")[1]));
    const diffTime = deadline.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };
  
  const daysToRecommendDeadline = calculateDaysRemaining("5/29");
  const daysToVoteDeadline = calculateDaysRemaining("6/4");

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/30">
      <Header />
      
      {/* 重要日期提醒橫幅 */}
      <div className="relative bg-gradient-to-r from-amber-50 via-amber-100 to-amber-50 border-y border-amber-200 py-4 mb-8 shadow-sm">
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 h-12 w-1 bg-amber-400 rounded-r-full hidden sm:block"></div>
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 h-12 w-1 bg-amber-400 rounded-l-full hidden sm:block"></div>
        <div className="container mx-auto px-6">
          <div className="relative flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-amber-800">
            <div className="flex items-center">
              <AlertTriangle className="h-4 w-4 mr-2 text-amber-500" />
              <span className="text-sm font-medium">重要日期提醒</span>
            </div>
            <div className="flex items-center">
              <CalendarClock className="h-4 w-4 mr-2 text-amber-500" />
              <span className="text-sm">
                <span className="font-medium">推薦截止日期:</span> 5/29
                <span className="ml-1.5 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800 border border-amber-200">
                  剩餘 {daysToRecommendDeadline} 天
                </span>
              </span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2 text-amber-500" />
              <span className="text-sm">
                <span className="font-medium">最後投票日期:</span> 6/4
                <span className="ml-1.5 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800 border border-amber-200">
                  剩餘 {daysToVoteDeadline} 天
                </span>
              </span>
            </div>
            <div className="flex items-center">
              <Link href="/manual">
                <Button variant="ghost" size="sm" className="flex items-center text-amber-900 hover:text-amber-700 bg-amber-100/50 hover:bg-amber-100 border border-amber-200">
                  <BookOpen className="h-4 w-4 mr-2 text-amber-600" />
                  <span className="text-sm font-medium">使用手冊</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <main className="container mx-auto px-6 py-12">
        {/* 日式風格的標題區塊 */}
        <div className="mb-16 text-center">
          <div className="relative inline-block">
            <h2 className="text-2xl md:text-3xl font-medium text-primary mb-3 font-serif tracking-wide">
              2025 - AOCC 團隊共好餐廳推薦及投票
            </h2>
            <div className="h-[2px] w-24 bg-primary/30 mx-auto"></div>
          </div>
          
          <p className="text-muted-foreground max-w-2xl mx-auto mt-6 font-serif text-sm md:text-base tracking-wide">
            <span className="text-primary/80 font-medium">平均預算：</span>2800/人
            <span className="block mt-1 text-sm opacity-80">
              (平台系統 18+2新人/數據處理 3/品質管理 4+1新人/遠距健康 2，共30人)
            </span>
          </p>
        </div>
        
        {/* 裝飾分隔線 */}
        <div className="japanese-divider mb-12"></div>
        
        <RestaurantList />
      </main>
    </div>
  );
}
