interface ButtonType extends React.HTMLProps<HTMLButtonElement> {
  mode?: "full" | "border" | "none";
  disabled?: boolean;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
}

function Button({
  mode = "none",
  disabled = false,
  type = "button",
  children,
  ...props
}: ButtonType) {
  const styles = {
    full: "bg-[#F89595] hover:bg-[#F89595] text-white cursor-pointer",
    border:
      "border border-[#F89595] text-[#F89595] hover:border-[#F89595] hover:text-[#F89595] cursor-pointer",
    none: "text-[#F89595] hover:text-[#F89595] cursor-pointer",
    disabledFull: "cursor-not-allowed bg-grey-600 hover:bg-grey-600 text-white",
    disabledBorder:
      "cursor-not-allowed border border-grey-600 text-grey-600 hover:border-grey-600 hover:text-grey-600",
    disabledNone: "cursor-not-allowed text-grey-600 hover:text-grey-600",
  };

  const activeStyle = disabled
    ? mode == "full"
      ? styles.disabledFull
      : mode == "border"
      ? styles.disabledBorder
      : styles.disabledNone
    : mode == "full"
    ? styles.full
    : mode == "border"
    ? styles.border
    : styles.none;

  return (
    <button
      type={type}
      className={` w-full items-center justify-center rounded-md  p-4 py-2 text-base font-medium duration-200 ease-linear  ${activeStyle}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
