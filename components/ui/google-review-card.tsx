"use client";

import Image from "next/image";
import { Star } from "lucide-react";

interface GoogleReviewCardProps {
  author: string;
  text: string;
  rating: number;
  date: string;
  profilePic?: string;
}

export function GoogleReviewCard({
  author,
  text,
  rating,
  date,
  profilePic,
}: GoogleReviewCardProps) {
  return (
    <div className="bg-background border border-border/60 hover:border-primary/30 rounded-2xl p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group h-full flex flex-col">
      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < rating
                ? "fill-yellow-400 text-yellow-400"
                : "fill-gray-300 text-gray-300"
            }`}
          />
        ))}
      </div>

      {/* Review Text */}
      <p className="text-foreground text-sm leading-relaxed mb-6 italic flex-grow">
        "{text}"
      </p>

      {/* Author Info */}
      <div className="flex items-center gap-3 pt-6 border-t border-border/40">
        {profilePic ? (
          <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
            <Image
              src={profilePic}
              alt={author}
              fill
              className="object-cover"
            />
          </div>
        ) : (
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
            <span className="text-sm font-semibold text-primary">
              {author.charAt(0).toUpperCase()}
            </span>
          </div>
        )}
        <div className="flex-grow">
          <p className="font-semibold text-foreground text-sm">{author}</p>
          <p className="text-xs text-muted-foreground">{date}</p>
        </div>
      </div>
    </div>
  );
}
