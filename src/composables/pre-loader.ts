import { onMounted } from "vue";

export default function () {
  onMounted(() => {
    const preloader = document.getElementById("preloader");
    if (preloader) {
      preloader.style.display = "none";
    }
  });
}
