'use client';
const ButtonComponent = (props: { clickEvent: any; text: string }) => {
    const { clickEvent, text } = props;
  return (
    <button
      onClick={clickEvent}
      className="px-4 py-2 bg-sky-600 hover:bg-sky-700 text-gray-50 rounded-xl flex items-center gap-2"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
          clipRule="evenodd"
        />
      </svg>
      <span>{text}</span>
    </button>
  );
};
export default ButtonComponent;
