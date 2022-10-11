import { openBlock as s, createBlock as o, resolveDynamicComponent as c, normalizeClass as f, withCtx as l, renderSlot as h } from "vue";
const p = {
  props: {
    componentPrefix: String,
    variant: String,
    variantPrefix: String
  },
  computed: {
    variantClassPrefix() {
      return this.variantPrefix || this.componentPrefix;
    },
    hasVariantPrefix() {
      return this.variant && !!this.variant.match(
        new RegExp(`^${this.variantClassPrefix}`)
      );
    },
    variantClass() {
      return this.variant ? !this.variantClassPrefix || this.hasVariantPrefix ? this.variant : `${this.variantClassPrefix}-${this.variant}` : "";
    }
  }
}, u = {
  name: "Badge",
  mixins: [
    p
  ],
  props: {
    component: String,
    href: String,
    pill: Boolean,
    to: [Object, String],
    variant: {
      type: String,
      default: "primary"
    }
  },
  computed: {
    classes() {
      return [
        "badge-pill",
        "badge-secondary",
        this.variantClass
      ];
    },
    type() {
      return this.to ? "router-link" : this.href ? "a" : "span";
    },
    variantClass() {
      return `bg-${this.variant}`;
    }
  }
}, v = (r, a) => {
  const t = r.__vccOpts || r;
  for (const [e, n] of a)
    t[e] = n;
  return t;
};
function m(r, a, t, e, n, i) {
  return s(), o(c(t.component || i.type), {
    href: t.href,
    to: t.to,
    class: f(["badge", i.classes])
  }, {
    default: l(() => [
      h(r.$slots, "default")
    ]),
    _: 3
  }, 8, ["href", "to", "class"]);
}
const g = /* @__PURE__ */ v(u, [["render", m]]);
export {
  g as Badge
};
