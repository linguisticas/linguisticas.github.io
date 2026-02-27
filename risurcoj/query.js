document.addEventListener("DOMContentLoaded", () => {
    const queryInput = document.getElementById("query-input");
    const resultsDiv = document.getElementById("query-results");

    let entries = [];

    // Fetch list of files in /eroj/ (expects directory listing)
    fetch("eroj/")
        .then(res => res.text())
        .then(text => {
            // Extract only .md filenames
            const regex = /href="([^"]+\.md)"/g;
            let match;
            while ((match = regex.exec(text)) !== null) {
                const fullPath = match[1];
                // Normalize: strip directories, keep only the filename
                const filename = fullPath.split("/").pop().split("\\").pop();
                entries.push(filename);
            }
        })
        .catch(err => {
            resultsDiv.innerHTML = "<p style='color:red'>Error loading entries: " + err + "</p>";
        });

    // Normalizes strings by removing diacritics (accents)
    function normalizeString(str) {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }

    function renderResults(filter) {
        resultsDiv.innerHTML = "";

        if (!filter || filter.trim() === "") {
            return; // Clear results when input is empty
        }

        const normalizedFilter = normalizeString(filter.toLowerCase());

        const filtered = entries.filter(name => {
            const normalizedName = normalizeString(name.toLowerCase());
            return normalizedName.includes(normalizedFilter);
        });

        if (filtered.length === 0) {
            resultsDiv.innerHTML = "<p>No se encontraron resultados.</p>";
            return;
        }
        const ul = document.createElement("ul");
        filtered.forEach(filename => {
            const li = document.createElement("li");
            const link = document.createElement("a");

            // Show only the filename without extension
            const displayName = filename.replace(".md", "");
            link.textContent = displayName;

            // Build clean query string (no .html extension in target)
            const target = "analizo?file=" + encodeURIComponent(filename);

            link.addEventListener("click", e => {
                e.preventDefault();
                window.location.href = target;
            });

            li.appendChild(link);
            ul.appendChild(li);
        });
        resultsDiv.appendChild(ul);
    }

    queryInput.addEventListener("input", e => {
        renderResults(e.target.value);
    });
});
