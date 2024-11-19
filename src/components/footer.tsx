"use client"

import FooterMenu from "./footer-menu"

const Footer = () => {
const quickMenu = [
    { Lable: "About us", LinkURI: "#" },
    { Lable: "Products", LinkURI: "#" },
    { Lable: "CSR", LinkURI: "#" },
    { Lable: "R&D", LinkURI: "#" },
    { Lable: "Application Centre", LinkURI: "#" },
    { Lable: "Blog", LinkURI: "#" },
    { Lable: "Media", LinkURI: "#" },
    { Lable: "Contact Us", LinkURI: "#" },
  ]
  const policies = [
    { Lable: "Terms & Conditions", LinkURI: "#" },
    { Lable: "Privacy Policy", LinkURI: "#" },
    { Lable: "Safety Policy", LinkURI: "#" },
    { Lable: "EMS Policy", LinkURI: "#" },
    { Lable: "Quality Policy", LinkURI: "#" }
  ]
  const productSegment = [
    { Lable: "Industry", LinkURI: "#" },
    { Lable: "Chemistry", LinkURI: "#" },
    { Lable: "Application", LinkURI: "#" }
  ]
  return (
    <footer>
      <div
      style={{backgroundImage:"url(footer.webp)"}}
      className="grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-5 relative bg-cover bg-center bg-fixed p-10 pb-20" 
      >


        <div className="grid">
          <img width={100} src="primary-logo.svg" alt="primary-logo" />
        </div>
        <FooterMenu title="Quick Menu" linkArray={quickMenu}/>
        <FooterMenu title="Product Segment" linkArray={productSegment}/>
        <FooterMenu title="Policies" linkArray={policies}/>
        
        </div>
        <div className="flex justify-center items-center w-full h-8 bg-white">
          <p className="text-xs">Copyright © 2022 - Anabond | All Rights Reserved.</p>
        </div>
    </footer>
  )
}

export default Footer