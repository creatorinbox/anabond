"use client"

import Button from "./button"
import Navigation from "./navigation"
import { motion } from "framer-motion"

const Header = () => {
  return (
    <motion.div
        className="flex justify-between px-3 shadow-md"
        animate={{y:0}}
        initial={{y:-100}}
    >
    <img src="secondary-logo.svg" alt="anabond-logo" width={150} />
    <div className="flex items-center justify-end">
    <Navigation />
    <div className="hidden md:block">
    <Button text="Call Request" />
    </div>
    </div>
    </motion.div>
  )
}

export default Header