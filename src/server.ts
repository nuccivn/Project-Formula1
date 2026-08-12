import fastify from "fastify";
import cors from "@fastify/cors";

const server = fastify({ logger: true });

server.register(cors, {
    origin: "*",
});

const teams = [
    { id: 1, name: "McLaren", base: "Woking, United Kingdom" },
    { id: 2, name: "Mercedes", base: "Brackley, United Kingdom" },
    { id: 3, name: "Red Bull Racing", base: "Milton Keynes, United Kingdom" },
    { id: 4, name: "Ferrari", base: "Maranello, Italy" },
    { id: 5, name: "Aston Martin", base: "Silverstone, United Kingdom" },
    { id: 6, name: "Alpine", base: "Enstone, United Kingdom" },
    { id: 7, name: "Williams", base: "Grove, United Kingdom" },
    { id: 8, name: "RB", base: "Faenza, Italy" },
    { id: 9, name: "Haas", base: "Kannapolis, United States" },
    { id: 10, name: "Sauber", base: "Hinwil, Switzerland" },
];


const drivers = [
    { id: 1, name: "Max Verstappen", team: "Red Bull Racing" },
    { id: 2, name: "Lewis Hamilton", team: "Ferrari" },
    { id: 3, name: "Lando Norris", team: "McLaren" },
    { id: 4, name: "Oscar Piastri", team: "McLaren" },
    { id: 5, name: "George Russell", team: "Mercedes" },
    { id: 6, name: "Kimi Antonelli", team: "Mercedes" },
    { id: 7, name: "Charles Leclerc", team: "Ferrari" },
    { id: 8, name: "Fernando Alonso", team: "Aston Martin" },
    { id: 9, name: "Lance Stroll", team: "Aston Martin" },
    { id: 10, name: "Pierre Gasly", team: "Alpine" },
    { id: 11, name: "Franco Colapinto", team: "Alpine" },
    { id: 12, name: "Alexander Albon", team: "Williams" },
    { id: 13, name: "Carlos Sainz", team: "Williams" },
    { id: 14, name: "Liam Lawson", team: "RB" },
    { id: 15, name: "Isack Hadjar", team: "RB" },
    { id: 16, name: "Esteban Ocon", team: "Haas" },
    { id: 17, name: "Oliver Bearman", team: "Haas" },
    { id: 18, name: "Nico Hulkenberg", team: "Sauber" },
    { id: 19, name: "Gabriel Bortoleto", team: "Sauber" },
];

server.get("/teams", async (request, response) => {
    response.type("application/json").code(200);
    return { teams };
});

server.get("/drivers", async (request, response) => {
    response.type("application/json").code(200);
    return { drivers };
});

interface DriverParams {
    id: string
};

server.get<{Params: DriverParams}>("/drivers/:id", async(request, response) => {
    const id = parseInt(request.params.id);
    const driver = drivers.find( d => d.id === id);

    if(!driver){
        response.type("application/json").code(404);
        return {message: "Driver not Found"}
    } else{
        response.type("application/json").code(200);
        return { driver };
    }
});

server.listen({ port: 3333 }, () => {
    console.log("Server init");
});


