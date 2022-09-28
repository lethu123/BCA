const TitleWithLine = ({color, text, ...rest}) => {
  return (
    <div
      style={{
        position: 'relative',
        paddingLeft: '35px',
      }}
    >
      <span
        style={{
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)',
          left: '0',
          width: '15px',
          height: '32px',
          backgroundColor: color,
          borderRadius: '0 4px',
        }}
      ></span>
      <p {...rest}>{text}</p>
    </div>
  )
}

export default TitleWithLine
