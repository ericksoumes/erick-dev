"use client";

import { Copyright, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
const articles = [
  {
    id: "1",
    title: "Understanding React Server Components",
    date: "Jan 15, 2024",
    content: [
      "React Server Components (RSC) allow rendering components on the server...",
      "They improve performance and reduce JavaScript bundle size...",
      "To use RSC, you need Next.js 13+ with the App Router...",
      "More details on: https://react.dev",
    ],
  },
  {
    id: "2",
    title: "My Journey into Software Development",
    date: "Feb 02, 2024",
    content: [
      "Ever since I was a kid, I was fascinated by computers...",
      "Learning to code changed my life and led me to amazing opportunities...",
      "In this article, I'll share my story and insights...",
      "More on: https://myblog.com/my-journey",
    ],
  },
];

export default function Home() {
  const [history, setHistory] = useState([
    { command: "help", response: getResponse("help") },
  ]);

  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  function getResponse(command: string) {
    const args = command.trim().toLowerCase().split(" ");

    if (args[0] === "about") {
      return (
        <>
          <p>
            I am a software developer, currently pursuing a degree in Análise e
            Desenvolvimento de Sistemas (Analysis and Development of Systems),
            expecting to graduate in 2026.
          </p>
          <br />
          <p>
            I started my studies in the technology field in early 2022 with the
            DevPro course, focusing on web development. Since then, I have
            expanded my knowledge to other areas and technologies, thanks to the
            curso.dev (a programming course by Filipe Deschamps). I have
            completed several projects and challenges, as well as some personal
            projects using my acquired skills.{" "}
          </p>
          <br />

          <p>
            I am a curious person who likes to propose solutions to problems and
            learn from the process. My goal is to become a proficient and
            versatile software developer who can contribute to impactful and
            innovative projects.
          </p>
        </>
      );
    }

    if (args[0] === "blog") {
      return (
        <>
          <p>Recent Articles:</p>
          <hr className="border-t border-white w-full my-2 border-dashed" />
          {articles.map((article) => (
            <div key={article.id} className="mb-2">
              <p className="font-bold text-blue-400">
                {article.id}. {article.title}
              </p>
              <p>🗓️ {article.date}</p>
              <hr className="border-t border-white w-full my-2 border-dashed" />
            </div>
          ))}
          <p>
            Type <span className="text-green-400">read &lt;id&gt;</span> to open
            an article.
          </p>
        </>
      );
    }

    if (args[0] === "read" && args[1]) {
      const article = articles.find((a) => a.id === args[1]);
      if (article) {
        return (
          <>
            <p className="font-bold text-blue-400">{article.title}</p>
            <p>🗓️ {article.date}</p>
            <hr className="border-t border-white w-full my-2 border-dashed" />
            <p>{article.content}</p>
          </>
        );
      }
      return `Article not found.`;
    }

    if (args[0] === "help") {
      return (
        <>
          <p>
            Welcome to Erick Sousa&apos;s portfolio! Type or click on one of the
            commands below to navigate:
          </p>
          <br />
          <p>
            <span
              onClick={() => handleKeyDown(undefined, "about")}
              className="text-green-400 hover:underline cursor-pointer"
            >
              about
            </span>{" "}
            → Learn more about me
          </p>
          <p>
            <span
              onClick={() => handleKeyDown(undefined, "projects")}
              className="text-green-400 hover:underline cursor-pointer"
            >
              projects
            </span>{" "}
            → Check out my projects
          </p>
          <p>
            <span
              onClick={() => handleKeyDown(undefined, "blog")}
              className="text-green-400 hover:underline cursor-pointer"
            >
              blog
            </span>{" "}
            → Read my articles
          </p>
          <p>
            <span
              onClick={() => handleKeyDown(undefined, "contact")}
              className="text-green-400 hover:underline cursor-pointer"
            >
              contact
            </span>{" "}
            → Get in touch
          </p>
          <p>
            <span
              onClick={() => handleKeyDown(undefined, "clear")}
              className="text-green-400 hover:underline cursor-pointer"
            >
              clear
            </span>{" "}
            → Clear the terminal
          </p>
        </>
      );
    }

    if (args[0] === "projects") {
      return (
        <>
          <p>Available projects:</p>
          <hr className="border-t border-white w-full my-2 border-dashed" />
          <div className="mb-2">
            <p className="font-bold text-blue-400">1. Portfolio Terminal</p>
            <p>A Linux-style terminal portfolio.</p>
            <p>
              ➜{" "}
              <a
                href="https://myportfolio.com"
                target="_blank"
                className="text-green-400 hover:underline"
              >
                Live Demo
              </a>
            </p>
          </div>
        </>
      );
    }

    if (args[0] === "contact") {
      return (
        <>
          <p>
            Email me at{" "}
            <span className="text-green-400">erigomes05@gmail.com</span> or send
            me a message at{" "}
            <span className="text-green-400">+5519987102555</span>
          </p>
        </>
      );
    } else {
      return `Command not found: ${command}`;
    }
  }

  function handleKeyDown(
    e?: React.KeyboardEvent<HTMLInputElement>,
    manualCommand?: string
  ) {
    let command = manualCommand || input.trim().toLowerCase();

    if (e) {
      if (e.key !== "Enter" || input.trim() === "") return;
      command = input.trim().toLowerCase();
    }

    if (command === "clear") {
      setHistory([]);
    } else {
      setHistory((prevHistory) => [
        ...prevHistory,
        {
          command,
          response: getResponse(command),
        },
      ]);
    }

    setInput("");
  }

  return (
    <div
      onClick={() => inputRef.current?.focus}
      className="flex items-center justify-center size-full lg:max-w-[70%]"
    >
      <main className="flex flex-col size-full">
        <div className="size-full bg-[#282828] rounded-lg overflow-clip">
          <div className="w-full h-8 bg-[#1e1e1e]">
            <div className="flex flex-row items-center px-2 gap-2 size-full">
              <div className="bg-[#ed6a5f] w-3 h-3 rounded-full"></div>
              <div className="bg-[#f5bf4f] w-3 h-3 rounded-full"></div>
              <div className="bg-[#61c554] w-3 h-3 rounded-full"></div>
            </div>
          </div>

          <div
            className="p-2 overflow-y-auto pb-[10rem] h-full"
            style={{ maxHeight: "calc(100vh - 4rem)" }}
          >
            {history.map((entry, index) => (
              <div key={index}>
                <span className="text-[#eaec23]">erick@dev:~$</span>{" "}
                {entry.command}
                <div className="pl-6">{entry.response}</div>
              </div>
            ))}

            <div>
              <div className="flex flex-row gap-2">
                <span className="text-[#eaec23]">erick@dev:~$</span>
                <input
                  ref={inputRef}
                  type="text"
                  className="bg-transparent outline-none text-white w-full"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  autoFocus
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row pt-2 justify-center gap-2">
          <span className="flex flex-row">
            <Copyright width={16} /> ericksousa
          </span>
          <Link href={"https://github.com/ericksoumes"}>
            <Github
              width={16}
              className="hover:text-[#eaec23] cursor-pointer"
            />
          </Link>
          <Link href={"https://www.linkedin.com/in/ericksoumes/"}>
            <Linkedin
              width={16}
              className="hover:text-[#eaec23] cursor-pointer"
            />
          </Link>
        </div>
      </main>
    </div>
  );
}
