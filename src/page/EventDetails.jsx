import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { AuthContext } from '../contexts/AuthContext/AuthProvider';
import { toast } from 'react-toastify';
import EventParticipants from '../components/eventDetails/EventParticipants';
const participants = [
  {
    name: "Rakib Hasan",
    photo: "https://i.ibb.co/gwXQ3bj/user1.jpg",
  },
  {
    name: "Sadia Khatun",
    photo: "https://i.ibb.co/mtMmwHk/user2.jpg",
  },
  {
    name: "Farhan Rahman",
    photo: "https://i.ibb.co/vjsnGVZ/user3.jpg",
  },
];


const EventDetails = () => {

  const { user, setLoading } = useContext(AuthContext);
  const { id } = useParams();
  const [event, setEvent] = useState(null)
  const navigate = useNavigate();
  const [newComment, setNewComment] = useState();
  const [comments, setComments] = useState([]);
  const [showAll, setShowAll] = useState(false);


  useEffect(() => {
    axios.get(`https://social-serve-server.vercel.app/events/${id}`, {

      headers: { Authorization: `Bearer ${user?.accessToken}` }
    })
      .then(result => {
        setEvent(result.data)
      })
  }, [id, user])

  useEffect(() => {
    axios.get(`https://social-serve-server.vercel.app/comments?eventId=${id}`)
      .then(res => setComments(res.data))
      .catch(err => console.error(err));
  }, [id, user]);

  const handleJoinEvent = () => {
    setLoading(true);
    const { _id, ...joinedEvents } = event;
    // const joinedEvents = event;
    joinedEvents.join_id = event._id;
    joinedEvents.participantName = user.displayName;
    joinedEvents.participant = user.email;
    joinedEvents.participantPhoto = user.photoURL;

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

  // handleComment for post comment
  const handleCommentSubmit = (e) => {
    e.preventDefault();

    if (!newComment?.trim()) {
      toast.warn("Please write something before posting!");
      return;
    }

    const commentData = {
      userName: user?.displayName || "Anonymous User",
      userEmail: user?.email,
      userPhoto: user?.photoURL || "https://i.ibb.co/gwXQ3bj/default-user.png",
      commentText: newComment,
      eventId: id,
      createdAt: new Date().toISOString(),
    };

    setNewComment("");

    axios.post(`https://social-serve-server.vercel.app/comments`, commentData)
      .then(res => {
        if (res.data.insertedId) {
          setComments([commentData, ...comments,]);
          toast.success("Comment posted successfully!");
        }
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to post comment!");
      });
  };


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

      {/* participant of this Event */}
      <EventParticipants eventId={id}></EventParticipants>

      {/* discussion for comments */}
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
            <>
              {(showAll ? comments : comments.slice(0, 4)).map((cmt, index) => (
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
              ))}

              {/* View All / Show Less Button */}
              {comments.length > 8 && (
                <div className="text-center mt-4">
                  <button
                    onClick={() => setShowAll(!showAll)}
                    className="btn btn-outline btn-sm"
                  >
                    {showAll ? "Show Less" : `View All Comments (${comments.length})`}
                  </button>
                </div>
              )}
            </>
          ) : (
            <p className="text-gray-500">No comments yet. Be the first to comment!</p>
          )}
        </div>

      </div>
    </div>
  );
};

export default EventDetails;