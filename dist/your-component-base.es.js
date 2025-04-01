import { jsx as s, jsxs as G } from "react/jsx-runtime";
import { createContext as H, useContext as J } from "react";
const K = {
  colorTokens: {},
  fontSizeTokens: { small: {}, medium: {}, large: {} },
  iconSizeTokens: { small: {}, medium: {}, large: {} },
  spacingTokens: { small: {}, medium: {}, large: {} },
  borderRadiusTokens: {}
}, B = H(K), U = ({ theme: o, children: r }) => /* @__PURE__ */ s(B.Provider, { value: o, children: r }), E = () => {
  const o = J(B);
  if (o === void 0)
    throw new Error("useTheme must be used within a ThemeProvider");
  return Object.keys(o.colorTokens).length === 0 && console.warn("ThemeContext: colorTokens appear to be empty. Ensure the theme is provided correctly."), o;
}, v = ({
  size: o,
  sizeCategory: r,
  children: n,
  color: c,
  className: p
}) => {
  var b;
  const { iconSizeTokens: m } = E(), a = (b = m[r]) == null ? void 0 : b[o];
  a || console.warn(
    `IconWrapper: iconSizeToken not found in the provided theme for sizeCategory='${r}', size='${o}'. Falling back to default size '24px'.`
  );
  const f = `${c ? "colored-icon-wrapper" : ""} ${p || ""}`.trim();
  return /* @__PURE__ */ s(
    "div",
    {
      className: f,
      style: {
        width: a || "24px",
        // Fallback if dimensions is undefined in theme
        height: a || "24px",
        // Fallback if dimensions is undefined in theme
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden"
      },
      "data-icon-color": c || "",
      children: n
    }
  );
}, X = ({
  color: o,
  height: r,
  sizeCategory: n,
  iconLeft: c = !1,
  iconRight: p = !1,
  onClick: m,
  children: a,
  iconLeftPath: f,
  iconRightPath: b,
  iconColor: h,
  loader: l,
  disabled: T = !1,
  variant: k = "filled",
  iconSize: F,
  className: P = "",
  borderFull: V = !1
}) => {
  var w, g, $, S, N, z;
  const {
    colorTokens: q,
    fontSizeTokens: A,
    spacingTokens: d,
    // Use spacing tokens for gap/padding
    iconSizeTokens: u,
    borderRadiusTokens: i
  } = E(), D = !a && (c || p || l), t = q[o];
  t || console.warn(`Button: Color category '${o}' not found in provided theme. Styles may not apply correctly.`);
  const e = {
    // Direct height prop
    "--button-height": typeof r == "string" && r.endsWith("px") ? r : `${r}px`,
    // Opacity from theme or fallback
    "--button-opacity-disabled": (t == null ? void 0 : t.disabledOpacity) || "0.3",
    // Use theme value
    // Border radius from theme
    "--button-border-radius": V ? (i == null ? void 0 : i.full) || "9999px" : (i == null ? void 0 : i.base) || "4px",
    // Use theme value
    // Gap from theme's spacing tokens (e.g., using 'size-1' for gap)
    "--button-gap": ((w = d[n]) == null ? void 0 : w["size-1"]) || "4px",
    // Example key
    // Padding from theme's spacing tokens (e.g., using 'size-0' and 'size-4')
    "--button-top-padding": ((g = d[n]) == null ? void 0 : g["size-0"]) || "0px",
    // Example key
    "--button-right-padding": (($ = d[n]) == null ? void 0 : $["size-4"]) || "16px",
    // Example key
    "--button-bottom-padding": ((S = d[n]) == null ? void 0 : S["size-0"]) || "0px",
    // Example key
    "--button-left-padding": ((N = d[n]) == null ? void 0 : N["size-4"]) || "16px",
    // Example key
    // Font size from theme's font size tokens (e.g., using 'size-4')
    "--button-font-size": ((z = A[n]) == null ? void 0 : z["size-4"]) || "16px"
    // Example key
  };
  k === "filled" ? (e["--button-bg-color"] = (t == null ? void 0 : t.default) || "#000", e["--button-bg-color-hover"] = (t == null ? void 0 : t.hover) || "#333", e["--button-bg-color-active"] = (t == null ? void 0 : t.active) || "#555", e["--button-bg-color-disabled"] = (t == null ? void 0 : t.disabled) || "#888", e["--button-text-color"] = "#fff", e["--button-text-color-hover"] = "#fff", e["--button-text-color-active"] = "#fff", e["--button-text-color-disabled"] = "#fff", e["--button-border-color"] = "transparent", e["--button-border-color-hover"] = "transparent", e["--button-border-color-active"] = "transparent", e["--button-border-color-disabled"] = "transparent", e["--button-icon-color"] = h || e["--button-text-color"]) : (e["--button-bg-color"] = "transparent", e["--button-bg-color-hover"] = "transparent", e["--button-bg-color-active"] = "transparent", e["--button-bg-color-disabled"] = "transparent", e["--button-text-color"] = (t == null ? void 0 : t.default) || "#000", e["--button-text-color-hover"] = (t == null ? void 0 : t.hover) || "#333", e["--button-text-color-active"] = (t == null ? void 0 : t.active) || "#555", e["--button-text-color-disabled"] = (t == null ? void 0 : t.disabled) || "#888", e["--button-border-color"] = (t == null ? void 0 : t.default) || "#000", e["--button-border-color-hover"] = (t == null ? void 0 : t.hover) || "#333", e["--button-border-color-active"] = (t == null ? void 0 : t.active) || "#555", e["--button-border-color-disabled"] = (t == null ? void 0 : t.disabled) || "#888", e["--button-icon-color"] = h || e["--button-text-color"]);
  const x = F || (() => {
    var I, j, y, O, W;
    switch (r) {
      case "32":
        return ((I = u[n]) == null ? void 0 : I.xs) || "xs";
      case "36":
        return ((j = u[n]) == null ? void 0 : j.sm) || "sm";
      case "42":
        return ((y = u[n]) == null ? void 0 : y.md) || "md";
      case "60":
        return ((O = u[n]) == null ? void 0 : O.lg) || "lg";
      default:
        return ((W = u[n]) == null ? void 0 : W.md) || "md";
    }
  })();
  return /* @__PURE__ */ G(
    "button",
    {
      className: `button button--${k} ${D ? "icon-only" : ""} ${P}`,
      disabled: T,
      onClick: T ? void 0 : m,
      style: e,
      children: [
        c && f && !l && /* @__PURE__ */ s(
          v,
          {
            className: "icon-left",
            size: x,
            sizeCategory: n,
            children: f
          }
        ),
        l && /* @__PURE__ */ s(
          v,
          {
            className: "loader-wrapper",
            size: x,
            sizeCategory: n,
            children: l
          }
        ),
        a && /* @__PURE__ */ s("span", { className: "button-text", children: a }),
        p && b && !l && /* @__PURE__ */ s(
          v,
          {
            className: "icon-right",
            size: x,
            sizeCategory: n,
            children: b
          }
        )
      ]
    }
  );
};
export {
  X as Button,
  v as IconWrapper,
  U as ThemeProvider,
  E as useTheme
};
//# sourceMappingURL=your-component-base.es.js.map
