import { SupportForm } from "@/components/SupportForm";
import Image from "next/image";

const supportPage = () => {
    return (
        <>
            <section className="my-10 mx-6 flex flex-col gap-2">
                <h1 className="text-2xl font-bold my-4">About</h1>
                <p>
                    This project is initially being developed for educational
                    purposes, but my goal is to turn it into an increasingly
                    better tool that can help Pokémon fans and players.
                </p>
                <p>
                    This is an open-source project, so if you would like to
                    contribute to its development, feel free to visit our{" "}
                    <a
                        className="text-amber-300 hover:text-amber-400 transition duration-300 ease-in-out"
                        href="https://github.com/AlexSobral01/Pokedex"
                    >
                        GitHub repository.
                    </a>
                </p>
                <p>
                    If you would like to financially support the project, I
                    will also leave a Pix key below. Any contribution is
                    greatly appreciated!
                </p>
                <p>
                    Found a bug or have a suggestion? Just fill out the form
                    below and send me a message. I am always open to ideas
                    that can help improve the project.
                </p>
                <p>
                    Thank you for your attention and support for the Pokédex!
                    ❤︎
                </p>
                <div className="flex flex-col justify-center m-auto my-10">
                    <Image
                        src={"/qrcode-pix.png"}
                        alt="Pix QR Code"
                        width={200}
                        height={200}
                    />
                </div>
            </section>

            <section>
                <SupportForm />
            </section>
        </>
    );
};

export default supportPage;