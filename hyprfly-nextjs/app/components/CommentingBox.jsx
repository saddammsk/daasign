'use client'
import { useState } from 'react'
import CommentSearchInput from './CommentSearchInput'
import CommentsSelectOption from './CommentsSelectOption'
import UserCommentOption from './UserCommentOption'

export default function CommentingBox() {
  const [commentTab, setCommentTab] = useState(1)
  const [comments, setComments] = useState([
    {
      id: 1,
      name: "Aubrey McMillan",
      time: "1 hour ago",
      text: "Looking forward to the next phase!",
      avatar: "/images/young-woman.png",
      replies: [], 
    },
    {
      id: 2,
      name: "Leroy Strickland",
      time: "30 mins ago",
      text: "Looking forward to the next phase!",
      avatar: "/images/young-woman.png",
      replies: [],
    },
    {
      id: 3,
      name: "Cassandra Vickers",
      time: "10 mins ago",
      text: "Looking forward to the next phase!",
      avatar: "/images/young-woman.png",
      replies: [
        {
          id: 1,
          name: "Cassandra Vickers",
          time: "8 mins ago",
          text: "Very lovely! Looking forward to that!",
          avatar: "/images/young-woman.png",
        },
      ], 
    },
  ]);

  const reply = {
    id: 3,
    name: "Cassandra Vickers",
    time: "8 mins ago",
    text: "Very lovely! Looking forward to that!",
    avatar: "/images/user/4.png",
  };

    function handleTab(index){
      setCommentTab(index);
    }


    const addReply = (commentId) => {
      setComments(prevComments =>
        prevComments.map(comment =>
          comment.id === commentId
            ? { ...comment, replies: [...comment.replies, reply] }
            : comment
        )
      );
    };

  return (
    <>
      <div className="relative flex  lg:m-8">
        <div className="mx-auto w-full max-w-[400px]">
          <div className="w-full mb-auto overflow-y-auto min-h-screen ml-auto border relative bg-white">
            <button className='text-gray-500 font-medium absolute right-2 top-2 bg-gray-100 w-7 h-7 rounded-full'>
              X
            </button>
            <div className="w-full flex flex-col h-full">
                <div className="w-full">
                  <div className="w-full flex items-center mt-16 pb-3 justify-between border-b border-[#97979733]">
                    <h2 className='text-lg px-6 text-black font-semibold'>Comments</h2>
                    <ul className='bg-gray-100 rounded mr-4 flex items-center gap-1 p-[2px]'>
                      <li>
                        <button onClick={()=>handleTab(1)} className={`${commentTab === 1 ? 'bg-white' :'bg-transparent'}` + ' px-2 py-1 text-black rounded text-semibold text-sm'}>
                          Open
                        </button>
                      </li>
                      <li>
                        <button onClick={()=>handleTab(2)} className={`${commentTab === 2 ? 'bg-white' :'bg-transparent'}` + ' px-2 py-1 text-black rounded text-semibold text-sm'}>
                          Resolved
                        </button>
                      </li>
                    </ul>
                  </div>
                  {commentTab === 1 ?  
                  <>
                    <div className="my-5 px-6 flex items-center gap-3">
                    <CommentSearchInput/>
                        <CommentsSelectOption/>
                      </div>
                    <hr className='w-full h-[1px] bg-[#DEDEDE] my-5' />
                    <div className="w-full">
                    <ul>
                        {comments.map((comment) => (
                          <li key={comment.id} className='flex items-start justify-center relative flex-col border-b border-[#97979733] px-6 pb-5'>
                            <div className="flex items-center gap-3">
                              <img src={comment.avatar} className='min-w-10 h-10 rounded-full bg-cover' alt="" />
                              <div>
                                <h3 className='text-lg font-semibold text-black'>{comment.name}</h3>
                                <p className='text-[#00000080] text-sm'>{comment.time}</p>
                              </div>
                            </div>
                            <p className='text-sm text-black mt-2'>{comment.text}</p>
                            <button 
                              className='text-[#1E90FF] text-base mt-1' 
                              onClick={() => addReply(comment.id)}
                            >
                              reply
                            </button>
                            <div className="absolute right-4 top-0">
                              <UserCommentOption />
                            </div>

                            {comment.replies.length > 0 && (
                              <div className="mt-1">
                                <hr className='h-[30px] w-[1px] border-r border-[#CBCBCB] ml-5 -mb-2' />
                                {comment.replies.map((reply) => (
                                  <div key={reply.id} className="flex flex-col items-start gap-3 -mt-1">
                                    <div className="flex items-center gap-3">
                                    <img src={reply.avatar} className='min-w-10 h-10 rounded-full bg-cover' alt="" />
                                    <div>
                                      <h3 className='text-lg font-semibold text-black'>{reply.name}</h3>
                                      <p className='text-[#00000080] text-sm'>{reply.time}</p>
                                    </div>
                                    </div>
                                   
                                    <p className='text-sm text-black mt-2'>{reply.text}</p>
                                  </div>
                                ))}
                              </div>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                    </>
                    :
                    <div className="px-6 py-5 text-black">
                      Resolved Tab
                    </div>
                    }
                </div>
                  <div className="flex items-center justify-center gap-4 mt-auto px-6 pb-6 pt-24">
                   {commentTab === 1 ?  
                    <form className='w-full'>
                      <div className="relative">
                    <textarea name='message' id="message" className='h-[118px] p-2 text-sm w-full border border-[#C8C8C8] rounded-lg'/>
                    <button type='submit' className='bg-black absolute text-sm bottom-3 right-2 px-6 py-1 text-white rounded-lg'>
                    Send
                    </button>
                    </div>
                    </form>
                    :
                    <div className="w-full">
                      {/* Resolved Content */}

                      
                    </div>
                    }  
                  </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}