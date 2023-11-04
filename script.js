document.addEventListener("DOMContentLoaded", function() {
    const Boxlayout = (() => {
      const wrapper = document.body,
        sections = [...document.querySelectorAll(".section")],
        closeButtons = [...document.querySelectorAll(".close-section")],
        demoBoxes = [...document.querySelectorAll(".demo-box")],
        expandedClass = "is-expanded",
        hasExpandedClass = "has-expanded-item";
    
      const initEvents = () => {
        sections.forEach((element) => {
          element.addEventListener("click", () => openSection(element));
        });
        demoBoxes.forEach((element) => {
          element.addEventListener("click", () => openSection(element.parentElement));
        });
        closeButtons.forEach((element) => {
          element.addEventListener("click", (event) => {
            event.stopPropagation();
            closeSection(element.parentElement);
          });
        });
      };
    
      const openSection = (element) => {
        if (!element.classList.contains(expandedClass)) {
          element.classList.add(expandedClass);
          wrapper.classList.add(hasExpandedClass);
        }
      };
    
      const closeSection = (element) => {
        if (element.classList.contains(expandedClass)) {
          element.classList.remove(expandedClass);
          wrapper.classList.remove(hasExpandedClass);
        }
      };
    
      return { init: initEvents };
    })();
    
    Boxlayout.init();
  });
  