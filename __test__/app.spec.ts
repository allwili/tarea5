import { describe, test, expect } from "@jest/globals";
import app from "../src/server.js";
import request from "supertest";
import { configuration } from "../src/config.js";
import { esPalindromo } from "../src/palindromo.js"; 
import { esPrimo } from "../src/numeros.js";

describe("Test Suite App", () => {

    // test endpoint main 
    test("endpoint /", async () => {
        return await request(app)
            .get("/")
            .expect("Content-Type", /text/)
            .expect(200)
            .then((response) => {
                expect(response.text).toBe('Hola, esta api fue configurada por el usuario wilso');
            })
    });



    // test key 
    test("endpoint key", async () => {
        return await request(app)
            .get("/key")
            .expect("Content-Type", /text/)
            .expect(200)
            .then((response) => {
                expect(response.text).toBe("Hola, esta api contiene la siguiente api-key: Desconocida");
            })
    });

    // test palindromo

    test("test Funcion Palindromo",() => {
        let a = 'loca acol';
        expect(esPalindromo(a)).toBe(true);

        a = 'no';
        expect(esPalindromo(a)).toBe(false);

    });
    // test funcion en endpoint 
    test("endpoint /palindromo/palindromo", async () => {
        return await request(app)
            .get("/palindromo/Dabale arroz a la zorra el abad")
            .expect("Content-Type", /text/)
            .expect(200)
            .then((response) => {
                expect(response.text).toBe("Hola, La frase ingresada es palindromo");
            })
    });

    test("endpoint /sonar-scanner/nopalindormo", async () => {
        return await request(app)
            .get("/palindromo/adda cadabra")
            .expect("Content-Type", /text/)
            .expect(200)
            .then((response) => {
                expect(response.text).toBe("Hola, La frase ingresada no es palindromo");
            })
    });

    //test primo

    test("test Funcion Palindromo",()=>{
        let a = 7;
        expect(esPrimo(a)).toBe(true);

        a = 8;
        expect(esPrimo(a)).toBe(false);

        a = 1;
        expect(esPrimo(a)).toBe(false);

        a =  0;
        expect(esPrimo(a)).toBe(false);

        a = -1;
        expect(esPrimo(a)).toBe(false);

        a = 1.2;
        expect(esPrimo(a)).toBe(false);

    });

    //test endpoint primo
    test("endpoint /primo", async () => {
        return await request(app)
            .get("/primo/5")
            .expect("Content-Type", /text/)
            .expect(200)
            .then((response) => {
                expect(response.text).toBe("Hola, el numero ingresado es un numero primo");
            })
    });

    test("endpoint /primo/norimo", async () => {
        return await request(app)
            .get("/primo/4")
            .expect("Content-Type", /text/)
            .expect(200)
            .then((response) => {
                expect(response.text).toBe("Hola, el numero ingresado no es un numero primo");
            })
    });
});