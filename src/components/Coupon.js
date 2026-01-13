import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { applyCoupon } from '../features/coupon/couponSlice'

const Coupon = () => {
  const [code, setCode] = useState('')
  const [percent, setPercent] = useState(0)
  const dispatch = useDispatch()

  const handleApply = () => {
    if (!code || percent <= 0) return
    dispatch(applyCoupon({ code, discountPercent: Number(percent) }))
    setCode('')
    setPercent(0)
  }

  return (
    <div style={{ marginTop: '20px' }}>
      <h3>Apply Coupon</h3>
      <input
        placeholder="Code"
        value={code}
        onChange={e => setCode(e.target.value)}
      />
      <input
        placeholder="Discount %"
        type="number"
        value={percent}
        onChange={e => setPercent(e.target.value)}
      />
      <button onClick={handleApply}>Apply</button>
    </div>
  )
}

export default Coupon
