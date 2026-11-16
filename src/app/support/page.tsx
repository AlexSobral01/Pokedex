import { SupportForm } from "@/components/SupportForm";
import Image from "next/image";

const supportPage = () => {
    return (
        <>
            <section className="my-10 ml-10 flex flex-col gap-2">
                <h1 className="text-2xl font-bold my-4">Apresenção</h1>
                <p>Este projeto está sendo desenvolvido inicialmente com fins educativos, mas minha intenção é transformá-lo em uma ferramenta cada vez melhor, que possa ajudar fãs e jogadores de Pokémon.</p>
                <p>O projeto é open source, então, caso queira contribuir com o desenvolvimento, fique à vontade para acessar nosso repositório no GitHub.</p>
                <p>Caso queira apoiar financeiramente o projeto, também deixarei uma chave Pix logo abaixo. Toda ajuda será muito bem-vinda!</p>
                <p>Encontrou algum bug ou tem alguma sugestão? Basta preencher o formulário abaixo e enviar sua mensagem. Estou sempre aberto a ideias que possam melhorar o projeto.</p>
                <p>Obrigado pela atenção e pelo carinho com a Pokédex! ❤︎</p>
                <div className="flex flex-col justify-center m-auto my-10">
                    <Image src={"/qrcode-pix.png"} alt="qrcode" width={200} height={200}/>
                </div>
            </section>
            <section>
                <SupportForm />
            </section>
        </>
    )
}

export default supportPage;