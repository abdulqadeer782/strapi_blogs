'use client'

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles


const QuillEditor = dynamic(() => import('react-quill'), { ssr: false });


export default function SubmitAritcle({ params }) {
  const [content, setContent] = useState();


  const quillModules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link', 'image'],
      [{ align: [] }],
      [{ color: [] }],
      ['code-block'],
      ['clean'],
    ],
    
  };


  const quillFormats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'link',
    'image',
    'align',
    'color',
    'code-block',
  ];


  const handleEditorChange = (newContent) => {
    setContent(newContent);
  };
  return (
    <>
    <article className="bg-light dark:bg-dark">
      <div className="container mx-auto justify-center py-9">
       <div className="max-w-full mx-auto px-4">
        {/* <div className="flex justify-between  mb-6">
          <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">Submit An Article</h2>
        </div> */}
        <div className="flex-row basis-1/8 flex justify-center">
          <div className="w-full mx-auto dark:bg-current rounded-lg  shadow-lg dark:border md:mt-0 sm:max-w-4xl xl:p-0 0 " >
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8" >
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-left">Submit An Article</h1>
                <form className=" mx-auto">
                  <label className="flex flex-col items-center justify-center border-slate-500 border mb-2 rounded-md flex-grow h-full py-3 transition-colors duration-150 cursor-pointer hover:text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-14 h-14"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="#64748b"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                      />
                    </svg>
                    <strong className="text-sm font-medium dark:text-white">Select an featured image</strong>
                    <input className="block w-0 h-0" name="file" type="file" />
                  </label>
                  <div className="mb-5">
                      <label for="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Article Title</label>
                      <input type="text" id="large-input"  className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-700 dark:border-gray-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                  </div>
                  <div className="mb-5">
                      <label for="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                      <select type="text" id="large-input"  className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-700 dark:border-gray-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                          <option>Select Category</option>
                          <option>Category 1</option>
                          <option>Category 2</option>
                          <option>Category 3</option>
                          <option>Category 4</option>
                          <option>Category 5</option>
                      </select>
                  </div>
                  <div className="mb-5">
                      <label for="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Language</label>
                      <select type="text" id="large-input"  className="block w-full p-4  border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-700 dark:border-gray-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                          <option>Select Language</option>
                          <option>Urdu</option>
                          <option>English</option>
                      </select>
                  </div>
                  <div className="mb-5">
                    <QuillEditor
                      value={content}
                      onChange={handleEditorChange}
                      modules={quillModules}
                      formats={quillFormats}
                      className="w-full h-80 mt-10  text-base bg-white dark:border-gray-600 dark:placeholder-slate-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>


                  <button class="dark:bg-slate-500 mt-10 justify-self-end dark:text-white bg-white text-black mr-5 pt-2 pb-2 pl-3 pr-3 rounded" >Submit</button>
                </form>
                
              </div>
          </div>
        </div>
       </div>
      </div>
    </article>
    </>
   
  );
}
