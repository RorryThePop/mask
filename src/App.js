import React, {useState} from "react";

import Images from './images/imageContainer'
import MyButton from "./components/UI/MyButton";
import BidButton from "./components/UI/BidButton";
import ChoserBtn from "./components/UI/ChoserBtn";
import LikeCounter from "./components/LikeCounter";


function App() {

  return (
    <div className="App">
        <section>
            <div className='container'>
                <h1>MA<span>S</span>K<span>S</span> NFT</h1>
                <div className='main'>
                    <div className='main__content'>
                        <img src={Images.MainImg} alt=''/>
                    </div>
                    <div className='main__user'>
                        <div className='main__user-top'>
                            <h5>@cameron</h5>
                            <h3>Sometimes <br/>Typhoons Come</h3>
                            <div className='main__buttons'>
                                <LikeCounter/>
                                <MyButton>More info</MyButton>
                            </div>
                        </div>
                        <BidButton>Place a bid</BidButton>
                        <div className='main__user-bottom'>
                            <div className='main__user-start'>
                                <p>Minimum bid</p>
                                <strong>10.23 ETH</strong>
                                <p>$720</p>
                            </div>
                            <div className='main__user-end'>
                                <p>Auction ending in</p>
                                <strong>23 : 43 : 21</strong>
                                <p>$720</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='clicker'>
                {/*Реализую кликер с помощью вставкой изображений в DOM дерево в связи с тем,*/}
                {/*что в модуль поиска масок по ключевым словам может быть важен, если буду уверен,*/}
                {/*что нам не обязательно использовать кликер из картинок для CEO, то использовал бы вставку через*/}
                {/*background*/}
                <div className='clicker-images'>
                    <img src={Images.chooser1} alt=''/>
                </div>
                <div className='clicker-images'>
                    <img src={Images.chooser2} alt=''/>
                </div>
                <div className='clicker-images'>
                    <img src={Images.chooser4} alt=''/>
                </div>
                <div className='clicker-images'>
                    <img src={Images.chooser3} alt=''/>
                </div>
            </div>
            <div className='container__bottom'>
                <MyButton>Connect Wallet</MyButton>
                <MyButton>Add Mask</MyButton>
            </div>
        </section>

    </div>
  );
}

export default App;
