import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Video, Sparkles, BookOpen } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-4 py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
          <Sparkles className="w-3 h-3 mr-2 text-yellow-500" />
          Powered by Gemini 1.5 Pro & OpenAI
        </div>

        {/* Headline */}
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl mb-6 max-w-4xl">
          Learn Smarter with{" "}
          <span className="text-primary">AI Video Courses</span>
        </h1>

        {/* Subhead */}
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
          Turn any topic into a complete syllabus, script, and video course in
          minutes. Perfect for educators, creators, and corporate training.
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-4">
          <Link href="/dashboard">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white"
            >
              Get Started <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
          <Link href="#features">
            <Button variant="outline" size="lg">
              How it Works
            </Button>
          </Link>
        </div>

        {/* 2. Visual / Placeholder for the App Interface */}
        <div className="mt-16 w-full max-w-5xl p-2 rounded-xl bg-gray-200/50 ring-1 ring-gray-900/10 lg:rounded-2xl lg:p-4">
          <div className="rounded-lg bg-white shadow-2xl overflow-hidden aspect-video border flex items-center justify-center text-muted-foreground">
            {/* Eventually put a screenshot of your /dashboard here */}
            <div className="text-center">
              <Video className="w-16 h-16 mx-auto mb-4 opacity-20" />
              <p>App Dashboard Preview</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Features Grid */}
      <section id="features" className="py-24 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-3">
            <FeatureCard
              icon={<BookOpen className="w-10 h-10 text-blue-500" />}
              title="AI Syllabus Generation"
              description="Simply type a topic. We structure the chapters, lessons, and learning objectives automatically."
            />
            <FeatureCard
              icon={<Video className="w-10 h-10 text-primary" />}
              title="Instant Video Rendering"
              description="We convert text scripts into full video lessons with AI voiceovers and dynamic visuals."
            />
            <FeatureCard
              icon={<Sparkles className="w-10 h-10 text-purple-500" />}
              title="Interactive Quizzes"
              description="Reinforce learning with AI-generated quizzes after every chapter."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: any) {
  return (
    <div className="flex flex-col items-center text-center space-y-4 p-6 border rounded-2xl hover:shadow-lg transition-shadow">
      <div className="p-3 bg-gray-100 rounded-full dark:bg-gray-800">
        {icon}
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}
