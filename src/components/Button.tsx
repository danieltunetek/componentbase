// src/components/Button.tsx (in your component base)

import React from "react";
import { useTheme } from "../theme/ThemeContext";
import IconWrapper from "./IconWrapper";
import "./Button.css"; // Keep base structural CSS

// Import only the types needed for props
import {
  ColorCategory,
  SizeCategory,
  IconSizeSubset,
  SpacingSizeSubset, // If needed for specific padding/gap keys
  FontSizeSubset,   // If needed for specific font size keys
} from "../theme/Types";

interface ButtonProps {
  color: ColorCategory; // Use the exported type
  height: "32" | "36" | "42" | "60" | string; // Allow string for custom heights potentially defined in theme
  sizeCategory: SizeCategory; // Use the exported type
  iconLeft?: boolean;
  iconRight?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
  iconLeftPath?: React.ReactNode;
  iconRightPath?: React.ReactNode;
  iconColor?: string; // Allow direct override
  loader?: React.ReactNode;
  disabled?: boolean;
  variant: "filled" | "outlined";
  iconSize?: IconSizeSubset; // Use the exported type
  className?: string;
  borderFull?: boolean;
  // Optional: Explicit keys for padding/gap/font if needed, otherwise derive
  // gapSize?: SpacingSizeSubset;
  // paddingSize?: SpacingSizeSubset;
  // fontSize?: FontSizeSubset;
}

