document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('a[href^="http"]')

    links.forEach((link) => {
        // open in new tab
        link.setAttribute("target", "_blank")

        // track clicks
        link.addEventListener("click", () => {
            gtag("event", "click", {
                event_category: "link",
                event_label: link.getAttribute("href"), // Use the href as the event label
            })
        })
    })
})
