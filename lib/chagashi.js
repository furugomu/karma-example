/// root 以下の高級茶菓子と高級和菓子を高森藍子にする
function chagashi(root) {
  "use strict";
  if (!root) root = document.body;
  var doc = root.ownerDocument;

  var result = doc.evaluate(
    './/text()[contains(., "高級")]',
    root,
    null,
    XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
    null);

  for (var i = result.snapshotLength - 1; i >= 0; --i) {
    var node = result.snapshotItem(i);
    var text = node.nodeValue;
    node.nodeValue = text.replace(/高級[茶和]菓子/g, "高森藍子");
  }
}
