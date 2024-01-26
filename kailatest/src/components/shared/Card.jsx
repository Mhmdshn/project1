// import moment from 'moment'
// import React, { useContext, useState } from 'react'
// import { Link } from 'react-router-dom'
// import { FaBars, FaRegBookmark, FaBookmark } from "react-icons/fa";
// import { MdOutlineTextsms } from "react-icons/md";
// import { IoMegaphoneOutline } from "react-icons/io5";
// import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
// import { makeRequest } from "../../axios";
// import { AuthContext } from "../../context/authContext";
// import { multiFormatDateString } from './utils';

// const queryClient = useQueryClient();
// const { currentUser } = useContext(AuthContext);

// const Card = ({ post }) => {
//   const [commentOpen, setCommentOpen] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);


//   const getUsers = () => {
//     makeRequest.get("/likes?postId=" + post.id).then((res) => {
//       return res.data;
//     })
//   }

//   const { data } = useQuery({
//     queryKey: ["likes"],
//     queryFn: getUsers,
//   })


//   const mutation = useMutation((liked) => {
//     if (liked) return makeRequest.delete("/likes?postId=" + post.id);
//     return makeRequest.post("/likes", { postId: post.id });
//   },
//     {
//       onSuccess: () => {
//         // Invalidate and refetch
//         queryClient.invalidateQueries(["likes"]);
//       },
//     }
//   );
//   const deleteMutation = useMutation(
//     (postId) => {
//       return makeRequest.delete("/posts/" + postId);
//     },
//     {
//       onSuccess: () => {
//         // Invalidate and refetch
//         queryClient.invalidateQueries(["posts"]);
//       },
//     }
//   );

//   const handleLike = () => {
//     mutation.mutate(data.includes(currentUser.id));
//   };

//   const handleDelete = () => {
//     deleteMutation.mutate(post.id);
//   };


//   return (
//     <div className="post">
//       <div className="container">
//         <div className="user">
//           <div className="userInfo">
//             <img src={"/upload/" + post.profilePic} alt="" />
//             <div className="details">
//               <Link
//                 to={`/profile/${post.userId}`}
//                 style={{ textDecoration: "none", color: "inherit" }}
//               >
//                 <span className="name">{post.name}</span>
//               </Link>
//               <span className="date">{moment(post.createdAt).fromNow()}</span>
//             </div>
//           </div>
//           <FaBars onClick={() => setMenuOpen(!menuOpen)} />
//           {menuOpen && post.userId === currentUser.id && (
//             <button onClick={handleDelete}>delete</button>
//           )}
//         </div>
//         <div className="content">
//           <p>{post.desc}</p>
//           <img src={"/upload/" + post.img} alt="" />
//         </div>
//         <div className="info">
//           <div className="item">
//             {isLoading ? (
//               "loading"
//             ) : data.includes(currentUser.id) ? (
//               <FaBookmark
//                 style={{ color: "red" }}
//                 onClick={handleLike}
//               />
//             ) : (
//               <FaRegBookmark onClick={handleLike} />
//             )}
//             {data?.length} Likes
//           </div>
//           <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
//             <MdOutlineTextsms />
//             See Comments
//           </div>
//           <div className="item">
//             <IoMegaphoneOutline />
//             Ask
//           </div>
//         </div>
//         {commentOpen && <Comments postId={post.id} />}
//       </div>
//     </div>
//   )
// }

// export default Card
