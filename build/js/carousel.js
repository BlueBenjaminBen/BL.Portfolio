document.addEventListener("DOMContentLoaded", () => {
  const wrapper  = document.getElementById("carouselWrap");
  const track    = document.getElementById("carousel");
  const dots     = Array.from(document.querySelectorAll(".dot"));
  const nextBtn  = document.getElementById("nextBtn");
  const prevBtn  = document.getElementById("prevBtn");
  const total    = track.children.length;

  // aspect classes for each slide index: 0 = horizontal, others = vertical
  const aspectByIndex = ["aspect-[21/9]", // wide first slide, fallback to 16:9 on desktop
  "aspect-square md:aspect-[4/4]",  // square on mobile, 4:3 on desktop
  "aspect-square md:aspect-[4/4]",
  "aspect-square md:aspect-[4/4]"];

  let index = 0;

  function applyAspect(i) {
    // remove all possible aspect classes, then add the one for this slide
    const base = "group relative w-full overflow-hidden border-8 border-double transition-all duration-500";
    wrapper.className = `${base} ${aspectByIndex[i]}`;
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
