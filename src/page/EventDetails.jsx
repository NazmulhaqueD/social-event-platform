import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { AuthContext } from '../contexts/AuthContext/AuthProvider';
import { toast } from 'react-toastify';


const comments = [
  {
    userName: "Rakib Hasan",
    userEmail: "rakib@gmail.com",
    userPhoto: "https://i.ibb.co/gwXQ3bj/user1.jpg",
    commentText: "I’ll join this event! Sounds amazing 🌱",
    createdAt: "2025-10-23T15:45:00Z",
  },
  {
    userName: "Sadia Khatun",
    userEmail: "sadia@example.com",
    userPhoto: "https://i.ibb.co/mtMmwHk/user2.jpg",
    commentText: "Please add me to the Kurigram group chat 🙌",
    createdAt: "2025-10-23T16:10:00Z",
  },
  {
    userName: "Farhan Rahman",
    userEmail: "farhan@example.com",
    userPhoto: "https://i.ibb.co/vjsnGVZ/user3.jpg",
    commentText: "I attended last time — the experience was great!",
    createdAt: "2025-10-23T17:00:00Z",
  },
];


const EventDetails = () => {

  const { user, setLoading } = useContext(AuthContext);
  const { id } = useParams();
  const [event, setEvent] = useState(null)
  const navigate = useNavigate();
  const [newComment, setNewComment] = useState();

  useEffect(() => {
    axios.get(`https://social-serve-server.vercel.app/events/${id}`, {

      headers: { Authorization: `Bearer ${user?.accessToken}` }
    })
      .then(result => {
        setEvent(result.data)
      })
  }, [id, user])

  const handleJoinEvent = () => {
    setLoading(true);
    const { _id, ...joinedEvents } = event;
    // const joinedEvents = event;
    joinedEvents.join_id = event._id;
    joinedEvents.participant = user.email;

    axios.post('https://social-serve-server.vercel.app/joinedEvents', joinedEvents, {

      headers: { Authorization: `Bearer ${user?.accessToken}` }
    })
      .then(result => {
        if (result?.data.insertedId) {
          setLoading(false)
          toast.success('You are participate this event successfully')
          navigate('/joinedEvents')
        }
      })
      .catch(error => {
        toast(error)
      })
  }

  const handleCommentSubmit = (e) => {
    e.preventDefault();
  }

  return (

    <div className='max-w-7xl mx-auto mt-8 md:mt-12 p-4 rounded-xl min-h-[70vh] shadow-md'>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 '>
        <img referrerPolicy='no-referrer' className='w-full h-[30vh] md:h-[40vh] lg:h-[60vh] rounded-xl'
          src={event?.photoURL}
          alt="Shoes" />

        <div className="flex flex-col gap-3 flex-grow">
          <h2 className="card-title font-semibold text-xl md:text-2xl lg:text-4xl">{event?.title}</h2>
          <span><p className='text-xl italic font-thin'>{event?.location}</p></span>
          <h2>{new Date(event?.eventDate).toDateString()}</h2>
          <p>{event?.eventType}</p>
          <p className='py-2 italic font-thin'>{event?.Descriptions}</p>
          <button onClick={handleJoinEvent} className="btn btn-primary w-auto block max-w-max">Join Event</button>
        </div>
      </div>

      <div className="mt-10 border-t pt-6">
        <h3 className="text-2xl font-semibold mb-4">💬 Discussion</h3>

        {/* Comment Form */}
        <form onSubmit={handleCommentSubmit} className="flex gap-3 items-start mb-6">
          <img
            src={user?.photoURL}
            alt={user?.displayName}
            className="w-10 h-10 rounded-full"
            referrerPolicy="no-referrer"
          />
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Write your comment..."
            className="textarea textarea-bordered w-full resize-none"
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Post
          </button>
        </form>

        {/* Comments List */}
        <div className="space-y-4">
          {comments.length > 0 ? (
            comments.map((cmt, index) => (
              <div key={index} className="flex gap-3 items-start p-3 bg-gray-50 rounded-lg shadow-sm">
                <img
                  src={cmt.userPhoto}
                  alt={cmt.userName}
                  className="w-10 h-10 rounded-full"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-semibold">{cmt.userName}</h4>
                  <p className="text-sm text-gray-600">{new Date(cmt.createdAt).toLocaleString()}</p>
                  <p className="mt-1">{cmt.commentText}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No comments yet. Be the first to comment!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventDetails;