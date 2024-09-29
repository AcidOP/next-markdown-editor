"use client";

import { useState } from "react";
import Markdown from "react-markdown";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CodeBlock, Pre } from "@/components/Code";

import remarkGfm from "remark-gfm";
import rehypeSanitize from "rehype-sanitize";

const Homepage = () => {
  const [source, setSource] = useState("");

  const components = {
    code: CodeBlock,
    pre: Pre,
  };

  const feedSyntax = (syntax: string) => {
    return setSource(source + syntax);
  };

  const data = {
    lines: source.split(/\r\n|\r|\n/).length,
    words: source.split(/\s+/).filter(Boolean).length,
    characters: source.length,
  };

  return (
    <div>
      <Header feedSyntax={feedSyntax} />

      <div className="flex justify-between">
        <section className="w-full pt-5">
          <textarea
            className="w-full bg-transparent h-full resize-none focus:outline-none placeholder:text-lg placeholder:text-white placeholder:tracking-wider placeholder:opacity-80"
            placeholder="Feed me some Markdown 🍕"
            value={source}
            autoFocus
            onChange={(e) => setSource(e.target.value)}
          />
        </section>

        <div className="fixed left-1/2 w-[2px] h-full border-l-2 border-yellow-600 border-dashed" />

        <article className="w-full pt-5 pl-6">
          <Markdown
            className="prose prose-invert min-w-full prose-p:text-xl"
            components={components}
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeSanitize]}
          >
            {source}
          </Markdown>
        </article>
      </div>

      <Footer data={data} />
    </div>
  );
};

export default Homepage;
