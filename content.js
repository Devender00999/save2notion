document.addEventListener("mouseup", showToolbarOnHover);

function showToolbarOnHover() {
   const selection = window.getSelection();
   const text = selection.toString().trim();

   if (!text) {
      removeToolbar();
      return;
   }

   if (!selection.rangeCount) return;
   const { left, top } = selection.getRangeAt(0).getBoundingClientRect();

   createToolbarUI(left, top);
}

function removeToolbar() {
   document.getElementById("selection-toolbar")?.remove();
}

function createToolbarUI(x, y) {
   removeToolbar();

   const style = document.createElement("style");
   // adding all the styling
   style.innerHTML = `
    .icon1 {
      background: transparent !important;
      border: none !important;
      cursor: pointer;
      font-size: 20px;
      color: white;
      padding: 0;
      margin: 0;
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
      transition: background 0.2s;
    }

    .icon2 {
      background: transparent !important;
      border: none !important;
      cursor: pointer;
      font-size: 20px;
      color: white;
      padding: 0;
      margin: 0;
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
      transition: background 0.2s;
    }
   `;

   document.head.appendChild(style);

   const toolbar = document.createElement("div");
   toolbar.id = "selection-toolbar";

   toolbar.addEventListener("mousedown", (e) => {
      e.stopPropagation();
   });

   toolbar.addEventListener("mouseup", (e) => {
      e.stopPropagation();
   });

   Object.assign(toolbar.style, {
      position: "absolute",
      top: `${y + window.scrollY - 40}px`,
      left: `${x + window.scrollX}px`,
      padding: "6px",
      borderRadius: "6px",
      display: "flex",
      gap: "8px",
      zIndex: "999999",
   });

   const icon1 = document.createElement("button");
   icon1.textContent = "💾";
   icon1.className = "icon1";
   icon1.onclick = saveToNotion;

   const icon2 = document.createElement("button");
   icon2.textContent = "⚙️";
   icon2.className = "icon2";
   icon2.onclick = openSettings;
   toolbar.appendChild(icon1);
   toolbar.appendChild(icon2);

   document.body.appendChild(toolbar);
}

// on opening settings
function openSettings() {
   console.log("settings");
   removeToolbar();
}

// on saving to notion
function saveToNotion() {
   const selection = window.getSelection();
   const text = selection.toString().trim();
   console.log(text);
   removeToolbar();
}
