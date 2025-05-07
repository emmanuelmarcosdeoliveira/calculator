export function Container({ children, className, ...props }) {
  return (
    <div
      className={`bg-(--background)  shadow-(--shadow) rounded-2xl ${
        className ? className : ""
      }`}
      {...props}
    >
      {children}
    </div>
  );
}
