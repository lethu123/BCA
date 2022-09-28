const News = ({color, size, className}) => {
  return (
    <span
      className={`svg-icon ${color ? 'svg-icon-' + color : ''} ${
        className || ''
      } svg-icon-${size || 'x'}`}
    >
      <svg
        id="Group_6431"
        data-name="Group 6431"
        xmlns="http://www.w3.org/2000/svg"
        width={30}
        height={30}
        viewBox="0 0 30 30"
      >
        <g>
          <path
            id="Path_2223"
            data-name="Path 2223"
            d="M26.768,0H3.232A3.236,3.236,0,0,0,0,3.232V26.768A3.236,3.236,0,0,0,3.232,30H26.768A3.236,3.236,0,0,0,30,26.768V3.232A3.236,3.236,0,0,0,26.768,0ZM3.232,1.758H26.768a1.476,1.476,0,0,1,1.475,1.475v4.3H1.758v-4.3A1.476,1.476,0,0,1,3.232,1.758ZM26.768,28.242H3.232a1.476,1.476,0,0,1-1.474-1.475V9.289H28.242V26.768A1.476,1.476,0,0,1,26.768,28.242Zm0,0"
            fill="#b5b5c3"
          />
          <path
            id="Path_2224"
            data-name="Path 2224"
            d="M129.41,66.023h13.18a.879.879,0,0,0,0-1.758H129.41a.879.879,0,0,0,0,1.758Zm0,0"
            transform="translate(-121 -60.5)"
            fill="#b5b5c3"
          />
          <path
            id="Path_2225"
            data-name="Path 2225"
            d="M65.145,214.391H68.91a.879.879,0,0,0,.879-.879v-3.766a.879.879,0,0,0-.879-.879H65.145a.879.879,0,0,0-.879.879v3.766A.879.879,0,0,0,65.145,214.391Zm.879-3.766h2.008v2.008H66.023Zm0,0"
            transform="translate(-60.5 -196.629)"
            fill="#b5b5c3"
          />
          <path
            id="Path_2226"
            data-name="Path 2226"
            d="M206.859,273.133H193.68a.879.879,0,0,0,0,1.758h13.18a.879.879,0,0,0,0-1.758Zm0,0"
            transform="translate(-181.504 -257.129)"
            fill="#b5b5c3"
          />
          <path
            id="Path_2227"
            data-name="Path 2227"
            d="M85.856,337.4H65.145a.879.879,0,0,0,0,1.758H85.856a.879.879,0,0,0,0-1.758Zm0,0"
            transform="translate(-60.5 -317.633)"
            fill="#b5b5c3"
          />
          <path
            id="Path_2228"
            data-name="Path 2228"
            d="M85.856,401.668H65.145a.879.879,0,0,0,0,1.758H85.856a.879.879,0,0,0,0-1.758Zm0,0"
            transform="translate(-60.5 -378.133)"
            fill="#b5b5c3"
          />
          <path
            id="Path_2229"
            data-name="Path 2229"
            d="M206.859,208.867H193.68a.879.879,0,0,0,0,1.758h13.18a.879.879,0,0,0,0-1.758Zm0,0"
            transform="translate(-181.504 -196.629)"
            fill="#b5b5c3"
          />
        </g>
      </svg>
    </span>
  )
}

export default News
