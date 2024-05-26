import { onMounted, onUnmounted } from "vue";

export default function () {
  const handleResize = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };

  onMounted(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
  });
  onUnmounted(() => {
    window.addEventListener("resize", handleResize);
  });
}
