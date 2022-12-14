const Group = ({color, size, className}) => {
  return (
    <span
      className={`svg-icon ${color ? 'svg-icon-' + color : ''} ${
        className || ''
      } svg-icon-${size || 'x'}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={32}
        height={32}
        viewBox="0 0 32 32"
      >
        <g
          id="Group_5952"
          data-name="Group 5952"
          transform="translate(-160 -172)"
        >
          <g id="Group_5953" data-name="Group 5953">
            <rect
              id="Rectangle_2056"
              data-name="Rectangle 2056"
              width={32}
              height={32}
              transform="translate(160 172)"
              fill="#000000"
            />
            <g
              id="Group_5951"
              data-name="Group 5951"
              transform="translate(161.13 141.984)"
            >
              <path
                id="Path_1934"
                data-name="Path 1934"
                d="M174.053,43.107A5.053,5.053,0,1,0,169,38.053,5.059,5.059,0,0,0,174.053,43.107Zm0-8.364a3.311,3.311,0,1,1-3.311,3.311A3.315,3.315,0,0,1,174.053,34.743Z"
                transform="translate(-159.184)"
              />
              <path
                id="Path_1935"
                data-name="Path 1935"
                d="M380.195,103.389A3.195,3.195,0,1,0,377,100.195,3.2,3.2,0,0,0,380.195,103.389Zm0-4.647a1.452,1.452,0,1,1-1.452,1.452A1.454,1.454,0,0,1,380.195,98.743Z"
                transform="translate(-355.102 -60.283)"
              />
              <path
                id="Path_1936"
                data-name="Path 1936"
                d="M25.8,241H24.448a3.95,3.95,0,0,0-3.583,2.286A7.013,7.013,0,0,0,15.682,241H14.058a7.013,7.013,0,0,0-5.183,2.286A3.95,3.95,0,0,0,5.292,241H3.944A3.937,3.937,0,0,0,0,244.92v6.344a1.707,1.707,0,0,0,1.708,1.7H7.036a2.037,2.037,0,0,0,2.026,1.859H20.677a2.037,2.037,0,0,0,2.026-1.859h5.267A1.768,1.768,0,0,0,29.74,251.2V244.92A3.937,3.937,0,0,0,25.8,241ZM1.743,244.92a2.192,2.192,0,0,1,2.2-2.178H5.292a2.192,2.192,0,0,1,2.2,2.178v.6c-.586,1.526-.465,2.44-.465,5.706H1.743Zm19.226,7.87a.292.292,0,0,1-.292.292H9.063a.292.292,0,0,1-.292-.292V248.03a5.293,5.293,0,0,1,5.287-5.287h1.624a5.293,5.293,0,0,1,5.287,5.287ZM28,251.2c0,.03.325.02-5.286.02,0-3.291.12-4.183-.465-5.706v-.6a2.192,2.192,0,0,1,2.2-2.178H25.8A2.192,2.192,0,0,1,28,244.92Z"
                transform="translate(0 -195.918)"
              />
              <path
                id="Path_1937"
                data-name="Path 1937"
                d="M28.195,103.389A3.195,3.195,0,1,0,25,100.195,3.2,3.2,0,0,0,28.195,103.389Zm0-4.647a1.452,1.452,0,1,1-1.452,1.452A1.454,1.454,0,0,1,28.195,98.743Z"
                transform="translate(-23.548 -60.283)"
              />
            </g>
          </g>
        </g>
      </svg>
    </span>
  )
}

export default Group
