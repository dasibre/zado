import React from 'react'
import { Button } from '@mui/material'

const CommonButton = (props) => {
  const { onClick, buttonName, fullWidth, variant, color, size, startIcon, endIcon, disabled, style, className } = props
  return (
    <>
      <Button
        variant={variant ? variant : "contained"}
        color={color ? color : 'primary'}
        size={size ? size : "medium"}
        onClick={onClick}
        fullWidth={fullWidth}
        startIcon={startIcon}
        endIcon={endIcon}
        disabled={disabled}
        sx={style}
        className={className}
      >
        {buttonName}
      </Button>
    </>
  )
}

export default CommonButton