import cl from "../Circle.module.scss";
import gsap from "gsap";

export const SetCurrentCircle = (currentPage: number) => {
  const curCircleDot = document.getElementById(`${currentPage}`)!;

  gsap.to(curCircleDot, {
    width: 60,
    height: 60,
    backgroundColor: "white",
    opacity: 1,
    border: "2px solid rgba(0,0,0,0.2)",
  });
  curCircleDot.classList.remove(cl.inactive);
  curCircleDot.classList.add(cl.active);
  if (!curCircleDot.textContent) {
    const content = document.createTextNode(`${currentPage}`);
    curCircleDot.appendChild(content);
  }

  for (let i = 1; i < 7; i++) {
    if (i !== currentPage) {
      const circleDot = document.getElementById(`${i}`)!;
      gsap.to(circleDot, {
        width: 8,
        height: 8,
        backgroundColor: "black",
        opacity: 0.6,
        border: "none",
      });
      circleDot.replaceChildren(document.createTextNode(""));
      circleDot.classList.remove(cl.active);
      circleDot.classList.add(cl.inactive);
    }
  }
};
