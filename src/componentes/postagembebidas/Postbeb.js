import "./postbeb.css"
import Postagem from "../postagem/Postagem"

export default function Postagembeb() {

    let postagem1 = {
        "info": "Quinta-Feira - 18/08/2022",
        "titulo": "Vitamina de Abacate",
        "ingre": "2 bananas",
        "ingre2": "2 copos de leite",
        "ingre3": "2 abacates",
        "ingre4": "2 colheres (sopa) de açúcar",
        "descricao": "Coloque no liquidificador o leite, o açúcar; Em seguida, adicione as bananas picadas e o abacate também picado; Bata tudo em velocidade alta por 5 minutos.Assim que as frutas estiverem trituradas, está pronto; Sirva gelado!",
        "foto": "https://www.sabornamesa.com.br/media/k2/items/cache/6b1c619be8b23a102b3cd1b7967289e5_XL.jpg"
    }

    let postagem2 = {
        "info": "Quarta-Feira - 19/10/2022",
        "titulo": "Milk Shake de Oreo",
        "ingre": "Aproximadamente 6 bolas de sorvete de creme",
        "ingre2":"1/4 de xícara de leite gelado",
        "ingre3":"6 a 8 biscoitos Oreo de chocolate",
        "descricao" :"Com a ajuda de uma faca pique os biscoitos em pedaços pequenos; Em um liquidificador, coloque o leite, o sorvete e os biscoitos picados. Bata por alguns instantes até que tudo se misture;Se necessário, desligue o liquidificador, misture com uma colher, e volte a bater. Se gostar de mais liquido acrescente mais leite e se gostar de mais cremoso acrescente mais sorvete de creme. ",
        "foto": "https://marolacomcarambola.com.br/wp-content/uploads/2016/03/receita-de-milk-shake-de-oreo-1.jpg"
    }

    let postagem3 = {
        "info": "Segunda-Feira - 31/10/22",
        "titulo": "Chocolate Quente Cremoso",
        "ingre":"200 ml de leite",
        "ingre2":"2 colheres (sopa) de chocolate em pó",
        "ingre3":"2 colheres(sopa) de açúcar",
        "ingre4":"1 colher de amido de milho",
        "ingre5":"1/2 caixa de creme de leite",
        "descricao":"Numa panela, adicione o leite, o chocolate em pó, o açúcar e o amido de milho; Misture e leve ao fogo médio; Mexa sem parar até levantar fervura e ganhar uma consistência cremosa; Desligue o fogo e por ultimo, adicione o creme de leite; Misture bem até que fique bem encorporado; Sirva em seguida.   ",
        "foto": "https://comidinhasdochef.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2019/04/Chocolate-Quente-Cremoso.jpg.webp"
    }


    return (
        <>
            <div className="posts">
                <Postagem post={postagem1} />
                <Postagem post={postagem2} />
                <Postagem post={postagem3} />
            </div>

        </>
    )
}