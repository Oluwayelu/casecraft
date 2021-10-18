import PropTypes, { InferProps } from "prop-types";

function Button({ children, className }: InferProps<typeof Button.propTypes>) {
  return (
    <div
      className={`bg-gradient-to-br from-[#9672FB] to-[#D772FB] px-5 py-3 sm:px-10 sm:py-3 text-lg italic font-medium text-white rounded-full ${
        className && { className }
      }`}
    >
      {children}
    </div>
  );
}

export default Button;

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
