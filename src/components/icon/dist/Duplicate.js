const Duplicate = ({color, size, className}) => {
  return (
    <span
      className={`svg-icon ${color ? 'svg-icon-' + color : ''} ${className || ''} svg-icon-${
        size || 'x'
      }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        version="1.1"
      >
        <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
          <rect x={0} y={0} width={24} height={24} />
          <path
            d="M15.9956071,6 L9,6 C7.34314575,6 6,7.34314575 6,9 L6,15.9956071 C4.70185442,15.9316381 4,15.1706419 4,13.8181818 L4,6.18181818 C4,4.76751186 4.76751186,4 6.18181818,4 L13.8181818,4 C15.1706419,4 15.9316381,4.70185442 15.9956071,6 Z"
            fill="#000000"
            fillRule="nonzero"
            opacity="0.3"
          />
          <path
            d="M10.1818182,8 L17.8181818,8 C19.2324881,8 20,8.76751186 20,10.1818182 L20,17.8181818 C20,19.2324881 19.2324881,20 17.8181818,20 L10.1818182,20 C8.76751186,20 8,19.2324881 8,17.8181818 L8,10.1818182 C8,8.76751186 8.76751186,8 10.1818182,8 Z"
            fill="#000000"
          />
        </g>
      </svg>
    </span>
  )
}

export default Duplicate
