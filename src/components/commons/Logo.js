import logoShopFile from "../../static/logo/SVG/logo-shopFichier 3.svg";
export function Logo({ classNames }) {
  return (
    <img className={classNames} src={logoShopFile} alt="Logo Tape House" />
  );
}
