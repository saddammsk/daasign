import React from 'react'

const CommentSearchInput = () => {
  return (
      <div className="relative w-full flex items-center">
    <input name='searchInput' id='searchInput' type="text" placeholder='search' className='bg-[#0000000A] placeholder:text-[#00000080] text-base text-black placeholder:text-black w-full rounded-3xl h-9 pl-9 or-5' />
    <span className='absolute left-3'><svg
        width={18}
        height={20}
        viewBox="0 0 22 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 0.5C4.02944 0.5 0 4.52944 0 9.5C0 14.4706 4.02944 18.5 9 18.5C11.125 18.5 13.078 17.7635 14.6177 16.5319L20.2929 22.2071C20.6834 22.5976 21.3166 22.5976 21.7071 22.2071C22.0976 21.8166 22.0976 21.1834 21.7071 20.7929L16.0319 15.1177C17.2635 13.578 18 11.625 18 9.5C18 4.52944 13.9706 0.5 9 0.5ZM2 9.5C2 5.63401 5.13401 2.5 9 2.5C12.866 2.5 16 5.63401 16 9.5C16 13.366 12.866 16.5 9 16.5C5.13401 16.5 2 13.366 2 9.5Z"
        fill="#7B7B7B"
        />
    </svg>
    </span>
    </div>
  )
}

export default CommentSearchInput