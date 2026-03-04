"use client";

import Image from "next/image";
import { Play } from "lucide-react";

interface VideoThumbnailProps {
  thumbnail: string;
  title: string;
  name: string;
  onClick: () => void;
}

export function VideoThumbnail({
  thumbnail,
  title,
  name,
  onClick,
}: VideoThumbnailProps) {
  return (
    <div className="group cursor-pointer" onClick={onClick}>
      <div className="relative aspect-video rounded-2xl overflow-hidden bg-muted shadow-lg hover:shadow-xl transition-all duration-300">
        <Image
          src={thumbnail}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors duration-300">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
            <Play className="w-7 h-7 text-primary fill-primary ml-1" />
          </div>
        </div>
      </div>
      <div className="mt-4 space-y-2">
        <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground">{name}</p>
      </div>
    </div>
  );
}
