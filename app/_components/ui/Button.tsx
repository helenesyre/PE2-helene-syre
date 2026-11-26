import { ReactNode } from "react";

// Button variant enum
export enum ButtonVariant {
  small = "px-4 py-1.5",
  medium = "px-4 py-2",
  large = "px-4 py-2.5",
}

// Button icon variant enum
export enum ButtonIconVariant {
  small = "p-2",
  medium = "p-3",
  large = "p-4",
}

// Button variant type based on the keys of the ButtonVariant enum
export type ButtonVariantType = keyof typeof ButtonVariant;

// Button color variant enum
export enum ButtonColorVariant {
  primary = "bg-ocean-500 text-cloud-white-500 hover:bg-ocean-700",
  secondary = "bg-deep-forest-500 text-cloud-white-500 hover:bg-deep-forest-400",
  borderPrimary = "bg-transparent border border-ocean-700 text-ocean-700 hover:bg-ocean-50",
  borderSecondary = "bg-transparent border border-deep-forest-700 text-deep-forest-700 hover:bg-deep-forest-50",
  ghost = "bg-transparent text-deep-forest-500 hover:bg-stone-50",
  delete = "bg-red-900 text-cloud-white-500 hover:bg-red-800",
}
// Button color variant type based on the keys of the ButtonColorVariant enum
export type ButtonColorVariantType = keyof typeof ButtonColorVariant;

// Button width variant enum
export enum ButtonWidthVariant {
  full = "w-full",
  auto = "w-auto",
  fit = "w-fit",
}

// Button width variant type based on the keys of the ButtonWidthVariant enum
export type ButtonWidthVariantType = keyof typeof ButtonWidthVariant;

// Button props type definition
export type ButtonProps = {
  variant: ButtonVariantType;
  color: ButtonColorVariantType;
  width?: ButtonWidthVariantType;
  icon?: boolean;
  href?: string;
  type?: "button" | "submit";
  prefix?: ReactNode;
  suffix?: ReactNode;
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
};

// Button component
export default function Button(props: ButtonProps) {
  const {
    variant = "medium",
    color = "primary",
    width = "auto",
    icon = false,
    disabled = false,
    prefix,
    suffix,
    children,
    href,
    type = "button",
    onClick,
  } = props;

  // Determine the CSS classes for the button
  const variantClass = icon
    ? ButtonIconVariant[variant]
    : ButtonVariant[variant];
  const colorClass = ButtonColorVariant[color];
  const widthClass = ButtonWidthVariant[width];

  // If there are no children, do not render the button
  if (!children) {
    return null;
  }

  // Combine all the CSS classes for the button
  const buttonClasses = `${variantClass} ${colorClass} ${widthClass} text-base font-semibold rounded-full h-fit flex items-center justify-center gap-2 cursor-pointer hover:shadow-md transition-all duration-300 ${props.className ?? ""}`;
  // Define the content of the button, including optional prefix and suffix
  const content = (
    <>
      {prefix && <span className="prefix">{prefix}</span>}
      {children}
      {suffix && <span className="suffix">{suffix}</span>}
    </>
  );

  // Render the button as an anchor tag if an href is provided
  if (href) {
    return (
      <a href={href} className={buttonClasses} aria-disabled={disabled}>
        {content}
      </a>
    );
  }
  // Render the button as a regular button if no href is provided
  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
}
