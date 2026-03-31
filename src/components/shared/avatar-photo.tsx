"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

type AvatarPhotoProps = {
  name: string;
  src?: string;
  fallback: string;
  className?: string;
  imageClassName?: string;
  fallbackClassName?: string;
  textClassName?: string;
  sizes?: string;
};

export function AvatarPhoto({
  name,
  src,
  fallback,
  className,
  imageClassName,
  fallbackClassName,
  textClassName,
  sizes = "48px",
}: AvatarPhotoProps) {
  const [imageFailed, setImageFailed] = useState(false);
  const showImage = Boolean(src) && !imageFailed;

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-full shrink-0",
        !showImage && "flex items-center justify-center",
        className,
        !showImage && fallbackClassName
      )}
    >
      {showImage ? (
        <Image
          src={src!}
          alt={`${name} avatar`}
          fill
          sizes={sizes}
          className={cn("object-cover", imageClassName)}
          onError={() => setImageFailed(true)}
        />
      ) : (
        <span className={cn("leading-none", textClassName)}>{fallback}</span>
      )}
    </div>
  );
}
