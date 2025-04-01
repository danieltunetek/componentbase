import { default as React } from 'react';
import { ColorCategory, SizeCategory, IconSizeSubset } from '../theme/Types';
interface ButtonProps {
    color: ColorCategory;
    height: "32" | "36" | "42" | "60" | string;
    sizeCategory: SizeCategory;
    iconLeft?: boolean;
    iconRight?: boolean;
    onClick?: () => void;
    children?: React.ReactNode;
    iconLeftPath?: React.ReactNode;
    iconRightPath?: React.ReactNode;
    iconColor?: string;
    loader?: React.ReactNode;
    disabled?: boolean;
    variant: "filled" | "outlined";
    iconSize?: IconSizeSubset;
    className?: string;
    borderFull?: boolean;
}
declare const Button: React.FC<ButtonProps>;
export default Button;
//# sourceMappingURL=Button.d.ts.map