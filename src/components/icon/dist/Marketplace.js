const Marketplace = ({color, size, className}) => {
  return (
    <span
      className={`svg-icon ${color ? 'svg-icon-' + color : ''} ${
        className || ''
      } svg-icon-${size || 'x'}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="27.957"
        height="25.627"
        viewBox="0 0 27.957 25.627"
      >
        <g id="Group_6047" data-name="Group 6047" transform="translate(0 -1)">
          <g
            id="Group_6040"
            data-name="Group 6040"
            transform="translate(0 5.077)"
          >
            <path
              id="Path_2209"
              data-name="Path 2209"
              d="M27.083,6.247H.874a.874.874,0,0,1,0-1.747h26.21a.874.874,0,0,1,0,1.747Z"
              transform="translate(0 -4.5)"
            />
          </g>
          <g
            id="Group_6041"
            data-name="Group 6041"
            transform="translate(19.943 5.077)"
          >
            <path
              id="Path_2210"
              data-name="Path 2210"
              d="M21.127,15.566a4.011,4.011,0,0,1-4.007-4.007V5.374a.874.874,0,0,1,.874-.874h6.268a.874.874,0,0,1,.872.874v6.185A4.011,4.011,0,0,1,21.127,15.566ZM18.866,6.247v5.312a2.26,2.26,0,0,0,4.52,0V6.247Z"
              transform="translate(-17.12 -4.5)"
            />
          </g>
          <g
            id="Group_6042"
            data-name="Group 6042"
            transform="translate(13.105 5.077)"
          >
            <path
              id="Path_2211"
              data-name="Path 2211"
              d="M15.543,15.566a4.3,4.3,0,0,1-4.293-4.293v-5.9a.874.874,0,0,1,.874-.874H18.96a.874.874,0,0,1,.874.874v5.9a4.3,4.3,0,0,1-4.291,4.293ZM13,6.247v5.026a2.545,2.545,0,0,0,5.091,0V6.247Z"
              transform="translate(-11.25 -4.5)"
            />
          </g>
          <g
            id="Group_6043"
            data-name="Group 6043"
            transform="translate(6.267 5.077)"
          >
            <path
              id="Path_2212"
              data-name="Path 2212"
              d="M9.673,15.566A4.3,4.3,0,0,1,5.38,11.274v-5.9A.874.874,0,0,1,6.254,4.5h6.838a.874.874,0,0,1,.874.874v5.9a4.3,4.3,0,0,1-4.293,4.293ZM7.128,6.247v5.026a2.545,2.545,0,0,0,5.091,0V6.247Z"
              transform="translate(-5.38 -4.5)"
            />
          </g>
          <g
            id="Group_6044"
            data-name="Group 6044"
            transform="translate(0 5.077)"
          >
            <path
              id="Path_2213"
              data-name="Path 2213"
              d="M4.007,15.566A4.011,4.011,0,0,1,0,11.559V5.374A.874.874,0,0,1,.874,4.5H7.142a.874.874,0,0,1,.874.874v6.185A4.012,4.012,0,0,1,4.007,15.566ZM1.747,6.247v5.312a2.26,2.26,0,1,0,4.52,0V6.247Z"
              transform="translate(0 -4.5)"
            />
          </g>
          <g
            id="Group_6045"
            data-name="Group 6045"
            transform="translate(0 17.308)"
          >
            <path
              id="Path_2214"
              data-name="Path 2214"
              d="M24.754,24.319H3.2a3.206,3.206,0,0,1-3.2-3.2V15.874a.874.874,0,0,1,1.747,0v5.242A1.458,1.458,0,0,0,3.2,22.572h21.55a1.458,1.458,0,0,0,1.456-1.456V15.874a.874.874,0,0,1,1.747,0v5.242A3.206,3.206,0,0,1,24.754,24.319Z"
              transform="translate(0 -15)"
            />
          </g>
          <g id="Group_6046" data-name="Group 6046" transform="translate(0 1)">
            <path
              id="Path_2215"
              data-name="Path 2215"
              d="M.874,8.28A.873.873,0,0,1,0,7.407V4.2A3.206,3.206,0,0,1,3.2,1h21.55a3.206,3.206,0,0,1,3.2,3.2V6.145a.874.874,0,0,1-1.747,0V4.2a1.458,1.458,0,0,0-1.456-1.456H3.2A1.458,1.458,0,0,0,1.747,4.2v3.2A.873.873,0,0,1,.874,8.28Z"
              transform="translate(0 -1)"
            />
          </g>
        </g>
      </svg>
    </span>
  )
}

export default Marketplace
