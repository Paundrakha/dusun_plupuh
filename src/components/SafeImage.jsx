"use client";

import { useState } from "react";

const FALLBACK = "/placeholder.svg";

// <img> biasa dengan gambar pengganti bila file foto belum ada / gagal dimuat.
export default function SafeImage({ src, alt = "", ...props }) {
  const [failed, setFailed] = useState(false);

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      {...props}
      src={failed ? FALLBACK : src}
      alt={alt}
      onError={() => setFailed(true)}
    />
  );
}
