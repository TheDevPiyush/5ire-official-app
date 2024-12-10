"use client"

import { Bug, ChartArea, CloudAlert, HeartPulse, Home, MessageCircle, NotepadText, SearchIcon, Settings, Settings2Icon, Shield, TowerControl } from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import Link from "next/link"
import { usePathname } from "next/navigation"

const SideBarTopItems = [
    {
        title: "Dashboard",
        url: "/dashboard",
        icon: Home,
    },
    {
        title: "Network Security",
        url: "/network-security",
        icon: Shield,
    },
    {
        title: "Application Security",
        url: "/application-security",
        icon: Bug,
    },
    {
        title: "DNS Health",
        url: "/dns-health",
        icon: HeartPulse,
    },
    {
        title: "Information Leak",
        url: "/information-leak",
        icon: NotepadText,
    },
    {
        title: "IP Reputation",
        url: "/ip-reputation",
        icon: CloudAlert,
    },
    {
        title: "All Findings",
        url: "/all-findings",
        icon: SearchIcon,
    },
    {
        title: "Hacker Chats",
        url: "/hacker-chats",
        icon: MessageCircle,
    },
]
const SideBarMiddleItems = [
    {
        title: "Company Analytics",
        url: "/company-analytics",
        icon: ChartArea,
    },
    {
        title: "Tracker",
        url: "/tracker",
        icon: TowerControl,
    },
]


export function AppSidebar() {
    const pathname = usePathname();
    return (
        <Sidebar>
            <SidebarContent>
                <div className="flex mx-7 font-extrabold text-2xl mt-5">
                    CybersecX
                </div>

                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {SideBarTopItems.map((item) => (
                                <SidebarMenuItem className={`py-1 mx-3 rounded-lg
                                ${pathname === item.url && "font-semibold border-l-2 active:none bg-[#DDEAFC] text-black"} hover:none`} key={item.title}>
                                    <SidebarMenuButton asChild className='hover:bg-transparent active:none'>
                                        <Link href={item.url}>
                                            <item.icon className={`focus:bg-transparent active:none 
                                                hover:none 
                                                ${pathname === item.url && "text-blue-600"}`} />
                                            <span className="text-sm">{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                <div className="border"></div>

                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {SideBarMiddleItems.map((item) => (
                                <SidebarMenuItem className={`py-1 mx-3 rounded-lg
                                ${pathname === item.url && "font-semibold border-l-2 active:none bg-[#DDEAFC] text-black"} hover:none`} key={item.title}>
                                    <SidebarMenuButton asChild className='hover:bg-transparent active:none'>
                                        <Link href={item.url} className="focus:bg-transparent active:none 
                                                hover:none ">
                                            <item.icon className={`focus:bg-transparent active:none 
                                                hover:none 
                                                ${pathname === item.url && "text-blue-600"}`} />
                                            <span className="text-base">{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                <div className="border"></div>


                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem className={`py-1 mx-1 rounded-lg
                                ${pathname === "/help" && "font-semibold border-l-2 active:none bg-[#DDEAFC] text-black"} hover:none`}>

                                <SidebarMenuButton asChild className="bg-transparent hover:bg-transparent">
                                    <Link href={'/help'}  >
                                        <i className={`fa fa-gear mx-2 ${pathname === "/help" && "text-blue-600"}`} aria-hidden="true"></i>
                                        <span>Help and Support</span>
                                    </Link>
                                </SidebarMenuButton>

                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar >
    )
}
