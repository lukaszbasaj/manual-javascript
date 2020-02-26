document.addEventListener("DOMContentLoaded", function () {
  function closeSidebar() {
    document.body.classList.add("close")
  }

  function openSidebar() {
    document.body.classList.remove("close")
  }

  window.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
      closeSidebar()
    } else if (event.key === "ArrowRight") {
      openSidebar()
    }
  })
})
