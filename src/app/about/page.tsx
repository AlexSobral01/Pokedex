const about = () => {
    return (
        <section className="w-full pl-10 my-10 flex flex-col gap-3">
            <h1 className="text-3xl font-bold">About Pokédex</h1>
            <h2 className="text-xl font-bold">About the Project</h2>
            <p>This project was developed for learning purposes using the <a className="text-amber-100 hover:text-amber-200 transition duration-300 ease-in-out" href="https://pokeapi.co/">PokeApi</a>, a RESTful API that provides information about Pokémon from different generations.</p>
            <p>The main goal is to create an interactive Pokédex where users can explore Pokémon, discover their characteristics, and access useful information about each one.</p>
            <h2 className="text-xl font-bold">Features</h2>
            <ul>
                <li><span className="font-semibold">Pokémon Listing: </span>Browse through a collection of Pokémon.</li>
                <li><span className="font-semibold">Pagination: Navigate: </span>between pages to explore more Pokémon.</li>
                <li><span className="font-semibold">Pokémon Details: </span>View information such as name, image, type, abilities, and other characteristics.</li>
                <li><span className="font-semibold">Search: </span>Find Pokémon by their name or ID.</li>
            </ul>
            <h2 className="text-xl font-bold">Tecnologies Used</h2>
            <ul>
                <li>HTML 5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>Next</li>
                <li>PokeApi</li>
            </ul>
            <h2 className="text-xl font-bold">Api Credits</h2>
            <p>All Pokémon data is provided by <a className="text-amber-100 hover:text-amber-200 transition duration-300 ease-in-out" href="https://pokeapi.co/">PokeApi</a>, a free and open-source RESTful API.</p>
            <h2 className="text-xl font-bold">Purpose</h2>
            <p>This project is part of my programming learning journey, helping me practice JavaScript, API integration, asynchronous requests, DOM manipulation, and pagination.</p>
        </section>
    )
} 

export default about;