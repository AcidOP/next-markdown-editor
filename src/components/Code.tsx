import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialOceanic } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const CodeBlock = ({ ...props }) => {

  // Inline code
  if(!props.className?.includes('language' || 'language')) {
    return (
      <code className='bg-gray-700 text-gray-300 rounded-md px-1'>
        {props.children}
      </code>
    )
  }

  return (
    <SyntaxHighlighter
      language={props.className?.replace(/(?:lang(?:uage)?-)/, '')}
      style={materialOceanic}
      wrapLines={true}
      showLineNumbers={true}
      className='not-prose rounded-md'
    >
      {props.children}
    </SyntaxHighlighter>
  )
}

export const Pre = ({ ...props }) => {
  return (
    <div className='not-prose'>
      {props.children}
    </div>
  )
}
