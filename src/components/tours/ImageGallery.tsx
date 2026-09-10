"use client";

import Image from "next/image";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Images } from "lucide-react";
import { cn } from "@/lib/utils";

export function ImageGallery({ images, alt }: { images: string[]; alt: string }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  function show(i: number) {
    setIndex(i);
    setOpen(true);
  }

  return (
    <>
      <div className="grid grid-cols-4 grid-rows-2 gap-2 overflow-hidden rounded-2xl sm:h-[440px]">
        <button
          onClick={() => show(0)}
          className="relative col-span-4 row-span-2 h-64 sm:col-span-2 sm:row-span-2 sm:h-full"
        >
          <Image src={images[0]} alt={alt} fill sizes="600px" className="object-cover" priority />
        </button>
        {images.slice(1, 5).map((src, i) => (
          <button key={i} onClick={() => show(i + 1)} className="relative hidden h-full sm:block">
            <Image src={src} alt={alt} fill sizes="300px" className="object-cover" />
            {i === 3 && images.length > 5 && (
              <span className="absolute inset-0 flex items-center justify-center gap-2 bg-charcoal-950/50 text-sm font-medium text-white">
                <Images size={16} /> +{images.length - 5}
              </span>
            )}
          </button>
        ))}
        {/* mobile: horizontal scroll thumbnails row */}
        <div className="col-span-4 -mx-1 flex gap-2 overflow-x-auto px-1 no-scrollbar sm:hidden">
          {images.map((src, i) => (
            <button key={i} onClick={() => show(i)} className="relative h-20 w-28 shrink-0 overflow-hidden rounded-xl">
              <Image src={src} alt={alt} fill sizes="120px" className="object-cover" />
            </button>
          ))}
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-charcoal-950/95 p-4">
          <button
            onClick={() => setOpen(false)}
            className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
            aria-label="Close gallery"
          >
            <X size={20} />
          </button>
          <button
            onClick={() => setIndex((i) => (i - 1 + images.length) % images.length)}
            className="absolute left-3 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:left-6"
            aria-label="Previous image"
          >
            <ChevronLeft size={22} />
          </button>
          <div className="relative h-[70vh] w-full max-w-4xl">
            <Image src={images[index]} alt={alt} fill sizes="90vw" className="object-contain" />
          </div>
          <button
            onClick={() => setIndex((i) => (i + 1) % images.length)}
            className="absolute right-3 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:right-6"
            aria-label="Next image"
          >
            <ChevronRight size={22} />
          </button>
          <div className="absolute bottom-6 flex gap-1.5">
            {images.map((_, i) => (
              <span
                key={i}
                className={cn("h-1.5 w-1.5 rounded-full", i === index ? "bg-white" : "bg-white/30")}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
