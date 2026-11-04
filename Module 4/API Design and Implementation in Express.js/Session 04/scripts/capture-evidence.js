const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const { spawnSync } = require("node:child_process");

const browser = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
const outputDir = path.join(__dirname, "..", "screenshots");
const temporaryDir = fs.mkdtempSync(path.join(os.tmpdir(), "order-evidence-"));
const escapeHtml = (value) => value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");

async function main() {
  for (const [id, label] of [[17, "pending"], [18, "cancelled"]]) {
    const url = `http://localhost:3000/api/v2/orders/${id}`;
    const response = await fetch(url);
    if (response.status !== 200) throw new Error(`Expected 200 for ${url}, got ${response.status}`);
    const json = await response.json();
    const result = JSON.stringify(json, null, 2);
    const html = `<!doctype html><html lang="en"><meta charset="utf-8"><style>
      body{margin:0;background:#f5f7fb;font-family:Arial,sans-serif;color:#172033}
      .wrap{width:1080px;margin:45px auto;background:white;border-radius:14px;box-shadow:0 6px 32px #ccd3dc;padding:34px 40px}
      h1{font-size:24px;margin:0 0 15px} .method{color:#187a40;font-weight:700}
      .url{padding:17px;border:1px solid #cad3dc;border-radius:8px;font-size:20px}
      .meta{display:flex;justify-content:space-between;margin:24px 0 12px;font-size:17px}
      .status{color:#187a40;font-weight:bold} pre{background:#15202e;color:#e3eefa;padding:24px;border-radius:8px;font-size:17px;line-height:1.45;margin:0;white-space:pre-wrap}
      footer{margin-top:15px;color:#586475;font-size:13px}
    </style><main class="wrap"><h1>Orders API — ${label.toUpperCase()} response</h1>
    <div class="url"><span class="method">GET</span> ${escapeHtml(url)}</div>
    <div class="meta"><strong>Response Body (JSON)</strong><span class="status">200 OK</span></div>
    <pre>${escapeHtml(result)}</pre><footer>Evidence captured from a real local HTTP response; this is an API response capture, not the Postman interface.</footer></main></html>`;
    const htmlFile = path.join(temporaryDir, label + ".html");
    fs.writeFileSync(htmlFile, html, "utf8");
    const png = path.join(outputDir, label + ".png");
    const args = ["--headless=new", "--disable-gpu", "--no-first-run", "--hide-scrollbars", "--window-size=1240,950", "--screenshot=" + png, "file:///" + htmlFile.replaceAll("\\", "/")];
    const run = spawnSync(browser, args, { encoding: "utf8", timeout: 20000 });
    if (run.error || run.status !== 0 || !fs.existsSync(png)) throw new Error("Screenshot generation failed: " + (run.error?.message || run.stderr));
    console.log(label + " capture: " + png + " (" + fs.statSync(png).size + " bytes)");
  }
}
main().catch(err => {console.error(err); process.exitCode = 1;});
