const container = document.getElementById('md-container');
const viewer = document.getElementById('json-viewer');

function getQueryParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

const file = getQueryParam('file');
if (file) {
    fetch('eroj/' + file)
        .then(res => res.text())
        .then(md => {
            container.innerHTML = window.renderMarkdown(md);
        })
        .catch(err => {
            container.innerHTML =
                "<p style='color:red'>Error loading Markdown: " + err + "</p>";
        });

    loadJsonForMd(file);
} else {
    container.innerHTML = "<p>No se especificó ninguna entrada.</p>";
}

async function loadJsonForMd(mdFile) {
    const baseName = mdFile.replace(/\.md$/i, "");
    const jsonPath = `eroj/${baseName}.json`;

    try {
        const res = await fetch(jsonPath);
        if (!res.ok) throw new Error("JSON not found");
        const data = await res.json();
        const rootEntry = { key: "root", value: data };
        renderMenu(rootEntry, viewer, [rootEntry]);
    } catch (err) {
        viewer.innerHTML = "<p>No se encontraron metadatos JSON para esta entrada.</p>";
    }
}

function renderMenu(entry, container, stack) {
    const obj = entry.value;
    container.innerHTML = "";
    const level = document.createElement("div");
    level.className = "menu-level active";

    if (stack.length > 1) {
        const backBtn = document.createElement("div");
        backBtn.className = "back";
        backBtn.textContent = "← Volver";
        backBtn.onclick = () => {
            stack.pop();
            renderMenu(stack[stack.length - 1], container, stack);
        };
        level.appendChild(backBtn);
    }

    if (Array.isArray(obj)) {
        // Flatten array elements visually
        obj.forEach((item) => {
            if (typeof item === "object" && item !== null) {
                // Extract keys from object inside array to skip the `[x]` level
                Object.entries(item).forEach(([key, value]) => {
                    const div = document.createElement("div");
                    div.className = "menu-item";
                    div.textContent = key;
                    div.onclick = () => {
                        if (typeof value === "object" && value !== null) {
                            stack.push({ key, value });
                            renderMenu(stack[stack.length - 1], container, stack);
                        } else {
                            const valDiv = document.createElement("div");
                            valDiv.className = "menu-item value";
                            valDiv.textContent = value;
                            container.innerHTML = "";
                            container.appendChild(valDiv);
                            const backBtn = document.createElement("div");
                            backBtn.className = "back";
                            backBtn.textContent = "← Volver";
                            backBtn.onclick = () => {
                                renderMenu(stack[stack.length - 1], container, stack);
                            };
                            container.insertBefore(backBtn, valDiv);
                        }
                    };
                    level.appendChild(div);
                });
            } else {
                const div = document.createElement("div");
                div.className = "menu-item value";
                div.textContent = item;
                level.appendChild(div);
            }
        });
    } else if (typeof obj === "object" && obj !== null) {
        Object.entries(obj).forEach(([key, value]) => {
            const div = document.createElement("div");
            div.className = "menu-item";
            div.textContent = key;
            div.onclick = () => {
                if (typeof value === "object" && value !== null) {
                    stack.push({ key, value });
                    renderMenu(stack[stack.length - 1], container, stack);
                } else {
                    const valDiv = document.createElement("div");
                    valDiv.className = "menu-item value";
                    valDiv.textContent = value;
                    container.innerHTML = "";
                    container.appendChild(valDiv);
                    const backBtn = document.createElement("div");
                    backBtn.className = "back";
                    backBtn.textContent = "← Volver";
                    backBtn.onclick = () => {
                        renderMenu(stack[stack.length - 1], container, stack);
                    };
                    container.insertBefore(backBtn, valDiv);
                }
            };
            level.appendChild(div);
        });
    }

    container.appendChild(level);
}