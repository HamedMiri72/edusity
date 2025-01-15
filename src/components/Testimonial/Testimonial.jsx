import React from 'react'
import { useRef } from 'react'
import "./Testimonial.css"
import next_btn from "../../assets/next-icon.png"
import back_btn from "../../assets/back-icon.png"
import user_1 from "../../assets/user-1.png"
import user_2 from "../../assets/user-2.png"
import user_3 from "../../assets/user-3.png"
import user_4 from "../../assets/user-4.png"


const Testimonial = () => {

  const slider = useRef();
  let tx = 0;


  const slideForward = () =>{

    if(tx > -50) {
      tx -= 25;
    }

    slider.current.style.transform = `translateX(${tx}%)`
  }

  const slideBackward= () =>{
    if(tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`
  }

  


  return (
    <div className='testimonials'>

        <img src={next_btn} alt="" className='next-btn' onClick={slideForward}/>
        <img src={back_btn} alt="" className='back-btn' onClick={slideBackward}/>

        <div className="slider">

          <ul ref={slider}>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_1} alt="" />
                  <div>
                    <h3>Nasibe Miri</h3>
                    <span>Edusity, Usa</span>
                  </div>
                </div>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ad quos minus esse, saepe mollitia, aliquid laudantium nobis temporibus consectetur non amet voluptatum nihil ipsum commodi, veritatis magnam quis neque?</p>

              </div>
              </li>

              <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_2} alt="" />
                  <div>
                    <h3>Hamed Miri</h3>
                    <span>Edusity, Usa</span>
                  </div>
                </div>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ad quos minus esse, saepe mollitia, aliquid laudantium nobis temporibus consectetur non amet voluptatum nihil ipsum commodi, veritatis magnam quis neque?</p>

              </div>
              </li>

              <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_3} alt="" />
                  <div>
                    <h3>Hamed Miri</h3>
                    <span>Edusity, Usa</span>
                  </div>
                </div>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ad quos minus esse, saepe mollitia, aliquid laudantium nobis temporibus consectetur non amet voluptatum nihil ipsum commodi, veritatis magnam quis neque?</p>

              </div>
              </li>

              <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_4} alt="" />
                  <div>
                    <h3>Hamed Miri</h3>
                    <span>Edusity, Usa</span>
                  </div>
                </div>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ad quos minus esse, saepe mollitia, aliquid laudantium nobis temporibus consectetur non amet voluptatum nihil ipsum commodi, veritatis magnam quis neque?</p>

              </div>
              </li>
          </ul>

        </div>


    </div>
  )
}

export default Testimonial