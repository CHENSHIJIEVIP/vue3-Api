import { reactive, onMounted, onUnmounted } from "vue";
function savePoint() {
  //实现鼠标打点
  let point = reactive({
    x: 0,
    y: 0,
  });

  function sevePoint(event) {
    point.x = event.pageX;
    point.y = event.pageY;
  }

  onMounted(() => {
    window.addEventListener("click", sevePoint);
  });

  onUnmounted(() => {
    window.removeEventListener("click", sevePoint);
  });

  return point;
}

export default savePoint;
