"use client";

import { Star } from "lucide-react";

interface TestimonialCardProps {
  text: string;
  author: string;
  treatment: string;
  rating?: number;
}

export function TestimonialCard({
  text,
  author,
  treatment,
  rating = 5,
}: TestimonialCardProps) {
  return (
    <div className="bg-background border border-border/60 hover:border-primary/30 rounded-2xl p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group">
      <div className="mb-4 flex gap-1">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-primary text-primary" />
        ))}
      </div>
      <p className="text-foreground font-serif text-lg leading-relaxed mb-6 italic">
        {text}
      </p>
      <div className="space-y-1 pt-6 border-t border-border/40">
        <p className="font-semibold text-foreground">{author}</p>
        <p className="text-sm text-muted-foreground">{treatment}</p>
      </div>
    </div>
  );
}
