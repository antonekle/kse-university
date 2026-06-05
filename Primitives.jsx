// KSE primitives: Logo, Icon, Button, Tag
function Icon({ name, size, style }) {
  return <span className="material-symbols-outlined" style={{ fontSize: size || 20, ...style }}>{name}</span>;
}

// KSE University wordmark — text variant using brand font.
function Logo({ dark, height = 30 }) {
  const fontSize = height * 0.72;
  return (
    <span style={{
      fontFamily: "var(--kse-font-sans)",
      fontWeight: 600,
      fontSize: fontSize,
      letterSpacing: "-0.02em",
      lineHeight: 1,
      color: dark ? "#ffffff" : "#0D0D0D",
      display: "inline-block",
    }}>KSE University</span>
  );
}

function Button({ variant = "primary", size, icon, iconAfter, children, onClick, style }) {
  const cls = ["btn", "btn--" + variant, size ? "btn--" + size : ""].join(" ").trim();
  return (
    <button className={cls} onClick={onClick} style={style}>
      {icon && <Icon name={icon} size={size === "xl" ? 22 : 20} />}
      {children}
      {iconAfter && <Icon name={iconAfter} size={size === "xl" ? 22 : 20} />}
    </button>
  );
}

function Tag({ active, children, onClick }) {
  return (
    <span className={"tag tag--soft" + (active ? " tag--active" : "")} onClick={onClick}>{children}</span>
  );
}

Object.assign(window, { Icon, Logo, Button, Tag });
