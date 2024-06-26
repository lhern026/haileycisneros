// src/components/ui/Spotlight.js

import React from "react";
import { cn } from "../../utils/cn"; // Adjust the import path if needed

export const Spotlight = ({ className, fill }) => {
  return (
    <div
      className={cn("absolute w-full h-full bg-gradient-to-t", className)}
      style={{
        background: `radial-gradient(circle, ${fill} 0%, rgba(0,0,0,0) 70%)`,
      }}
    ></div>
  );
};
