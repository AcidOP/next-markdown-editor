const Header = ({ feedSyntax }: { feedSyntax: (syntax: string) => void }) => {
  const btns = [
    { name: "B", syntax: "**Bold**" },
    { name: "I", syntax: "*Italic*" },
    { name: "S", syntax: "~Strikethrough~" },
    { name: "H1", syntax: "# " },
    { name: "H2", syntax: "## " },
    { name: "H3", syntax: "### " },
    { name: "•", syntax: "- " },
    { name: "1.", syntax: "1. " },
    { name: "✓", syntax: "- [ ] " },
    { name: "a", syntax: "[text](url)" },
    { name: "Img", syntax: "![alt](url)" },
    { name: "C", syntax: "```language\n\n```" },
    { name: "--", syntax: "---\n" },
    {
      name: "T",
      syntax:
        "| Header | Title |\n| ----------- | ----------- |\n| Paragraph | Text |",
    },
  ];

  return (
    <header className="flex items-center justify-between h-14 sticky top-0 z-10 bg-[#253237]">
      <h1 className="text-3xl font-bold text-yellow-500">Mdx Editor</h1>
      <section className="flex items-center mx-auto ml-16 space-x-5">
        {btns.map((btn) => (
          <button
            key={btn.syntax}
            className="flex items-center justify-center pt-2 w-8 h-8 text-xl text-yellow-300 rounded-md"
            onClick={() => feedSyntax(btn.syntax)}
          >
            {btn.name}
          </button>
        ))}
      </section>
      <div></div>
    </header>
  );
};

export default Header;
