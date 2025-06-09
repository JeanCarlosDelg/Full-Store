"use client"

import * as React from "react"
import { Link } from "react-router-dom"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"


const MenuDesktop = () => {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        
        {/* Sobre Nosotros */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Sobre Nosotros</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                    href="/"
                    >
                    <div className="mt-4 mb-2 text-lg font-medium">
                      JeanDev
                    </div>
                    <p className="text-muted-foreground text-sm leading-tight">
                      Sumérgete en el apasionante mundo del café con nuestra web especializada en la venta de deliciosos postres elaborados a base de café (grano, molidos, capsula).
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/shop" title="Tienda">
                Accede a toda tu information, tus pedidos y mucho mas.
              </ListItem>
              <ListItem href="/offers" title="Ofertas">
                Seccion dedicada a promociones y descuentos especiales.
              </ListItem>
              <ListItem href="/" title="Accesorios">
                Puntos especiales de articulos para manipular tu café.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Cafés */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Cafés</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* accesorios */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link to={'/accesorios'}>Accesorios</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default MenuDesktop

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Café grano",
    href: "/category/grano",
    description:
      "Conserva todos sus aceites esenciales y aromas naturales hasta el momento de la molienda, lo que permite disfrutar de una taza con sabor más intenso, complejo y personalizado.",
  },
  {
    title: "Café molido",
    href: "/category/molido",
    description:
      "El café molido es café en grano que ha sido triturado para facilitar su preparación. Es práctico y rápido de usar, ideal para quienes desean disfrutar de una buena taza sin necesidad de moler los granos.",
  },
  {
    title: "Café de cápsula",
    href: "/category/capsula",
    description:
      "Es una forma moderna y conveniente de preparar café, utilizando pequeñas cápsulas herméticas que contienen café molido en porciones individuales. Ofrece rapidez, limpieza y consistencia en cada taza.",
  }
]

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link to={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
