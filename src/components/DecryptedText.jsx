import React from "react";
import DecryptedText from "./components/DecryptedText";

export default function WhySection() {

return (

<div className="why-section">

<div className="why-inner">

<div className="why-left">

<p className="section-tag">

<DecryptedText
text="WHY WEBXTANT"
animateOn="view"
speed={50}
sequential
/>

</p>

<h2>

<DecryptedText
text="THE AGENCY THAT"
animateOn="view"
speed={30}
sequential
/>

<br />

<span>

<DecryptedText
text="DELIVERS MORE"
animateOn="view"
speed={25}
sequential
/>

</span>

</h2>

</div>

<div className="why-grid">

{[
{
icon:"⚡",
title:"Fast Turnaround",
desc:"We deliver projects on time without sacrificing quality."
},

{
icon:"💬",
title:"Clear Communication",
desc:"We keep you updated at every stage."
},

{
icon:"🎯",
title:"Results Focused",
desc:"Designed for leads, growth and conversions."
},

{
icon:"🔧",
title:"Post-Launch Support",
desc:"Ongoing maintenance & support."
}

].map((item,i)=>(

<div className="why-card" key={i}>

<div className="icon-bg">
{item.icon}
</div>

<h4>{item.title}</h4>

<p>{item.desc}</p>

</div>

))}

</div>

</div>

</div>

)
}