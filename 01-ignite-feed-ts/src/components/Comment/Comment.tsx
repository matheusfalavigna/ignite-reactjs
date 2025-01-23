import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";
import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { CommentType as CommentTypeMock } from "../../mocks/comment.mock";
import Avatar from "../Avatar/Avatar";
import styles from "./Comment.module.css";

export type CommentType = CommentTypeMock;

interface CommentProps {
  comment: CommentType;
  onDeleteComment: (commentId: string) => void;
}

export default function Comment({ comment, onDeleteComment }: CommentProps) {
  const { author, publishAt, content } = comment;

  const [likeCount, setLikeCount] = useState(0);

  const publishedDateFormatted = format(
    new Date(publishAt),
    "d 'de' LLLL 'de' yyyy 'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(new Date(publishAt), {
    locale: ptBR,
    addSuffix: true,
  });

  function handleDeleteComment() {
    onDeleteComment(comment.id);
  }

  function handleLikeComment() {
    setLikeCount((state) => state + 1);
  }

  return (
    <div className={styles.comment}>
      <Avatar src={author.avatarUrl} alt={author.name} hasBorder={false} />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>{author.name}</strong>
              <time
                className={styles.date}
                title={publishedDateFormatted}
                dateTime={new Date(publishAt).toISOString()}
              >
                {publishedDateRelativeToNow}
              </time>
            </div>

            <button
              type="button"
              title="Deleter Comentário"
              onClick={handleDeleteComment}
            >
              <Trash size={24} />
            </button>
          </header>

          {content.map((line) => (
            <p key={line.id}>{line.content}</p>
          ))}
        </div>

        <footer>
          <button type="button" onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
