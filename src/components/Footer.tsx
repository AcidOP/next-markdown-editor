import { useState } from 'react';
import { FaInfo } from 'react-icons/fa'

type Props = {
  data: {
    lines: number;
    words: number;
    characters: number;
  }
}

const Modal = ({ closeModal }: any) => {
  
}

const Footer = ({ data }: Props) => {
  let subtitle: any;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className='h-10 z-10 bg-[#253237] fixed bottom-0 w-full pr-10 flex justify-between'>
      <div className="text-xl font-semibold flex space-x-3">
        <span>Lines: {data.lines}</span>
        <span>Chars: {data.characters}</span>
        <span>Words: {data.words}</span>
      </div>

      <div className="text-2xl font-bold text-yellow-500 animate-pulse">
        <button onClick={openModal}><FaInfo /></button>
      </div>
    </div>
  )
}

export default Footer
