"use CLient";

import { div } from "framer-motion/client";

const FireSvg = () => {
  return (
   
    <svg style={{width:"150px", transform: "rotate(180deg)"}}
viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
	<defs>
		<filter id="turb" x="-100%" y="-100%" width="300%" height="300%">
			<feTurbulence type="turbulence" baseFrequency="0.06" numOctaves="2.5" result="turbulence" seed="69" />
			<feDisplacementMap in2="turbulence" in="SourceGraphic" scale="35" />
		</filter>
		<filter id="turb2" x="-100%" y="-100%" width="300%" height="300%">
			<feTurbulence type="turbulence" baseFrequency="0.08" numOctaves="1" result="turbulence" seed="169" />
			<feDisplacementMap in2="turbulence" in="SourceGraphic" scale="35" />
		</filter>
		<radialGradient id="grad" cx="50%" cy="100%">
      <stop offset="0%" stop-color="blue" />
      <stop offset="20%" stop-color="orange" />
      <stop offset="60%" stop-color="gold" />
      <stop offset="100%" stop-color="lightyellow" />
	</radialGradient>
	</defs>
	<g>
				<path d="M70 200 h60 l-30 -90z" filter="url(#turb)" fill="url(#grad)">
			<animate attributeName="d" values="M70 200 h60 l-30 -90z; M70 7200 h60 l-30 -90z" dur="100s" begin="0s" repeatCount="indefinite" />
		</path>
		<animateTransform attributeName="transform" attributeType="XML" type="translate" values="0 0; 0 -7000" dur="100s" begin="0s" repeatCount="indefinite" />
	</g>
</svg>

  )
}

export default FireSvg