"use client"

import { usePathname, useSearchParams } from 'next/navigation'

const Cart = () => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    console.log(pathname);
  return (
    <div>Cart</div>
  )
}

export default Cart