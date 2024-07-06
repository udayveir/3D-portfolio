import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className='cta'>
<p className='cta-text'>Have a project or a job in mind? <br className='sm:block hidden'/>
Let's build something amazing together!

</p>

<Link to ="/contact" className="btn">Contact</Link>
    </section>
  )
}

export default CTA
