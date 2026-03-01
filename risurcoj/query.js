document.addEventListener("DOMContentLoaded", () => {
    const queryInput = document.getElementById("query-input");
    const resultsDiv = document.getElementById("query-results");

    let entries = [];

    // Elŝutu liston de dosieroj en /eroj/ (atendas dosierliston)
    fetch("eroj/")
        .then(res => res.text())
        .then(text => {
            // Elprenu nur dosiernomojn kun finaĵo .md
            const regex = /href="([^"]+\.md)"/g;
            let match;
            while ((match = regex.exec(text)) !== null) {
                const fullPath = match[1];
                // Normaligu: forigu dosierujojn, konservu nur la dosiernomon
                const filename = fullPath.split("/").pop().split("\\").pop();
                entries.push(filename);
            }
        })
        .catch(err => {
            resultsDiv.innerHTML = "<p style='color:red'>Eraro dum ŝargado de enskriboj: " + err + "</p>";
        });

    // Normaligas ĉenojn forigante diakritajn signojn (supersignojn)
    function normalizeString(str) {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }

    function renderResults(filter) {
        resultsDiv.innerHTML = "";

        if (!filter || filter.trim() === "") {
            return; // Vakigu rezultojn kiam enigo estas malplena
        }

        const normalizedFilter = normalizeString(filter.toLowerCase());

        const filtered = entries.filter(name => {
            const normalizedName = normalizeString(name.toLowerCase());
            return normalizedName.includes(normalizedFilter);
        });

        if (filtered.length === 0) {
            resultsDiv.innerHTML = "<p>Neniu rezulto trovita.</p>";
            return;
        }
        const ul = document.createElement("ul");
        filtered.forEach(filename => {
            const li = document.createElement("li");
            const link = document.createElement("a");

            // Montru nur la dosiernomon sen finaĵo
            const displayName = filename.replace(".md", "");
            link.textContent = displayName;

            // Konstrui puran demandĉenon (sen .html finaĵo en celo)
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