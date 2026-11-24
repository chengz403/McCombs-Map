"""Inline shared wayfinding code into standalone map pages after making changes."""

from pathlib import Path

root = Path(__file__).resolve().parent
source = (root / "wayfinding.js").read_text().rstrip()
start = "<script>\n// BEGIN SHARED WAYFINDING\n"
end = "// END SHARED WAYFINDING\n</script>"

for page in root.glob("*.html"):
    html = page.read_text()
    prefix, marker, rest = html.partition(start)
    if marker:
        _, close, suffix = rest.partition(end)
        if not close:
            raise ValueError(f"Missing shared wayfinding end marker in {page.name}")
        updated = f"{prefix}{start}{source}\n{end}{suffix}"
        if updated != html:
            page.write_text(updated)
