'use client'

import { useRef, useState, useEffect } from 'react'
import GetInvolved from '../GetInvolved'
import Footer from '../Footer'

interface RevealFooterSectionProps {
  footerHeight: number // in px
}

export default function RevealFooterSection({ footerHeight }: RevealFooterSectionProps) {

  return (
<section className="reveal-footer">
  <ul>
    <li id="section1">
      <div className="">
        <GetInvolved />
      </div>
    </li>
    <li id="section2" className="-mt-20">
      <div className="">
        <Footer />
      </div>
    </li>
  </ul>
</section>
  )
}