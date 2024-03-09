import { useState } from 'react'

import './App.css'
function Header() {

  return (
    <>
    <header>
      <nav>
        <div className='display__flex'>
          
        <img src="/src/assets/Search.svg" alt="search" />
        <h2>AVION</h2>
        <div className='display'>
        <img src="/src/assets/Shopping--cart.svg" alt="" />
        <img src="/src/assets/User--avatar.svg" alt="" />
        </div>
        </div>
          <ul className='ul__s'>
            <li><a href="#">Plant pots</a></li>
            <li><a href="#">Ceramics</a></li>
            <li><a href="#">Tables</a></li>
            <li><a href="#">Chairs</a></li>
            <li><a href="#">Crockery</a></li>
            <li><a href="#">Tableware</a></li>
            <li><a href="#">Cutlery</a></li>
          </ul>
      </nav>  
    </header>
    <main>
      <div className='big__div'>
        <div className='left__side'>
          <div className='pss'>
          <h1>The furniture brand for the <br /> future, with timeless designs</h1>
          <button className='button__main' >View collection</button>
          <p className='main__p'>A new era in eco friendly furniture with Avelon, the French luxury retail brand <br />
                                  with nice fonts, tasteful colors and a beautiful way to display things digitally <br />
                                  using modern web technologies.</p>
          </div>
        </div>
        <div className='right__side'>
          <img src="/src/assets/Right Image.png" alt="" />
        </div>
      </div>
        <h3>What makes our brand different</h3>
      <section>
        <div className='p__lar'>
          <img src="/src/assets/Delivery.svg" alt="" />
          <p className='p'>Next day as standard</p>
          <p>Order before 3pm and get your order <br />
            the next day as standard</p>
        </div>
        <div className='p__lar'>
          <img src="/src/assets/Checkmark--outline.svg" alt="" />
          <p className='p'>Next day as standard</p>
          <p>Order before 3pm and get your order <br />
            the next day as standard</p>
        </div>
        <div className='p__lar'>
          <img src="/src/assets/Purchase.svg" alt="" />
          <p className='p'>Next day as standard</p>
          <p>Order before 3pm and get your order <br />
            the next day as standard</p>
        </div>
        <div className='p__lar'>
          <img src="/src/assets/Sprout.svg" alt="" />
          <p className='p'>Next day as standard</p>
          <p>Order before 3pm and get your order <br />
            the next day as standard</p>
        </div>
      </section>
      <section className="section__2">
        <div>
          <h2 className='h2'>New ceramics</h2>
          <div className='flex'>
            <div className='small__div'>
              <img className='small__img' src="/src/assets/png/Parent.png" alt="" />
                <p className='yozuv'>The Dandy chair</p>
                <p className='euro'>£250</p>
            </div>
            <div className='small__div'>
              <img className='small__img' src="/src/assets/png/Parent (1).png" alt="" />
                <p className='yozuv'>Rustic Vase Set</p>
                <p className='euro'>£155</p>
            </div>
            <div className='small__div'>
              <img className='small__img' src="/src/assets/png/Parent (2).png" alt="" />
                <p className='yozuv'>The Silky Vase</p>
                <p className='euro'>£125</p>
            </div>
            <div className='small__div'>
              <img className='small__img' src="/src/assets/png/Parent (3).png" alt="" />
                <p className='yozuv'>The Lucy Lamp</p>
                <p className='euro'>£399</p>
            </div>
          </div>
          <button className='button__small'>View collection</button>
        </div>
      </section>
      <section className="section__3">
        <div>
          <h2 className='h2'>Our popular products</h2>
          <div className='flex'>
            <div className='small__div'>
              <img className='large__img' src="/src/assets/png/Large.png" alt="" />
                <p className='yozuv'>The Poplar suede sofa</p>
                <p className='euro'>£980</p>
            </div> 
            <div className='small__div'>
              <img className='small__img' src="/src/assets/png/Parent.png" alt="" />
              <p className='yozuv'>The Dandy chair</p>
                <p className='euro'>£250</p>
            </div>
            <div className='small__div'>
              <img className='small__img' src="/src/assets/png/Parent (4).png" alt="" />
              <p className='yozuv'>The Dandy chair</p>
                <p className='euro'>£250</p>
            </div>
          </div>
          <button className='button__small'>View collection</button>
        </div>
      </section>
      <div className='small_div'>
        <p className='join'>Join the club and get the benefits</p>
        <p className='sign'>Sign up for our newsletter and receive exclusive offers on new <br /> ranges, sales, pop up stores and more</p>
        <div className='inpt'>
        <input type="email" placeholder='your@email.com'/>
        <button className='signup'>Sign up</button>
        </div>
      </div>
    </main>
    </>
  )
}
export default Header
