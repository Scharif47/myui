import Link from "./Link";

function Sidebar() {
  const links = [
    { label: "Dropdown", path: "/" },
    { label: "Accordion", path: "/accordion" },
    { label: "Buttons", path: "/buttons" },
    { label: "Modal", path: "/modal" },
  ];

  const renderedLinks = links.map((link) => {
    return (
      <Link
        key={link.label}
        className="mb-3"
        activeClassName="font-bold border-l-2 border-blue-500 pl-2"
        to={link.path}
      >
        {link.label}
      </Link>
    );
  });

  return (
    <div className="sticky top-0 overflow-y-scroll flex flex-col items-start">
      {renderedLinks}
    </div>
  );
}

export default Sidebar;