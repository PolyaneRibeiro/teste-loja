export const mockMarcas = [
    './marca1.jpg', './marca2.jpg', './marca3.jpg', './marca4.jpg', './marca5.jpg', './marca6.jpg'
]

export const mockTendencia = [
    {
        titulo: 'Jaqueta puffer',
        ancora: 'jaqueta-puffer',
        descricao: [
            'A jaqueta puffer, que alia conforto e aconchego do tecido almofadado com a tendência da modelagem oversized, é uma grande aposta da temporada de outono-inverno deste ano. Febre nos anos 1980 e 90, ela volta atualizada em várias versões diferentes, das mais esportivas às chiques e elegantes, além das opções impermeáveis, perfeitas para os dias de garoas ou vento gelado.',
            'Esportiva: O modelo clássico de nylon fosco em tonalidades neutras se tornou um queridinho da estação. Versátil, você pode inclui-lo em propostas despojadas ou mesmo equilibrá-lo com uma calça de alfaiataria, por exemplor.',
            'De couro: Quando o objetivo for montar um visual elegante, uma boa pedida é escolher a jaqueta puffer com material que imita couro. Essa versão é um dos maiores hits desta temporada e fica linda com calça jeans ou conjuntinho de moleton.',
            'Cropped: Outro queridinho da vez é o comprimento cropped, que acaba valorizando o volume do casaco.',
            'Envernizada: O efeito envernizado também vem para acrescentar um ar sofisticado à jaqueta. Uma excelente escolha para você criar uma pegada mais rocker, sabe?'
        ],
        imagem: './tendencias/jaqueta-puffer.jpg',
        looks: [
            {
                img: './tendencias/t_puffer1.jpg',
                texto: 'Com saia'
            },
            {
                img: './tendencias/t_puffer2.jpg',
                texto: 'Com calça legging'
            },
            {
                img: './tendencias/t_puffer3.jpg',
                texto: 'Com vestido'
            },
            {
                img: './tendencias/t_puffer4.jpg',
                texto: 'Com calça jeans'
            }
        ]
    },
    {
        titulo: 'Casaco Teddy',
        ancora: 'casaco-teddy',
        descricao: [
            'Com a queda das temperaturas, o casaco teddy volta a dominar o feed do Instagram. Quentinho, confortável e estiloso, é fácil entender a razão do sucesso do item, que também teve alta significante nas pesquisas do Google.',
            'A modelagem do casaco teddy pode variar e isso torna a tendência ainda mais versátil. Nos anos anteriors, as modelagens alongadas dominaram o street style. Contudo, as mais moderninhas preferem versões curtinhas do casaco, que combinam bastante com looks mais esportivos.',
            'As modelagens curtas acabam sendo mais fáceis de usar. Em geral, o interessante é adaptar a peça ao seu estilo. Contudo, no Instagram vimos que o casaco teddy tem algumas companhias fiéis. Por ser despojado, ele combina muito bem com looks no estilo athleisure, isto é, com pegada esportiva e confortável.',
            'Também fica interessante para quebrar a monotonia de um look com peças de alfaiataria, trazendo um elemento inusitado à produção. Na hora de escolher as cores, os tons neutros ainda reinam e são mais versáteis. Pense em tonalidades mais clarinhas, como creme, caramelo, rosé e até branco.'
        ],
        imagem: './tendencias/casaco-teddy.jpg',
        looks: [
            {
                img: './tendencias/t_teddy1.jpg',
                texto: 'Com saia e cropped'
            },
            {
                img: './tendencias/t_teddy2.jpg',
                texto: 'Com calça jeans'
            },
            {
                img: './tendencias/t_teddy3.jpg',
                texto: 'Com vestido'
            },
            {
                img: './tendencias/t_teddy4.jpg',
                texto: 'Com legging e cacharrel preta'
            }
        ]
    },
    {
        titulo: 'Cropped de renda',
        ancora: 'cropped-renda',
        descricao: [
            'O cropped de renda é uma peça delicada e que voltou com força nesse verão e faz a cabeça de muitas amantes da moda, já que ele pode compor diversos estilos e te levar a vários tipos de ambientes super bem vestida.',
            'Além de prático e bonito, o seu modelo vai trazer um ar feminino e sensual. Uma regrinha de ouro para se usar essa peça, é lembrar de tomar cuidado com a transparência. Se optar por um que tenha forro garanta, que sejam da mesma cor (forro e pano da blusinha) caso não, escolha um top que combine.',
            'Esta é uma peça tão eclética que pode servir a vários gostos. Por exemplo, se você deseja destacar os seios, ou a barriga, poderá encontrar modelos que de cropped que te ajudarão nessa missão.',
            'Temos inúmeras opções para elaborar looks criativos e super elegantes com essas peças lindas que você encontra por aqui e essas cores bastante tradicionais e super em alta nessa época do ano!'
        ],
        imagem: './tendencias/cropped.jpg',
        looks: [
            {
                img: './tendencias/t_cropped1.jpg',
                texto: 'Com blazer e calça social'
            },
            {
                img: './tendencias/t_cropped2.jpg',
                texto: 'Com calça jeans'
            },
            {
                img: './tendencias/t_cropped3.jpg',
                texto: 'Com saia jeans'
            },
            {
                img: './tendencias/t_cropped4.jpg',
                texto: 'Look para balada'
            }
        ]
    }
]

export const mockMeuLateral = [
    {
        categoria: 'camisetas',
        value: 'camisetas'
    },
    {
        categoria: 'cropped',
        value: 'cropped'
    },
    {
        categoria: 'calças',
        value: 'calcas'
    },
    {
        categoria: 'casacos',
        value: 'casacos'
    },
    {
        categoria: 'body',
        value: 'body'
    },
    {
        categoria: 'peças exclusivas',
        value: 'pecas-exclusivas',
    },
]


export const Submit = (page) => {
    if (typeof window !== "undefined") {
        window.location.href = page
    }
}

export const TratarValor = (value) => {
    const valorTratado = value?.toLocaleString("pt-br", {
        minimumFractionDigits: 2,
    })
    return valorTratado
}