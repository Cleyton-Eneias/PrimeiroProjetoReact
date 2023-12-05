import "./postagem.css"
import "../areaPostagem/AreaPostagem"
import Escreva from "../escreva/Escreva"

export default function Postagem({ post }){
    return(

        <><div className="post">
            <img
                className="postImg"
                src={post.foto}
                alt="" />

            <div className="postInfo">
                <div className="postCat">
                    <span> {post.info} </span>
                </div>
                <div className="postTitulo">
                    <span> {post.titulo} </span>
                </div>
                <div className="postData">
                    <span></span>
                </div>

                <div className="postIngred">
                    <li> {post.ingre} </li>
                    <li> {post.ingre2} </li>
                    <li> {post.ingre3} </li>
                    <li> {post.ingre4} </li>
                    <li> {post.ingre5} </li>
                    <li> {post.ingre6} </li>
                    <li> {post.ingre7} </li>
                    <li> {post.ingre8} </li>
                    <li> {post.ingre9} </li>
                    <li> {post.ingre10} </li>
                </div>
            </div>


            <div className="desc">
                <p className="postDesc">
                    {post.descricao}
                </p>

            </div>

        </div><><Escreva /></></>
    )
}