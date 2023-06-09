import {
  St,
  Tt,
  yt
} from "./chunk-HCAWNQRS.js";
import {
  F
} from "./chunk-LXOXGOW4.js";
import {
  A,
  ks
} from "./chunk-4YVXMPIA.js";
import "./chunk-ZBFL4OS2.js";
import "./chunk-MAFLJJKP.js";
import "./chunk-WC7ESL3H.js";
import "./chunk-DZVDESUM.js";
import "./chunk-75JSLJ6C.js";
import "./chunk-BHKXDXK7.js";
import {
  $
} from "./chunk-SEV54HLU.js";
import "./chunk-VJFQ4JEA.js";
import {
  et,
  nh,
  th
} from "./chunk-QVXOEG34.js";

// node_modules/.pnpm/registry.npmmirror.com+mermaid@10.0.2/node_modules/mermaid/dist/classDiagram-17eafd8a.js
var h = {};
var g = 20;
var p = function(e) {
  const s = Object.entries(h).find((k) => k[1].label === e);
  if (s)
    return s[0];
};
var D = function(e) {
  e.append("defs").append("marker").attr("id", "extensionStart").attr("class", "extension").attr("refX", 0).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 1,7 L18,13 V 1 Z"), e.append("defs").append("marker").attr("id", "extensionEnd").attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 1,1 V 13 L18,7 Z"), e.append("defs").append("marker").attr("id", "compositionStart").attr("class", "extension").attr("refX", 0).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"), e.append("defs").append("marker").attr("id", "compositionEnd").attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"), e.append("defs").append("marker").attr("id", "aggregationStart").attr("class", "extension").attr("refX", 0).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"), e.append("defs").append("marker").attr("id", "aggregationEnd").attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"), e.append("defs").append("marker").attr("id", "dependencyStart").attr("class", "extension").attr("refX", 0).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 5,7 L9,13 L1,7 L9,1 Z"), e.append("defs").append("marker").attr("id", "dependencyEnd").attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L14,7 L9,1 Z");
};
var $2 = function(e, s, k, a) {
  const f = th().class;
  h = {}, et.info("Rendering diagram " + e);
  const L = th().securityLevel;
  let y;
  L === "sandbox" && (y = nh("#i" + s));
  const x = L === "sandbox" ? nh(y.nodes()[0].contentDocument.body) : nh("body"), n = x.select(`[id='${s}']`);
  D(n);
  const r = new A({
    multigraph: true
  });
  r.setGraph({
    isMultiGraph: true
  }), r.setDefaultEdgeLabel(function() {
    return {};
  });
  const m = a.db.getClasses(), N = Object.keys(m);
  for (const t of N) {
    const o = m[t], i = F.drawClass(n, o, f, a);
    h[i.id] = i, r.setNode(i.id, i), et.info("Org height: " + i.height);
  }
  a.db.getRelations().forEach(function(t) {
    et.info(
      "tjoho" + p(t.id1) + p(t.id2) + JSON.stringify(t)
    ), r.setEdge(
      p(t.id1),
      p(t.id2),
      {
        relation: t
      },
      t.title || "DEFAULT"
    );
  }), a.db.getNotes().forEach(function(t) {
    et.debug(`Adding note: ${JSON.stringify(t)}`);
    const o = F.drawNote(n, t, f, a);
    h[o.id] = o, r.setNode(o.id, o), t.class && t.class in m && r.setEdge(
      t.id,
      p(t.class),
      {
        relation: {
          id1: t.id,
          id2: t.class,
          relation: {
            type1: "none",
            type2: "none",
            lineType: 10
          }
        }
      },
      "DEFAULT"
    );
  }), ks(r), r.nodes().forEach(function(t) {
    t !== void 0 && r.node(t) !== void 0 && (et.debug("Node " + t + ": " + JSON.stringify(r.node(t))), x.select("#" + (a.db.lookUpDomId(t) || t)).attr(
      "transform",
      "translate(" + (r.node(t).x - r.node(t).width / 2) + "," + (r.node(t).y - r.node(t).height / 2) + " )"
    ));
  }), r.edges().forEach(function(t) {
    t !== void 0 && r.edge(t) !== void 0 && (et.debug("Edge " + t.v + " -> " + t.w + ": " + JSON.stringify(r.edge(t))), F.drawEdge(n, r.edge(t), r.edge(t).relation, f, a));
  });
  const c = n.node().getBBox(), E = c.width + g * 2, b = c.height + g * 2;
  $(n, b, E, f.useMaxWidth);
  const w = `${c.x - g} ${c.y - g} ${E} ${b}`;
  et.debug(`viewBox ${w}`), n.attr("viewBox", w);
};
var B = {
  draw: $2
};
var q = {
  parser: yt,
  db: Tt,
  renderer: B,
  styles: St,
  init: (e) => {
    e.class || (e.class = {}), e.class.arrowMarkerAbsolute = e.arrowMarkerAbsolute, Tt.clear();
  }
};
export {
  q as diagram
};
//# sourceMappingURL=classDiagram-17eafd8a-QSLQLEPK.js.map
