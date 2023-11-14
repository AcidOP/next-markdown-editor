import { useState } from 'react';
import { FaInfo } from 'react-icons/fa'
import { AiFillGithub } from 'react-icons/ai'

type Props = {
  data: {
    lines: number;
    words: number;
    characters: number;
  }
}

const Footer = ({ data }: Props) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const Modal = () => {
    return (
      <div className='fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-90 flex justify-center items-center text-gray-400 text-base z-10'>
        <div className='bg-gray-800 rounded-lg p-6 opacity-100'>
          <h1 className='tracking-wider text-2xl text-white'>Next Markdown Editor 🚀</h1>
          <hr className='border border-gray-700 my-2 rounded-full' />
          <p className=''>A Markdown Editor built using Next.js.</p>
          <div className='pt-3'>
            <p>Made by: <a href='https://github.com/AcidOP' target='_blank' className='text-white'>AcidOP</a></p>
            <div className='text-2xl pt-3 flex justify-between'>
              <a href='https://github.com/AcidOP/next-markdown-editor' target='_blank' className='text-white'>
                <AiFillGithub />
              </a>
              <button
                className='text-sm bg-red-600 rounded-lg px-4 py-2 text-white'
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='h-10 z-10 bg-[#253237] fixed bottom-0 w-full pr-10 flex justify-between'>
      <div className="text-xl font-semibold flex space-x-3">
        <span>Lines: {data.lines}</span>
        <span>Chars: {data.characters}</span>
        <span>Words: {data.words}</span>
      </div>

      <div className="text-2xl font-bold text-yellow-500 flex space-x-3">
        <button onClick={openModal}><FaInfo /></button>
        {modalIsOpen && <Modal />}
      </div>
    </div>
  )
}

export default Footer
