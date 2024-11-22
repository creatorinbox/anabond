"use client";
import { useEffect, useRef, useState } from "react";
import "@/styles/navigation.css";
import Link from "next/link";

const Navigation = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const indicatorRef = useRef<HTMLSpanElement>(null);
  const navItemsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  const handleIndicator = (index: number) => {
    const activeItem = navItemsRef.current[index];
    if (indicatorRef.current && activeItem) {
      // Reset styles for all items
      navItemsRef.current.forEach(item => {
        if (item) {
          item.classList.remove("is-active");
          item.removeAttribute("style");
        }
      });

      // Apply styles to the active item and indicator
      indicatorRef.current.style.width = `${activeItem.offsetWidth}px`;
      indicatorRef.current.style.left = `${activeItem.offsetLeft}px`;
      indicatorRef.current.style.backgroundColor =
        activeItem.getAttribute("active-color") || "transparent";

      activeItem.classList.add("is-active");
      activeItem.style.color = activeItem.getAttribute("active-color") || "";
    }
  };

  useEffect(() => {
    handleIndicator(activeIndex);
  }, [activeIndex]);

  const menuArray = [
    {lable:"Home", link:"/"}, 
    {lable:"About", link:"/about-us"}, 
    {lable:"R&D", link:"/r&d"}, 
    {lable:"Products", link:"/products"}, 
    {lable:"Media", link:"/media"}, 
    {lable:"Blog", link:"/blog"},
  ]
  return (
    <nav className="nav">
      {menuArray?.map(
        (item, index) => (
          <Link
            key={item.lable}
            href={item.link}
            className={`nav-item ${index === activeIndex ? "is-active" : ""}`}
            active-color={getActiveColor(index)}
            ref={(el) => {
              navItemsRef.current[index] = el;
            }}
            onClick={() => setActiveIndex(index)}
          >
            {item.lable}
          </Link>
        )
      )}
      <span className="nav-indicator" ref={indicatorRef}></span>
    </nav>
  );
};

// Utility function to determine the color based on the index
const getActiveColor = (index: number): string => {
  const colors = ["#13A646", "#13A646", "#13A646", "#13A646", "#13A646", "#13A646"];
  return colors[index];
};

export default Navigation;
