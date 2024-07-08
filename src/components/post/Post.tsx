import React from 'react'
import "./Post.css"
import { MoreVert } from '@mui/icons-material'

export default function Post() {
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img 
                        src='./assets/person/1.jpeg' 
                        alt='' 
                        className="postProfileImg"
                    />
                    <span className="postUsername">username</span>
                    <span className="postDate">5分前</span>                    
                </div>
                <div className="postTopRight">
                    <MoreVert/>
                </div>                
            </div>
            <div className="postCenter">
                <span className="postText">作成中</span>
                <img className="postImg" src="./assets/post/1.jpeg" alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img
                        className="likeIcon"
                        src="./assets/heart.png"
                        alt=""
                    />
                    <span className="postLikeCounter">
                    5人がいいねを押しました
                    </span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">4:コメント</span>
                </div>
            </div>
        </div>
    </div>
  )
}
