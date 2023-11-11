import Footer from '../Basic/footer'
import Navbar from '../Basic/navbar'
import React from 'react'

const About = () => {
    return (
        <main className='about'>
            <Navbar />
            <img src="flower_about.png" className='bg-flower' alt="" />
            <div className="content">
                <div className="two md:flex row sm:pb-16 xs:pb-8 pb-12">
                    <div className="text">
                        <h2>Hey There !!</h2>
                        <p>Hey there, cherished customers! At Calmosis, we warmly welcome you to a world of tranquil well-being and natural healing. Discover the serenity of our "Make in India" products, thoughtfully crafted with the highest quality to soothe stress, promote restful sleep, and provide gentle pain relief. Embrace the transformative power of Ayurveda and hemp, and embark on a journey of holistic wellness with us. Thank you for being a part of our calming oasis; we're excited to have you on board! 🌿✨</p>
                    </div>
                    <div className="image">
                        <img className='w-[300vh]' src="./abouy.jpg" alt="" />
                    </div>
                </div>

                <div className="one sm:pb-16 xs:pb-8 pb-12">
                    <h2>All About Us</h2>
                    <p>
                        <span>
                        In 2023, we launched Calmosis, a "Make in India" wellness startup in Bangalore, driven by a shared mission to address stress and sleep issues prevalent in our fast-paced lives. As Bangaloreans ourselves, we understood the challenges of urban living and the need for natural solutions.
                        </span>

                        <span>
                        Drawing from the wisdom of Ayurveda and the potential of hemp, we curated products that offered relief from stress and promoted restful sleep. Calmosis became a tranquil oasis, providing a sense of calmness amidst the chaos of daily life.
                        </span>

                        <span>
                        With each product launch, the positive response from our community fueled our passion to make a difference. Proud of our Indian heritage, we embraced our roots and continued to empower individuals to embrace holistic well-being.
                        </span>

                        <span>
                        As a new brand, we embarked on a journey of compassion and innovation, touching lives and spreading hope for a healthier, more harmonious life. Calmosis stands as a beacon of wellness, inviting everyone to experience the transformative power of natural healing.
                        </span>
                    </p>
                </div>
                <div className="two md:flex row sm:pb-16 xs:pb-8 pb-12">
                    <div className="text">
                        <h2>Our Mission!</h2>
                        <p>"Our mission is to inspire a worldwide shift from allopathy to Ayurveda, embracing its inherent natural approach. Through pioneering research and development, we seek to nurture holistic well-being, empower Indian farmers, and cultivate healthier, more balanced lives."</p>
                    </div>
                    <div className="image">
                        <img className='w-[200vh]' src="./about.png" alt="" />
                    </div>
                </div>
                <div className="one">   
                    <h2>Legal</h2>
                    <p>
                        <span>
                        [Last Revised: 27 -08 - 2023]Vijaya (Cannabis Sativa Linn.): An Overview of the Indian Regulatory LandscapeBefore we delve into the legal aspects surrounding Cannabis-based medicines, please be aware that all Ayurvedic medicines manufactured by Calmosis are licensed under the Drugs & Cosmetics Act, 1940, in accordance with AYUSH laws and guidelines. Our products are manufactured under License No. [Insert License Number] in [Insert Location] under the state AYUSH department.
                        </span>

                        <span>
                        Now, let's explore the regulatory landscape concerning Cannabis, also known as Vijaya, in India. Vijaya has been an integral part of India's cultural and historical heritage. For centuries, this plant has been utilized for its medicinal and nutritional properties, addressing various health concerns such as pain relief, insomnia, nausea alleviation, digestion, and vitality enhancement, among others. The therapeutic applications of Vijaya and its formulations are documented in prominent Ayurvedic texts like Bhavprakash Nighantu, Nighantu Adarsh, Shodhal Nighantu, and more.
                        </span>

                        <span>
                        However, it's important to note that globally, during the 19th century, Cannabis was categorized as a controlled narcotic substance. Consequently, medicines derived from Cannabis became subject to strict regulations worldwide. In India, the regulation of Cannabis-based medicines was initially governed by The Dangerous Drugs Act, 1930, and presently, medicines containing Cannabis leaf extracts are regulated under The Drugs and Cosmetics Act, 1940 (DCA).
                        </span>

                        <span>
                        So, what is permissible and what is not?"Cannabis" has been defined in section 2(iii) of the NDPS Act, 1985 as:(a) ganja, which refers to the flowering or fruiting tops of the cannabis plant (excluding the seeds and leaves when not accompanied by the tops), by any name or designation;(b) charas, which denotes the isolated resin, regardless of its form, whether crude or refined, extracted from the cannabis plant, and also encompasses concentrated preparations and resin known as hashish oil or liquid hashish; and(c) any mixture, with or without any neutral material, that includes any of the aforementioned forms of cannabis, or any beverage made from them;
                        </span>

                        <span>
                        Examining the above definition clarifies the narcotic aspects of the Cannabis plant. This implies that seeds and leaves (when not accompanied by the flowering or fruiting tops) are non-narcotic and do not fall under the jurisdiction of the act. Calmosis, in alignment with this requirement, manufactures all products using Vijaya seeds and/or leaves (commonly known as 'Bhang') as ingredients. Consequently, Ayurvedic medicines that contain Bhang and/or Vijaya seeds as ingredients are not subject to regulation as narcotic drugs under the NDPS Act.
                        </span>

                        <span>
                        While we acknowledge the social stigma surrounding the primary ingredient of our product, we wish to emphasize that our products are exclusively intended for therapeutic, medicinal, and nutritional purposes only.Note: Ayurvedic medicines for oral consumption made from 'Bhang' (Cannabis leaves) should always be taken under medical supervision and with a valid prescription issued by a registered medical practitioner.
                        </span>
                    </p>
                </div>
            </div>

            <div className="line" />

            <Footer  />
        </main>
    )
}

export default About