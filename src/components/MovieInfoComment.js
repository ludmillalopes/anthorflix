import React, { useState, useEffect } from 'react';
import user1 from "./img/user1.png"
import user2 from "./img/user2.png"
import user3 from "./img/user3.png"
import user4 from "./img/user4.png"
import './style/MovieInfoComment.css';

export default function MovieInfoComment(props) {

  const [comment, setComment] = useState({
    movieComment: '',
  })
  
  useEffect(() => {
    console.log(comment);
  }, [comment]);

  const saveComment = () => {
    console.log(comment);
  }
  
  return (
    <>
      <section className="movie-comment">
        <div className="movie-comment_container">

          <form action="" className="movie-comment_item new-comment">
            <label htmlFor="new-comment">Comentários</label>
            <div className="new-comment_text">
              <textarea
                id="new-comment"
                name="new-comment"
                placeholder="Deixe aqui o seu comentário"
                rows="4"
                onChange={(e) => {
                  setComment({ ...comment, comment: e.target.value });
                }}
              >
              </textarea>
              <button
                id="new-comment_btn"
                type="button"
                onClick={(e) => {
                  saveComment();
                }}
              >
                <i id="icon-new-comment_btn" className="far fa-paper-plane"></i>
              </button>
            </div>
          </form>

          <div className="movie-comment_item">
            <div className="saved-comment">
              <img className="avatar-user" src={user1} alt="avatar de usuário"/>
              <div className="text-comment">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <div className="comment-vote">
                  <a title="like"><i id="like"className="fas fa-thumbs-up"></i></a>
                  <a title="dislike"><i id="dislike" className="fas fa-thumbs-down"></i></a>
                </div>
              </div>
            </div>
            
            <div className="saved-comment">
              <img className="avatar-user" src={user2} alt="avatar de usuário"/>
              <div className="text-comment">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <div className="comment-vote">
                  <a title="like"><i id="like"className="fas fa-thumbs-up"></i></a>
                  <a title="dislike"><i id="dislike" className="fas fa-thumbs-down"></i></a>
                </div>
              </div>
            </div>

            <div className="saved-comment">
              <img className="avatar-user" src={user3} alt="avatar de usuário"/>
              <div className="text-comment">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <div className="comment-vote">
                  <a title="like"><i id="like"className="fas fa-thumbs-up"></i></a>
                  <a title="dislike"><i id="dislike" className="fas fa-thumbs-down"></i></a>
                </div>
              </div>
            </div>

            <div className="saved-comment">
              <img className="avatar-user" src={user4} alt="avatar de usuário"/>
              <div className="text-comment">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <div className="comment-vote">
                  <a title="like"><i id="like"className="fas fa-thumbs-up"></i></a>
                  <a title="dislike"><i id="dislike" className="fas fa-thumbs-down"></i></a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>  
  );
}