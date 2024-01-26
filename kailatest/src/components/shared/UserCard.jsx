import '../../../src/globals.css'
import { multiFormatDateString } from './utils'
import { Link } from 'react-router-dom'
import React from "react";
import manicon from "/assets/images/man.png"
import womanicon from "/assets/images/woman.png"
import { IoLocationOutline } from "react-icons/io5";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";




export function Card1({ d }) {

  const toggleSave = () => {
    console.log("saved")
  }

  return (
    <div className="w-[300px] h-[200px] bg-white m-2 p-2 rounded-3xl">
      <div className="flex justify-between cursor-default">


        <div className="rounded-full bg-white">
          {d?.gender === "m" ?
            <img height={40} src={manicon} alt="looo" />
            :
            <img height={40} src={womanicon} alt="looo" />
          }
        </div>

        <div className="max-w-[150px] truncate rounded">
          <IoLocationOutline className='w-full' />
          {d?.city}male'</div>


        <div className="">
          <div className="bg-green-300 rounded-3xl flex justify-center">
            Pid:{d.id}
          </div>
          <div className="text-l font-normal">Age: {new Date().getFullYear() - new Date(d.dob).getFullYear()}</div>
        </div>


      </div>


      <div className="title flex justify-center cursor-default" value="val">
        {d.name}
      </div>

      <div className="text-gray-800 text-center bg-green-100 h-[50px] pb-1 mt-1 mb-1 rounded-full flex justify-center cursor-default">
        {d.aboutme}
      </div>

      <div className="w-full footer flex justify-between pb-1 rounded-2xl bg-gradient-to-r from-indigo-500">
        <div className='p-3'>
          {d.id ? <FaRegBookmark size={25} onClick={toggleSave} className='cursor-pointer' /> :
            <FaBookmark size={25} onClick={toggleSave} className='cursor-pointer' />
          }

        </div>
        <span className="mb-1 mt-2 text-white cursor-default">
          {multiFormatDateString(d.createdAt)}
        </span>

        <button
          className="cursor-pointer text-white mr-1 pr-2 pl-2 bg-blue-500 rounded-full mt-1 hover:bg-blue-600"
        >
          View
        </button>
      </div>

    </div>
  )
}


export const Card2 = ({ d }) => {

  //if (!d.id) return <h2>Error</h2>;
  return (
    <div className="post-card ">
      <div className="flex-between ">
        <div className="flex items-center gap-3 ">
          <Link to={`/profile/${d?.id}`}>
            <img
              src={
                (d?.profilePic && "/upload/" + d?.profilePic) ||
                "/assets/images/person.png"
              }
              alt="ddd"
              className="w-12 lg:h-12 rounded-full"
            />
          </Link>

          <div className="flex flex-col">
            <p className="base-medium lg:body-bold text-dark-1">{d?.name}</p>
            <div className="flex-center gap-2 text-light-3">
              <p className="subtle-semibold lg:small-regular ">
                {multiFormatDateString(d.createdAt)}
              </p>
              •<p className="subtle-semibold lg:small-regular">{d?.city}</p>
            </div>
          </div>
        </div>

        <Link to={`/profile/${d?.id}`}>
          <img
            src={
              d.gender === "m"
                ? "/assets/images/man.png"
                : "/assets/images/woman.png"
            }
            alt="ddd"
            className="w-12 lg:h-12 rounded-full"
          />
        </Link>

        <Link
          to={`/update-post/${d?.id}`}
          className={`${d?.id !== d?.id && "hidden"}`}>
          <img
            src={"/assets/icons/edit.svg"}
            alt="edit"
            width={20}
            height={20}
          />
        </Link>
      </div>

      <Link to={`/posts/${d?.id}`}>
        <div className="small-medium lg:base-medium py-5">
          <ul className="flex gap-1 mt-2">
            {d.tags?.map((tag, index) => (
              <li key={`${tag}${index}`} className="text-light-3 small-regular">
                #{tag}
              </li>
            ))}
          </ul>
          <p>{d?.email}</p>
        </div>
      </Link>

      {/* <PostStats post={d} userId={d.id} /> */}
    </div>
  );
};


