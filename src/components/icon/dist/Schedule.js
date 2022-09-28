const Schedule = ({color, size, className}) => {
  return (
    <span
      className={`svg-icon ${color ? 'svg-icon-' + color : ''} ${
        className || ''
      } svg-icon-${size || 'x'}`}
    >
      {/*begin::Svg Icon | path:C:\wamp64\www\keenthemes\legacy\metronic\theme\html\demo3\dist/../src/media/svg/icons\Communication\Archive.svg*/}
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
            d="M4.5,3 L19.5,3 C20.3284271,3 21,3.67157288 21,4.5 L21,19.5 C21,20.3284271 20.3284271,21 19.5,21 L4.5,21 C3.67157288,21 3,20.3284271 3,19.5 L3,4.5 C3,3.67157288 3.67157288,3 4.5,3 Z M8,5 C7.44771525,5 7,5.44771525 7,6 C7,6.55228475 7.44771525,7 8,7 L16,7 C16.5522847,7 17,6.55228475 17,6 C17,5.44771525 16.5522847,5 16,5 L8,5 Z"
            fill="#000000"
          />
        </g>
      </svg>
      {/*end::Svg Icon*/}
    </span>
  )
}

export default Schedule
