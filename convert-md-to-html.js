import fs from "fs";
import { marked } from "marked";

function convertMdToHtml() {
  fs.readFile("task-3.md", "utf8", (err, data) => {
    if (err) {
      console.error("Fehler beim Lesen der Markdown-Datei:", err);
      return;
    }

    const htmlContent = marked(data);

    fs.writeFile("task-3.html", htmlContent, (err) => {
      if (err) {
        console.error("Fehler beim Schreiben der HTML-Datei:", err);
        return;
      }
      console.log("task-3.html wurde erfolgreich erstellt oder aktualisiert.");
    });
  });
}

convertMdToHtml();
