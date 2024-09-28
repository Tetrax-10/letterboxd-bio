document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('a[href^="http"]')

    links.forEach((link) => {
        // open in new tab
        link.setAttribute("target", "_blank")
    })
})
