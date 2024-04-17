"use client";

import React, { useState } from 'react';
import '/styles/styles.css';
import Link from 'next/link';

function FAQItem({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faqItemContainer">
      <div className="faqQuestion" onClick={() => setIsOpen(!isOpen)}>
        <h4>{title}</h4>
        <span className={isOpen ? 'minus' : 'plus'}>{isOpen ? "-" : "+"}</span>
      </div>
      <div className={`faqAnswer ${isOpen ? 'open' : ''}`}>
        {children}
      </div>
    </div>
  );
}
export default function FAQinfo() {
  return (
    <div>
      <div className='container col faqBg'>
        <div className='section col aligned'>
          <div className='w-1/2'>
            <h1>FAQ</h1>
            <p>We value your complete satisfaction at KEJA. Enjoy the flexibility and peace of mind that come along with selecting an innovative, stress-free furnishing company. If you not completely satisfied with the products received, KEJA will make every effort to quickly resolve. We value the opinion of our clients and strive to provide the absolute highest possible level of customer service.</p>
            <Link href="/how_it_works">
              <button className='btn-secondary'>Learn More</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="container col">
        <div className='section col'>
          <div>
            <h2>Furniture as a Service </h2>
            <FAQItem title="How long does the entire process take?">
              <p>For short terms it can take less than 24 hours! Though we prefer to be notified with a few days notice we are able to manage in most cases urgent requests. For longer rentals we usually need 2 weeks to get everything smoothly prepared for you. If you still need everything for yesterday, simply reach out to us as we always have a solution.</p>
            </FAQItem>
            <FAQItem title="What standard of furniture should I expect?">
              <p>All of our furniture is in like-new condition or even brand new fresh out of the box - it may vary and we can clarify at any time but you shouldn't worry about a thing as we would never rent anything that does not feel 100% new and perfect. Our furniture is carefully selected for its stylish design and high-quality craftsmanship. We only provide top quality items that are built to last. Although some items may not be brand new, they will always be in showroom condition.</p>
            </FAQItem>
            <FAQItem title="Can I extend my contract?" >
              <p>You can absolutely extend your rental and we'll offer you discounted rates for the months that you extend. You can also decide to purchase all the furniture at any time!Your contract duration is binding therefore if you need to shorten middway we'll ask you to pay a part of the remaining rental.</p>
            </FAQItem>
            <FAQItem title="How can I pay?">
              <p>However is best for you! We accept bank transfer and all major credit and debit cards.One month’s rental payment* plus the delivery and collection charge is due prior to your order being delivered. A dilapidation deposit is also required prior to delivery and this is held against any damage that may occur during the rental period, please note we accept signs of normal wear and tear. On-going monthly payments will conveniently be made by Direct Debit. *If the hire period is shorter than three months, all hire costs will be taken prior to delivery.</p>
            </FAQItem>
            <br></br>
            <h2>Furnishing Services </h2>
            <FAQItem title="How long does the entire process take?">
              <p>The design process usually varies depending on your wants and needs but usually delivery and assembly is within 2-4 weeks after order confirmation.</p>
            </FAQItem>
            <FAQItem title="Is the design deposit refundable?">
              <p>The €300 design deposit is our way to allocate a designer from our team to work on your project. The initial proposal is just a starting point. It may not be perfect. If you don’t like the designs, just share more feedback about how to improve the next design package. Indicating that you don’t like the designs also helps us understand your style more. We will revise the design as much as we need to achieve the final design package.</p>
            </FAQItem>
            <FAQItem title="How much does it cost?">
              <p>Your price depends on the size of your space (how much furniture you need) as well as which items you select (pricier and higher quality vs. more affordable). Tell your designer about your budget and your needs. They can advise you about the best way to spend your money.</p>
            </FAQItem>
            <FAQItem title="How much is delivery and assembly?">
              <p>The cost of delivery and assembly is wrapped into your final package. All you pay is a single fee to KEJA, which covers the entire installation process including your new furniture, design, delivery, and assembly. We have a network of trusted delivery partners who will deliver and assemble for you.</p>
            </FAQItem>
            <FAQItem title="Why do I need to book a design call?">
              <p>This stage is the most important part of the process! It’s essential that you and your designer connect and discuss your design proposal. You can tell them about any items you like or don’t like, or if you’d like to add more items or try another layout.We find that booking a design call is the fastest and clearest way to communicate with your designer. It is often difficult to put what you like into words, so a conversation is needed for our designers to understand who you are and what you like.You can also give feedback via email, of course. If you have accessibility needs, please let us know in advance so we can accommodate you.</p>
            </FAQItem>
            <FAQItem title="What if I don't like the products?">
              <p>If you wish to return or exchange your products, please do so within 10 days after delivery. Our crew will pick up the pieces you no longer wish to keep and refund the partial price of the returned items. Returning the products will incur a 15% fee due to the additional delivery and disposal fees. Exchanges are free. *Please note that sales are final for special sales or made-to-order items.* Many quality steps are taken to ensure your products arrive to you in excellent condition. It is very important you inspect the purchase upon arrival. If an item is damaged in transit, please send us a photo with a description. We will request our supplier to send out a replacement or have our design team find new options for you. We will make sure you get what you need.</p>
            </FAQItem>
            <br></br>
            <h2>Delivery and assembly </h2>
            <FAQItem title="Where do you deliver?">
              <p>We are currently based in Espoo, Finland and can easily service the Uusimaa region. KEJA relies on a fast and reliable supply chain network to ship products across the country. Your delivery lead time will range from 2 to 4 weeks after your order is placed.</p>
            </FAQItem>
            <FAQItem title="Do you set everything up?">
              <p>Yes. The delivery team will arrive with specific instructions about your furniture and your layout. They will bring the tools to unpack and assemble everything in your design package.Your movers will also collect and remove all packaging debris associated with the installation process (styrofoam, cardboard boxes, bubble wrap, etc.). They will leave your space tidy. Note that some items, such as picture frames, may require additional service to mount and frame. Our delivery team will not do any mounting.</p>
            </FAQItem>
            <FAQItem title="What don't we do?">
              <p>We don’t mount anything onto walls and ceilings. If you have wall art and mirrors in your package, we will leave the products in your home and we will not be installing them. If you have purchased a move-in kit, we will place all the items onto a kitchen counter or dining table. We will not be placing each item into the cabinets.</p>
            </FAQItem>
            <FAQItem title="How do I schedule delivery?">
              <p>You will work with our Operations team to select the best time slot for you. You can select an early, midday, or afternoon slot to work best with your schedule. It will depend on your schedule and your building, if you live in a condo or apartment.Saturday deliveries are available, but unfortunately we do not deliver on Sundays.Our delivery team can be flexible to meet your needs. Occasionally movers will get held up at a previous delivery, but they will communicate any delays promptly. Our Operations team is available to you via phone and email on delivery day should any problems arise.</p>
            </FAQItem>
            <FAQItem title="What do I need to do before delivery?">
              <p>You are not required to be present when your furniture is delivered as long as there are no personal items in the unit and you alert the property with a permission to enter (if applicable). If you have pets or small children, please make a plan for them.</p>
            </FAQItem>
            <FAQItem title="What happens after delivery?">
              <p>We will send you a complete set of pictures showing the fully furnished house.</p>
            </FAQItem>
            <FAQItem title="Can I remove or change an item(s) after delivery?">
              <p>Our design and ordering process is very thorough so generally you have plenty of opportunity to change items before installation. We will assist you in ensuring that the furnishings chosen are fully coordinated and fit perfectly within the living space so changes are not usually necessary. If however, you or your tenant does not want a particular item, as long as it is unused and in its original condition, it can, after a thorough inspection, be replaced or changed. There might be a restocking fee for removing an unwanted item.</p>
            </FAQItem>
          </div>
        </div>
      </div>
    </div>
  );
}