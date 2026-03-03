// demando-parametro-md.js
document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById('md-container');

    // Helper to read query parameters
    function getQueryParam(name) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    }

    // Read ?file=... from URL
    const file = getQueryParam('file');

    if (file) {
        // Fetch from the /eroj/ subdirectory
        fetch("eroj/" + file)
            .then(res => {
                if (!res.ok) throw new Error("File not found");
                return res.text();
            })
            .then(md => {
                container.innerHTML = window.renderMarkdown(md);
            })
            .catch(err => {
                container.innerHTML =
                    "<p style='color:red'>Error loading Markdown: " + err + "</p>";
            });
    } else {
        container.innerHTML = "<p>No se especificó ninguna entrada.</p>";
    }
});