const Button: React.FC<ButtonProps> = ({
  color,
  height,
  sizeCategory,
  iconLeft = false,
  iconRight = false,
  onClick,
  children,
  iconLeftPath,
  iconRightPath,
  iconColor,
  loader,
  disabled = false,
  variant = "filled",
  iconSize,
  className = "",
  borderFull = false,
}) => {
  // Get all theme tokens from context
  const {
    colorTokens,
    fontSizeTokens,
    spacingTokens, // Use spacing tokens for gap/padding
    iconSizeTokens,
    borderRadiusTokens,
  } = useTheme();

  const isIconOnly = !children && (iconLeft || iconRight || loader);

  // Get the color token object for the specified category from the theme
  const colors = colorTokens[color];
  if (!colors) {
      console.warn(`Button: Color category '${color}' not found in provided theme. Styles may not apply correctly.`);
  }

  // --- Determine CSS variables using theme tokens ---
  const cssVariables: Record<string, string | number> = {
    // Direct height prop
    "--button-height": typeof height === 'string' && height.endsWith('px') ? height : `${height}px`,

    // Opacity from theme or fallback
    "--button-opacity-disabled": colors?.disabledOpacity || "0.3", // Use theme value

    // Border radius from theme
    "--button-border-radius": borderFull
      ? borderRadiusTokens?.full || "9999px" // Use theme value
      : borderRadiusTokens?.base || "4px", // Use theme value

    // Gap from theme's spacing tokens (e.g., using 'size-1' for gap)
    "--button-gap": spacingTokens[sizeCategory]?.["size-1"] || "4px", // Example key

    // Padding from theme's spacing tokens (e.g., using 'size-0' and 'size-4')
    "--button-top-padding": spacingTokens[sizeCategory]?.["size-0"] || "0px", // Example key
    "--button-right-padding": spacingTokens[sizeCategory]?.["size-4"] || "16px", // Example key
    "--button-bottom-padding": spacingTokens[sizeCategory]?.["size-0"] || "0px", // Example key
    "--button-left-padding": spacingTokens[sizeCategory]?.["size-4"] || "16px", // Example key

    // Font size from theme's font size tokens (e.g., using 'size-4')
    "--button-font-size": fontSizeTokens[sizeCategory]?.["size-4"] || "16px", // Example key
  };

  // --- Set Variant-Specific CSS Variables using theme tokens ---
  if (variant === "filled") {
    cssVariables["--button-bg-color"] = colors?.default || "#000"; // Use theme value
    cssVariables["--button-bg-color-hover"] = colors?.hover || "#333"; // Use theme value
    cssVariables["--button-bg-color-active"] = colors?.active || "#555"; // Use theme value
    cssVariables["--button-bg-color-disabled"] = colors?.disabled || "#888"; // Use theme value

    // Text colors (often fixed for filled, but could be themed)
    cssVariables["--button-text-color"] = "#fff"; // Or potentially colors?.contrastText || '#fff'
    cssVariables["--button-text-color-hover"] = "#fff";
    cssVariables["--button-text-color-active"] = "#fff";
    cssVariables["--button-text-color-disabled"] = "#fff";

    cssVariables["--button-border-color"] = "transparent";
    cssVariables["--button-border-color-hover"] = "transparent";
    cssVariables["--button-border-color-active"] = "transparent";
    cssVariables["--button-border-color-disabled"] = "transparent";

    // Icon color (respects override, defaults to text color)
    cssVariables["--button-icon-color"] = iconColor || cssVariables["--button-text-color"];
  } else { // Outlined
    cssVariables["--button-bg-color"] = "transparent";
    cssVariables["--button-bg-color-hover"] = "transparent"; // Or maybe a subtle color from theme?
    cssVariables["--button-bg-color-active"] = "transparent"; // Or maybe a subtle color from theme?
    cssVariables["--button-bg-color-disabled"] = "transparent";

    cssVariables["--button-text-color"] = colors?.default || "#000"; // Use theme value
    cssVariables["--button-text-color-hover"] = colors?.hover || "#333"; // Use theme value
    cssVariables["--button-text-color-active"] = colors?.active || "#555"; // Use theme value
    cssVariables["--button-text-color-disabled"] = colors?.disabled || "#888"; // Use theme value

    cssVariables["--button-border-color"] = colors?.default || "#000"; // Use theme value
    cssVariables["--button-border-color-hover"] = colors?.hover || "#333"; // Use theme value
    cssVariables["--button-border-color-active"] = colors?.active || "#555"; // Use theme value
    cssVariables["--button-border-color-disabled"] = colors?.disabled || "#888"; // Use theme value

    // Icon color (respects override, defaults to text color)
    cssVariables["--button-icon-color"] = iconColor || cssVariables["--button-text-color"];
  }

  // Determine icon size using theme's iconSizeTokens
  // Fallback logic might need adjustment based on how height relates to icon sizes in your theme
  const effectiveIconSize: IconSizeSubset =
    iconSize ||
    (() => {
      // Example: Map height to a default icon size key if not provided
      switch (height) {
        case "32": return iconSizeTokens[sizeCategory]?.xs || "xs";
        case "36": return iconSizeTokens[sizeCategory]?.sm || "sm";
        case "42": return iconSizeTokens[sizeCategory]?.md || "md";
        case "60": return iconSizeTokens[sizeCategory]?.lg || "lg";
        default:   return iconSizeTokens[sizeCategory]?.md || "md"; // Default fallback
      }
    })();

  return (
    <button
      className={`button button--${variant} ${
        isIconOnly ? "icon-only" : ""
      } ${className}`} // Removed body-short-sm, should be handled by consuming project or base CSS
      disabled={disabled}
      onClick={disabled ? undefined : onClick}
      style={cssVariables as React.CSSProperties}
    >
      {iconLeft && iconLeftPath && !loader && (
        <IconWrapper
          className="icon-left" // More specific class
          size={effectiveIconSize}
          sizeCategory={sizeCategory}
        >
          {iconLeftPath}
        </IconWrapper>
      )}

      {loader && (
        <IconWrapper
          className="loader-wrapper"
          size={effectiveIconSize}
          sizeCategory={sizeCategory}
        >
          {loader}
        </IconWrapper>
      )}

      {children && <span className="button-text">{children}</span>}

      {iconRight && iconRightPath && !loader && (
        <IconWrapper
          className="icon-right" // More specific class
          size={effectiveIconSize}
          sizeCategory={sizeCategory}
        >
          {iconRightPath}
        </IconWrapper>
      )}
    </button>
  );
};

export default Button;
