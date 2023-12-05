import "./areapostagem.css"
import Postagem from "../postagem/Postagem"


export default function AreaPostagem() {

    let postagem1 = {
        "info": "Quinta-Feira - 18/08/2022",
        "titulo": "Panqueca de Aveia",

        "ingre": <>1 xícara (chá) de leite desnatado</>,
        "ingre2": <>1 xícara (chá) de farinha de aveia</>,
        "ingre3": <>2 ovos</>,
        "ingre4": <>1/2 colher (café) de sal</>,
        "ingre5": <>1 colher (café) de salsa desidratada</>,
        "descricao": "Leve o açúcar, em uma panela, ao fogo e cozinhe até caramelizar. Adicone 1/2 xícara de água e desligue o fogo. Despeje esse calda em uma forma com furo no meio e reserve. Em um bowl, misture a tapioca granulada com leite de coco e deixe hidratar de 20 a 30 minutos, reserve. Bata no liquidificador o leite com o leite condensado e os ovos. Abra a tampa do liquidificador e adicione a tapioca hidratada. Bata rapidamente, apenas para misturar.Desepeje essa mistura na forma reservada com a calda.Cubra a forma com papel-alumínio e leve ao forno em banho-maria (180° C) por cerca de 60 minutos. Desenforme e reserve na geladeira.",
        "foto": "https://img.itdg.com.br/tdg/images/recipes/000/185/197/298490/298490_original.jpg?mode=crop&width=710&height=400"
    }

    let postagem2 = {
        "info": "Segunda-Feira - 10/03/2022",
        "titulo": "Bolo de Tapioca",

        "ingre": <>1 xícara de açúcar</>,
        "ingre2": <>1/2 xícara de água</>,
        "ingre3": <>1 xícara de tapioca granulada</>,
        "ingre4": <>200 ml de leite de coco</>,
        "ingre5": <>2 xícaras de leite</>,
        "ingre6": <>1 lata de leite condensado</>,
        "ingre7": <>4 ovos</>,


        "descricao": ("Leve o açúcar, em uma panela, ao fogo e cozinhe até caramelizar. Adicone 1/2 xícara de água e desligue o fogo. Despeje esse calda em uma forma com furo no meio e reserve. Em um bowl, misture a tapioca granulada com leite de coco e deixe hidratar de 20 a 30 minutos, reserve. Bata no liquidificador o leite com o leite condensado e os ovos. Abra a tampa do liquidificador e adicione a tapioca hidratada. Bata rapidamente, apenas para misturar. Desepeje essa mistura na forma reservada com a calda. Cubra a forma com papel-alumínio e leve ao forno em banho-maria (180° C) por cerca de 60 minutos. Desenforme e reserve na geladeira."),
        "foto": "https://i0.wp.com/xtudoreceitas.com/wp-content/uploads/pudim-de-tapioca.jpg?w=600&ssl=1"
    }

    let postagem3 = {
        "info": "Sexta-Feira - 20/06/2022",
        "titulo": "Carne de panela de pressão",

        "ingre": <>1 kg de carne (acém, patinho ou lombo de porco)</>,
        "ingre2": <>8 cebolas grandes cortadas em rodelas</>,
        "ingre3": <>3 ou 4 cubos de caldo de carne</>,


        "descricao": ("Forre o fundo de uma panela de pressão com metade das cebolas. Esfarele um cubo de caldo de carne por cima das cebolas, adicione a carne, adicione outro cubo de caldo de carne e cubra com o restante das cebolas. Feche a panela de pressão, sem adicionar água, e deixe cozinhar por 25 minutos. Se preferir, adicione batatas em rodelas e deixe cozinhar por mais 10 minutos."),
        "foto": "https://vovopalmirinha.com.br/wp-content/uploads/2016/05/carne-de-panela-005.png"
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