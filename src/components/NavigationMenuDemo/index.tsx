"use client"

import * as React from "react"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

// Definir os componentes para cada menu
const menuItems: { title: string; components: { title: string; href: string; description: string }[] }[] = [
    {
        title: "Negociar",
        components: [
            {
                title: "Alert Dialog",
                href: "/docs/primitives/alert-dialog",
                description:
                    "A modal dialog that interrupts the user with important content and expects a response.",
            },
            {
                title: "Hover Card",
                href: "/docs/primitives/hover-card",
                description:
                    "For sighted users to preview content available behind a link.",
            },
            {
                title: "Progress",
                href: "/docs/primitives/progress",
                description:
                    "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
            },
        ],
    },
    {
        title: "Estratégias",
        components: [
            {
                title: "Scroll-area",
                href: "/docs/primitives/scroll-area",
                description: "Visually or semantically separates content.",
            },
            {
                title: "Tabs",
                href: "/docs/primitives/tabs",
                description:
                    "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
            },
            {
                title: "Tooltip",
                href: "/docs/primitives/tooltip",
                description:
                    "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
            },
        ],
    },
    {
        title: "Mercado",
        components: [
            {
                title: "New Component 1",
                href: "/docs/primitives/new-component-1",
                description:
                    "Description of new component 1.",
            },
            {
                title: "New Component 2",
                href: "/docs/primitives/new-component-2",
                description:
                    "Description of new component 2.",
            },
            {
                title: "New Component 3",
                href: "/docs/primitives/new-component-3",
                description:
                    "Description of new component 3.",
            },
        ],
    },
    {
        title: "Central Tarefas",
        components: [
            {
                title: "New Component 1",
                href: "/docs/primitives/new-component-1",
                description:
                    "Description of new component 1.",
            },
            {
                title: "New Component 2",
                href: "/docs/primitives/new-component-2",
                description:
                    "Description of new component 2.",
            },
            {
                title: "New Component 3",
                href: "/docs/primitives/new-component-3",
                description:
                    "Description of new component 3.",
            },
        ],
    },
    {
        title: "Loja do Trader",
        components: [
            {
                title: "New Component 1",
                href: "/docs/primitives/new-component-1",
                description:
                    "Description of new component 1.",
            },
            {
                title: "New Component 2",
                href: "/docs/primitives/new-component-2",
                description:
                    "Description of new component 2.",
            },
            {
                title: "New Component 3",
                href: "/docs/primitives/new-component-3",
                description:
                    "Description of new component 3.",
            },
        ],
    },
    {
        title: "Carteira",
        components: [
            {
                title: "New Component 1",
                href: "/docs/primitives/new-component-1",
                description:
                    "Description of new component 1.",
            },
            {
                title: "New Component 2",
                href: "/docs/primitives/new-component-2",
                description:
                    "Description of new component 2.",
            },
            {
                title: "New Component 3",
                href: "/docs/primitives/new-component-3",
                description:
                    "Description of new component 3.",
            },
        ],
    },
    {
        title: "Educacional",
        components: [
            {
                title: "New Component 1",
                href: "/docs/primitives/new-component-1",
                description:
                    "Description of new component 1.",
            },
            {
                title: "New Component 2",
                href: "/docs/primitives/new-component-2",
                description:
                    "Description of new component 2.",
            },
            {
                title: "New Component 3",
                href: "/docs/primitives/new-component-3",
                description:
                    "Description of new component 3.",
            },
        ],
    },
    {
        title: "Mais",
        components: [
            {
                title: "New Component 1",
                href: "/docs/primitives/new-component-1",
                description:
                    "Description of new component 1.",
            },
            {
                title: "New Component 2",
                href: "/docs/primitives/new-component-2",
                description:
                    "Description of new component 2.",
            },
            {
                title: "New Component 3",
                href: "/docs/primitives/new-component-3",
                description:
                    "Description of new component 3.",
            },
        ],
    },
]

export function NavigationMenuDemo() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                {menuItems.map((menu, index) => (
                    <NavigationMenuItem key={index} className="flex w-full">
                        <NavigationMenuTrigger className="bg-transparent text-white">
                            {menu.title}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent >
                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                {menu.components.map((component, idx) => (
                                    <ListItem
                                        key={idx}
                                        title={component.title}
                                        href={component.href}
                                    >
                                        {component.description}
                                    </ListItem>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
