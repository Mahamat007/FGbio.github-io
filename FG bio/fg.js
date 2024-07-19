function scrollToTitle(titleId) {
    const element = document.getElementById(titleId);
    if (element) {
      // Smooth scroll to the element with the specified ID
      element.scrollIntoView({ behavior: "smooth" });
    }
}