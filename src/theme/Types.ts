export type SizeCategory = "small" | "medium" | "large";

// --- Color Tokens ---
export type ColorCategory =
  | "main"
  | "support"
  | "neutral"
  | "danger"
  | "warning"
  | "success"
  | "info"
  | string; // Allow custom categories from consuming project

export interface ColorTokenValues {
  default: string;
  hover: string;
  active: string;
  disabled: string;
  disabledOpacity?: string; // Optional opacity
  // Add other states if needed (e.g., focus)
}

export type ColorTokens = Record<ColorCategory, ColorTokenValues>;

// --- Font Size Tokens ---
export type FontSizeSubset =
  | "size-1"
  | "size-2"
  | "size-3"
  | "size-4"
  | "size-5"
  | "size-6"
  | "size-7"
  | "size-8"
  | "size-9"
  | "size-10"
  | string; // Allow custom sizes

export type FontSizeTokenValues = Record<FontSizeSubset, string>;

export type FontSizeTokens = Record<SizeCategory, FontSizeTokenValues>;

// --- Icon Size Tokens ---
export type IconSizeSubset =
  | "2xs"
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | string; // Allow custom sizes

export type IconSizeTokenValues = Record<IconSizeSubset, string>;

export type IconSizeTokens = Record<SizeCategory, IconSizeTokenValues>;

// --- Spacing/General Size Tokens ---
export type SpacingSizeSubset =
  | "size-0"
  | "size-1"
  | "size-2"
  | "size-3"
  | "size-4"
  | "size-5"
  | "size-6"
  | "size-7"
  | "size-8"
  | "size-9"
  | "size-10"
  | "size-11"
  | "size-12"
  | "size-13"
  | "size-14"
  | "size-15"
  | "size-18"
  | "size-22"
  | "size-26"
  | "size-30"
  | string; // Allow custom sizes

export type SpacingTokenValues = Record<SpacingSizeSubset, string>;

export type SpacingTokens = Record<SizeCategory, SpacingTokenValues>;

// --- Border Radius Tokens --- (Example)
export type BorderRadiusSubset = "sm" | "md" | "lg" | "xl" | "base" | "full" | string;
export type BorderRadiusTokens = Record<BorderRadiusSubset, string>;


// --- The Main Theme Interface ---
export interface Theme {
  colorTokens: ColorTokens;
  fontSizeTokens: FontSizeTokens;
  iconSizeTokens: IconSizeTokens; // Renamed for clarity
  spacingTokens: SpacingTokens;   // Renamed for clarity
  borderRadiusTokens: BorderRadiusTokens; // Added example
  // Add other token categories as needed (e.g., borderWidth, opacity)
}