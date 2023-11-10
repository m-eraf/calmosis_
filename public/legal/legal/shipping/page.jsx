import Footer from '../../Basic/footer'
import Navbar from '../../Basic/navbar'
import React from 'react'

const Shipping = () => {
    return (
        <main className='block'>
            <Navbar />
            <div className='content'>
                <h2 className='out'>Shipping & Returns</h2>

                <div className="one">
                    <h2>Shipping Policy</h2>
                    <p>
                        <span>
                        I’m a shipping policy section. I’m a great place to update your customers about your shipping methods, packaging and costs. Use plain, straightforward language to build trust and make sure that your customers stay loyal!
                        </span>

                        <span>
                        I'm the second paragraph in your shipping policy section. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add details about your policy and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.
                        </span>
                    </p>
                </div>

                <div className="one">
                    <h2>Return & Exchange Policy</h2>
                    <p>
                        <span>
                        I’m a return policy section. I’m a great place to let your customers know what to do in case they’ve changed their mind about their purchase, or if they’re dissatisfied with a product. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.
                        </span>

                        <span>
                        I'm the second paragraph in your return & exchange policy. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add details about your policy and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.
                                                </span>
                    </p>
                </div>
            </div>

            <div className="line" />

            <Footer  />
        </main>
    )
}

export default Shipping