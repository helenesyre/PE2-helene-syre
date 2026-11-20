import { ReactNode } from "react";

// Tag variant enum definition
export enum TagVariant {
  extraSmall = "px-2 py-0.5 text-xs",
  small = "px-2 py-1 text-xs",
  medium = "px-3 py-1 text-sm",
  large = "px-4 py-1 text-base",
}

// Tag icon variant enum definition
export enum TagIconVariant {
  extraSmall = "p-1.5 text-xs",
  small = "p-2 text-xs",
  medium = "p-3 text-sm",
  large = "p-4 text-base",
}
// Tag variant type definition
export type TagVariantType = keyof typeof TagVariant;

// Tag color variant enum definition
export enum TagColorVariant {
  primary = "bg-seafoam-50 border border-seafoam-200 text-ocean-500",
  secondary = "bg-lime-100 border border-lime-500 text-fern-600",
  tertiary = "bg-deep-forest-500 text-cloud-white-500",
  border = "border border-deep-forest-500 text-deep-forest-500",
}
// Tag color variant type definition
export type TagColorVariantType = keyof typeof TagColorVariant;

// Tag props type definition
export type TagProps = {
  variant: TagVariantType;
  color: TagColorVariantType;
  icon?: boolean;
  prefix?: ReactNode;
  suffix?: ReactNode;
  children?: ReactNode;
  className?: string;
};

// Tag component
export default function Tag(props: TagProps) {
  const {
    variant = "medium",
    color = "primary",
    icon = false,
    prefix,
    suffix,
    children,
  } = props;

  // Determine the CSS classes for the tag
  const variantClass = icon ? TagIconVariant[variant] : TagVariant[variant];
  const colorClass = TagColorVariant[color];

  // If there are no children, do not render the tag
  if (!children) {
    return null;
  }

  return (
    <span
      className={`${variantClass} ${colorClass} font-semibold rounded-lg flex gap-1 items-center h-fit w-fit ${props.className ?? ""}`}
    >
      {/* Render the prefix, children, and suffix within the tag */}
      {prefix && <span className="prefix">{prefix}</span>}
      {children}
      {suffix && <span className="suffix">{suffix}</span>}
    </span>
  );
}
