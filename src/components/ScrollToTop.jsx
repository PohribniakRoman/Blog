import { useState } from "react";

export default function ScrollToTop() {
  const [isShowed, uprdateShow] = useState(false);
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 600) {
        uprdateShow(true)
      }
    if (window.pageYOffset < 600) {
        uprdateShow(false)
      }
  });
  return (
    <div className={isShowed ? "srollToTop" : "srollToTop hidden"} onClick={()=>{
        document.querySelector(".banner__nav--logo").scrollIntoView({behavior:"smooth",block:"center"})
    }}>
      <i className="fas fa-chevron-up"></i>
    </div>
  );
}
