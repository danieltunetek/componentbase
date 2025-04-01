// src/components/IconWrapper.tsx (in your component base)

import React from "react";
import { useTheme } from "../theme/ThemeContext";
// Import only the *types* needed for props, not the token values
import { IconSizeSubset, SizeCategory } from "../theme/Types";

interface IconWrapperProps {
  // Use the types defined in theme/types.ts
  size: IconSizeSubset;
  sizeCategory: SizeCategory;
  children: React.ReactNode;
  color?: string; // Keep for data-attribute or potential direct styling needs
  className?: string;
}

const IconWrapper: React.FC<IconWrapperProps> = ({
  size,
  sizeCategory,
  children,
  color,
  className,
}) => {
  // Get theme tokens from the context provided by the consuming project
  const { iconSizeTokens } = useTheme();

  // Access the correct size value from the theme context
  const dimensions = iconSizeTokens[sizeCategory]?.[size];

  // Handle cases where dimensions might not be found in the provided theme
  if (!dimensions) {
    console.warn(
      `IconWrapper: iconSizeToken not found in the provided theme for sizeCategory='${sizeCategory}', size='${size}'. Falling back to default size '24px'.`
    );
  }

  const combinedClassName = `${color ? "colored-icon-wrapper" : ""} ${
    className || ""
  }`.trim();

  return (
    <div
      className={combinedClassName}
      style={{
        width: dimensions || "24px", // Fallback if dimensions is undefined in theme
        height: dimensions || "24px", // Fallback if dimensions is undefined in theme
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
      // data-icon-color could be used by consuming project's CSS if needed
      data-icon-color={color || ""}
    >
      {children}
    </div>
  );
};

export default IconWrapper;
