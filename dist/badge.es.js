import { openBlock as s, createBlock as o, resolveDynamicComponent as c, normalizeClass as l, withCtx as f, renderSlot as h } from "vue";
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
}, v = (r, a) => {
  const t = r.__vccOpts || r;
  for (const [e, i] of a)
    t[e] = i;
  return t;
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
    type() {
      return this.to ? "router-link" : this.href ? "a" : "span";
    },
    variantClass() {
      return `bg-${this.variant}`;
    },
    classes() {
      return {
        "badge-pill": this.pill,
        "badge-secondary": this.secondary,
        [this.variantClass]: !!this.variant
      };
    }
  }
};
function m(r, a, t, e, i, n) {
  return s(), o(c(t.component || n.type), {
    href: t.href,
    to: t.to,
    class: l(["badge", n.classes])
  }, {
    default: f(() => [
      h(r.$slots, "default")
    ]),
    _: 3
  }, 8, ["href", "to", "class"]);
}
const g = /* @__PURE__ */ v(u, [["render", m]]);
export {
  g as Badge
};
