import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";

export default function MyNavbar() {

  const menuItems = [
    {
      name: "Inicio",
      href: "#",
    },
    {
      name: "Autos",
      href: "#",
    },
    {
      name: "Vende",
      href: "#",
    },
  ];

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="pt-2">
      {/* Toggle button for small screens */}
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
      </NavbarContent>
      {/* Menu items for large screens */}
      {/* -------------------------------------------------------------------- */}

      <NavbarContent justify="end">
        <NavbarContent justify="end" className="hidden sm:flex mr-6">
          <NavbarItem isActive>
            <Link color="foreground" href="#">
              Inicio
            </Link>
          </NavbarItem>
          <NavbarItem >
            <Link color="foreground" aria-current="page" href="#">
              Comprar
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" aria-current="page" href="#">
              Vender
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
      {/* -------------------------------------------------------------------- */}
      {/* Menu items for small screens */}
      <NavbarMenu className="pt-6">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 0 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              href="#"
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
