import React,{ useState } from 'react'

type Props = {
    question: string;
    answer: string;
}

const Card = (props: Props) => {
    const { question, answer } = props;
    const [showAnswer, setShowAnswer] = useState(false);
  return (
    <div className='flex flex-col items-center w-80 h-52 bg-gray-200 m-4 px-14'>
            <p className='py-5'>{question}</p>
            {showAnswer && <p>{ answer }</p>}
            <button onClick={()=>setShowAnswer(!showAnswer)} className="bg-green-300 p-2 mx-2 mt-8 rounded-lg">
              { !showAnswer?"Reveal answer": "Hide Answer"}
          </button>
            </div>
  )
}

export default Card;