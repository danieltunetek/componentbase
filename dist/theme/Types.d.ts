export type SizeCategory = "small" | "medium" | "large";
export type ColorCategory = "main" | "support" | "neutral" | "danger" | "warning" | "success" | "info" | string;
export interface ColorTokenValues {
    default: string;
    hover: string;
    active: string;
    disabled: string;
    disabledOpacity?: string;
}
export type ColorTokens = Record<ColorCategory, ColorTokenValues>;
export type FontSizeSubset = "size-1" | "size-2" | "size-3" | "size-4" | "size-5" | "size-6" | "size-7" | "size-8" | "size-9" | "size-10" | string;
export type FontSizeTokenValues = Record<FontSizeSubset, string>;
export type FontSizeTokens = Record<SizeCategory, FontSizeTokenValues>;
export type IconSizeSubset = "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | string;
export type IconSizeTokenValues = Record<IconSizeSubset, string>;
export type IconSizeTokens = Record<SizeCategory, IconSizeTokenValues>;
export type SpacingSizeSubset = "size-0" | "size-1" | "size-2" | "size-3" | "size-4" | "size-5" | "size-6" | "size-7" | "size-8" | "size-9" | "size-10" | "size-11" | "size-12" | "size-13" | "size-14" | "size-15" | "size-18" | "size-22" | "size-26" | "size-30" | string;
export type SpacingTokenValues = Record<SpacingSizeSubset, string>;
export type SpacingTokens = Record<SizeCategory, SpacingTokenValues>;
export type BorderRadiusSubset = "sm" | "md" | "lg" | "xl" | "base" | "full" | string;
export type BorderRadiusTokens = Record<BorderRadiusSubset, string>;
export interface Theme {
    colorTokens: ColorTokens;
    fontSizeTokens: FontSizeTokens;
    iconSizeTokens: IconSizeTokens;
    spacingTokens: SpacingTokens;
    borderRadiusTokens: BorderRadiusTokens;
}
//# sourceMappingURL=Types.d.ts.map