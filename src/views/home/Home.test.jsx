import { render, screen } from "@testing-library/react";
import Home from "./Home";

describe("Home", ()=>{
    describe("when rendering default", ()=>{
        it("should show both CardContainer", async ()=>{
            render(<Home/>)
            screen.debug();
            const CardContainerMovie = await screen.findByText("Peliculas que son tendencia");
            const CardContainerTv = await screen.findByText("Series que son tendencia");
            screen.debug();
            await expect(CardContainerMovie).toBeInTheDocument();
            await expect(CardContainerTv).toBeInTheDocument();
        })
    })
})