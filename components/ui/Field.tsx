import type { ComponentPropsWithoutRef, ReactNode } from "react";

type LabelProps = {
  htmlFor?: string;
  children: ReactNode;
  required?: boolean;
};

export function FieldLabel({ htmlFor, children, required }: LabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-[13px] font-medium text-ink mb-2 font-body"
    >
      {children}
      {required && <span className="text-accent ml-1">*</span>}
    </label>
  );
}

const fieldClasses =
  "block w-full px-4 py-[14px] text-[15px] font-body text-ink bg-paper border border-rule-strong rounded-[2px] transition-colors duration-150 ease-out focus:outline-none focus:border-accent placeholder:text-ink-light";

export function Input(props: ComponentPropsWithoutRef<"input">) {
  const { className = "", ...rest } = props;
  return <input className={`${fieldClasses} ${className}`} {...rest} />;
}

export function Textarea(props: ComponentPropsWithoutRef<"textarea">) {
  const { className = "", rows = 5, ...rest } = props;
  return (
    <textarea
      rows={rows}
      className={`${fieldClasses} resize-y min-h-[120px] ${className}`}
      {...rest}
    />
  );
}

export function Select(props: ComponentPropsWithoutRef<"select">) {
  const { className = "", children, ...rest } = props;
  return (
    <select className={`${fieldClasses} appearance-none pr-10 ${className}`} {...rest}>
      {children}
    </select>
  );
}

type FieldHelpProps = {
  children: ReactNode;
  tone?: "default" | "error";
};

export function FieldHelp({ children, tone = "default" }: FieldHelpProps) {
  const color = tone === "error" ? "text-accent" : "text-ink-light";
  return <p className={`mt-2 text-[13px] font-body ${color}`}>{children}</p>;
}
