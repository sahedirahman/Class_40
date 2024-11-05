import React from 'react'

const Badge = ({className, badgeName}) => {
  return (
    <div className={`font-dm font-bold text-sm bg-black text-white py-3 px-[30px] w-[90px] ${className}`}>{badgeName}</div>
  )
}

export default Badge
