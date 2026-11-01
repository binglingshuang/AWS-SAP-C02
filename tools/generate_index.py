from html import escape
from pathlib import Path
from urllib.parse import quote
import os


ROOT = Path(__file__).resolve().parent.parent
INDEX = ROOT / "index.html"


def find_html_files() -> list[Path]:
    html_files = []
    for current_dir, dirnames, filenames in os.walk(ROOT):
        dirnames[:] = [name for name in dirnames if name != ".git"]
        for filename in filenames:
            path = Path(current_dir) / filename
            if path.suffix.lower() == ".html" and path.resolve() != INDEX.resolve():
                html_files.append(path)
    return sorted(html_files, key=lambda path: path.relative_to(ROOT).as_posix().casefold())


def main() -> None:
    html_files = find_html_files()
    links = "\n".join(
        '      <li><a href="{href}" target="_blank" rel="noopener noreferrer">{label}</a></li>'.format(
            href=escape(quote(path.relative_to(ROOT).as_posix(), safe="/"), quote=True),
            label=escape(path.relative_to(ROOT).as_posix()),
        )
        for path in html_files
    )
    if not links:
        links = "      <li>暂无 HTML 文件</li>"

    INDEX.write_text(
        """<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>AWS SAP Exam - HTML 导航</title>
  <style>
    body { max-width: 900px; margin: 3rem auto; padding: 0 1.25rem; font: 16px/1.6 system-ui, sans-serif; color: #1f2937; }
    h1 { margin-bottom: 0.25rem; }
    .count { color: #6b7280; }
    li { margin: 0.5rem 0; }
    a { color: #2563eb; }
  </style>
</head>
<body>
  <h1>AWS SAP Exam 学习资料</h1>
  <p class="count">共 {count} 个 HTML 文件</p>
  <ul>
{links}
  </ul>
</body>
</html>
""".replace("{count}", str(len(html_files))).replace("{links}", links),
        encoding="utf-8",
    )
    print(f"已生成 {INDEX}（{len(html_files)} 个 HTML 文件）")


if __name__ == "__main__":
    main()
