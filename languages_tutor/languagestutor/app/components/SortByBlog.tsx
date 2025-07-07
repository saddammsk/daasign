import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'
import { useEffect, useMemo, useState } from 'react'
import { sanityClient } from '../lib/sanity'
import { allBlogQuery } from '../lib/queries'
import { useGlobalContext } from '../context/GlobalContext'

const sortOptions = [
  { id: 1, name: 'Popular' },
  { id: 2, name: 'New' },
  { id: 3, name: 'Top Rated' },
]

interface BlogItem {
  topBlog: number;
  createdAt: string;
}

export default function SortByBlog() {
  const [selected, setSelected] = useState(sortOptions[0])
  const [Blog, setBlog] = useState<BlogItem[]>([])
  const { filteredBlog, setFilteredBlog } = useGlobalContext()

  useEffect(() => {
    const fetchBlog = async () => {
      const data = await sanityClient.fetch(allBlogQuery)
      setBlog(data)
    }
    fetchBlog()
  }, [])

  const sortedBlog = useMemo(() => {
    if (!Blog || Blog.length === 0) return []

    const sorted = [...Blog]

    switch (selected.name) {
      case 'Popular':
        return sorted
      case 'Top Rated':
        return sorted.sort((a, b) => b.topBlog - a.topBlog)
      case 'New':
        return sorted.sort(
          (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        )
      default:
        return sorted
    }
  }, [selected, Blog])

  useEffect(() => {
    if (sortedBlog.length > 0) {
      setFilteredBlog(sortedBlog)
    }
  }, [sortedBlog, setFilteredBlog])

  return (
    <div className="inline-flex flex-col items-start gap-4">
      <div className="inline-flex items-center justify-center">
        <span className="whitespace-nowrap text-base text-gray5 font-medium mr-2">
          Sort by:
        </span>
        <Listbox value={selected} onChange={setSelected}>
          <ListboxButton
            className={clsx(
              'relative block w-full py-1.5 pr-8 pl-2 text-left text-base text-neutral2 font-medium',
              'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
            )}
          >
            {selected.name}
            <ChevronDownIcon
              className="group pointer-events-none absolute top-2 right-2.5 size-5 fill-gray5"
              aria-hidden="true"
            />
          </ListboxButton>
          <ListboxOptions
            anchor="bottom"
            transition
            className={clsx(
              'w-fit rounded-lg border border-neutral3 bg-neutral5 px-1 py-3 focus:outline-none',
              'transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0'
            )}
          >
            {sortOptions.map((option) => (
              <ListboxOption
                key={option.id}
                value={option}
                className="group flex cursor-pointer text-base font-medium items-center gap-2 rounded-lg py-1 px-2 select-none"
              >
                <CheckIcon className="invisible size-4 fill-primary1 group-data-[selected]:visible" />
                <div className="text-base text-gray5 group-data-[selected]:text-primary1">
                  {option.name}
                </div>
              </ListboxOption>
            ))}
          </ListboxOptions>
        </Listbox>
      </div>
    </div>
  )
}
