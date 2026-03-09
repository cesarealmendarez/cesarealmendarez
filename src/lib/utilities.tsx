import { ExternalLink, Github } from "lucide-react";

export const navigationLinks = [
    {
        id: 0,
        name: "Index",
        url: "/",
        target: "_self",
    },
    {
        id: 1,
        name: "Projects",
        url: "/projects",
        target: "_self",
    },
    {
        id: 2,
        name: "Resume",
        url: "resume-cesar-almendarez.pdf",
        target: "_blank",
    }
];

export const socialLinks = [
    {
        id: 0,
        name: "Github",
        url: "https://github.com/cesarealmendarez",
    },
    {
        id: 1,
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/cesarealmendarez",
    },
    {
        id: 2,
        name: "Email",
        url: "mailto:cesarealmendarez@gmail.com",
    }
];

export const projects = [
    {
        id: 0,
        name: "DoneDidIt",
        description:
            "✅ 📱 iOS To-Do List App. Inspired by 'Microsoft To Do'. SwiftUI + Firebase.",
        type: "iOS Development",
        tech: ["Swift", "Xcode", "Firebase"],
        links: [
            {
                id: 0,
                url: "https://apps.apple.com/us/app/done-did-it/id6445909068",
                icon: (
                    <ExternalLink
                        size={18}
                        strokeWidth={1.5}
                        className="text-white"
                    />
                ),
            },
            {
                id: 1,
                url: "https://github.com/cesarealmendarez/DoneDidIt",
                icon: (
                    <Github
                        size={18}
                        strokeWidth={1.5}
                        className="text-white"
                    />
                ),
            },
        ],
    },
    {
        id: 1,
        name: "NewsNova",
        description: "🚨 📰 A live news web app built with Next.js and TypeScript that retrieves real-time headlines from the MediaStack API through a GraphQL layer using StepZen. The interface is styled with Tailwind CSS and Headless UI for a responsive, accessible design.",
        type: "Web Development",
        tech: ["Next.js", "TypeScript", "Tailwind CSS"],
        links: [
            {
                id: 0,
                url: "https://newsnova.vercel.app/",
                icon: (
                    <ExternalLink
                        size={18}
                        strokeWidth={1.5}
                        className="text-white"
                    />
                ),
            },
            {
                id: 1,
                url: "https://github.com/cesarealmendarez/NewsNova",
                icon: (
                    <Github
                        size={18}
                        strokeWidth={1.5}
                        className="text-white"
                    />
                ),
            },
        ],
    },
    {
        id: 2,
        name: "DeepASL",
        description: "🤖 🖐️ Real-time classification of American Sign Language (ASL) alphabet gestures using Convolutional Neural Networks.",
        type: "Computer Vision & CNNs",
        tech: ["Python", "OpenCV", "NumPy"],
        links: [
            {
                id: 0,
                url: "https://github.com/cesarealmendarez/DeepASL",
                icon: (
                    <Github
                        size={18}
                        strokeWidth={1.5}
                        className="text-white"
                    />
                ),
            },
        ],
    },
    {
        id: 3,
        name: "This Site",
        description: "💻 🗂️ Cesar Almendarez Developer Portfolio",
        type: "Web Development",
        tech: ["Next.js", "Vercel", "Tailwind CSS"],
        links: [
            {
                id: 0,
                url: "https://github.com/cesarealmendarez/cesaralmendarez_io",
                icon: (
                    <Github
                        size={18}
                        strokeWidth={1.5}
                        className="text-white"
                    />
                ),
            },
        ],
    },
];