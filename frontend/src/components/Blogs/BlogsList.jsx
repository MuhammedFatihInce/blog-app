import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BlogCard from './BlogCard'
import { MdKeyboardDoubleArrowDown } from 'react-icons/md';
import LoadingComponent from '../LoadingComponent';

const BlogsList = ({blogsData, callback}) => {

  const {blogsList, totalPages, currentPage} = blogsData;

  const { loading } = useSelector((store) => store.blog);
  const handleShowMoreButton = () => {
    if(totalPages > currentPage){
      callback();
    }
  }

  return (
    <>
      <main className='mt-10 relative mb-10 mx-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
      {
        loading && <LoadingComponent />    
      }
      {
        blogsList.length > 0
        ?
        <>
        {
          blogsList?.map((blog, index) => {
            return(
              <div >
                <BlogCard key={blog._id} {...blog}/>
                <div className='w-full h-[1px] bg-[#f0eeee]'></div>
              </div>
            )
          })
        }
        {
          totalPages > currentPage
          &&
          <button onClick={handleShowMoreButton} className='mx-auto px-2 flex flex-col items-center justify-center text-slate-600 hover:text-[#1f83aa]'>
            <MdKeyboardDoubleArrowDown className='text-2xl'/>
            <div className='flex items-center justify-center text-sm font-medium'>Daha fazla</div>
          </button>
        }
        </>
        :
        <div className='w-full flex flex-col justify-start items-start text-base font-medium text-[#585858]'>
          {
            !loading
            &&
            <span>No Blog</span>
          }
        </div>
        
      }
      </main>
    </>
  )
}

export default BlogsList;
