import style from "./Comment.module.css";
import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "../Avatar/Avatar";
import { useState } from "react";

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [ likeCount, setLikeCount ] = useState(0);

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1
    });
  }

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  return (
    <div className={style.comment}>
      <Avatar
        src="http://github.com/aldineifranco.png"
        hasBorder={false}
      />

      <div className={style.commentBox}>
        <div className={style.commentContent}>
          <header>
            <div className={style.authorAndTime}>
              <strong>Aldinei Franco</strong>
              <time
                title="11 de Maio às 08:13h"
                dateTime="2022-05-11 08:13:30"
              >
                Cerca de 1h atrás
              </time>
            </div>
            <button
              onClick={handleDeleteComment}
              title="Deletar Comentário"
            >
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
