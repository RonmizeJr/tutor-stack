"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Video } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      
      {/* 1. The "Start New" Section */}
      <section className="flex flex-col items-center justify-center space-y-4 p-10 border-2 border-dashed rounded-xl bg-gray-50 dark:bg-zinc-900/50">
        <div className="p-3 bg-green-100 rounded-full dark:bg-green-900">
           <Sparkles className="w-8 h-8 text-green-600 dark:text-green-400" />
        </div>
        <h2 className="text-2xl font-bold">What do you want to teach today?</h2>
        
        {/* The Magic Input */}
        <div className="flex w-full max-w-lg gap-2">
            <input 
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="e.g. Intro to Python, History of Rome..." 
            />
            <Button>Generate</Button>
        </div>
      </section>

      {/* 2. Recent Courses Grid (Empty State for now) */}
      <section>
        <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold">My Courses</h3>
        </div>
        
        {/* Empty State */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* We will map over courses here later */}
            <Card className="flex flex-col items-center justify-center p-6 h-48 text-muted-foreground border-dashed">
                <Video className="w-10 h-10 mb-2 opacity-20" />
                <p>No courses yet.</p>
            </Card>
        </div>
      </section>
    </div>
  );
}