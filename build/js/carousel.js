document.addEventListener("DOMContentLoaded", () => {
  const wrapper  = document.getElementById("carouselWrap");
  const track    = document.getElementById("carousel");
  const dots     = Array.from(document.querySelectorAll(".dot"));
  const nextBtn  = document.getElementById("nextBtn");
  const prevBtn  = document.getElementById("prevBtn");
  const total    = track.children.length;

  // aspect classes for each slide index: 0 = horizontal, others = vertical
  const aspectByIndex = ["aspect-[21/9]", "aspect-[4/4]", "aspect-[4/4]", "aspect-[4/4]"];

  let index = 0;

  function applyAspect(i) {
    // remove all possible aspect classes, then add the one for this slide
    wrapper.classList.remove(...new Set(aspectByIndex));
    wrapper.classList.add(aspectByIndex[i]);
  }

  function updateUI() {
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle("bg-white", i === index));
    applyAspect(index);
  }

  nextBtn.addEventListener("click", () => {
    index = (index + 1) % total;
    updateUI();
  });

  prevBtn.addEventListener("click", () => {
    index = (index - 1 + total) % total;
    updateUI();
  });

  dots.forEach((d, i) => d.addEventListener("click", () => { index = i; updateUI(); }));

  // init
  updateUI();
});
