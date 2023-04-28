import { useState } from "react";
import Warlay from "../../../pichers/Warplay.svg";
import Wealthfront from "../../../pichers/Wealthfront.svg";
import MarketSlider from "../../../pichers/market-slider.svg";
import NewWork from "./NewWork/NewWork";
import MyComponent from "./CreateWork/MyComponent";

function MyWorks(props) {
  
  const [works] = useState([
    {title: 'WarplayCloud',url: 'https://tiafk.github.io/Warplaycloud/',image:Warlay},
    {title: 'Slider from market',url: 'https://tiafk.github.io/test47-slider/',image:MarketSlider},
    {title: 'Wealthfront',url: 'https://tiafk.github.io/Wealthffront/',image:Wealthfront},
  ])

  return (
    <div className="work-list">
      <MyComponent />
      {works.map((work) => (
        <NewWork work={work} key={''} />
      ))}
    </div>
  );
}

export default MyWorks;