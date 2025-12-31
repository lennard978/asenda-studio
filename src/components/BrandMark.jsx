import React from "react";

export default function BrandMark({ size = 28 }) {
  return (
    <img
      src="/brand/logo/asenda-icon.svg"
      alt="ASENDA Studio"
      width={size}
      height={size}
      className="select-none"
      draggable="false"
    />
  );
}
