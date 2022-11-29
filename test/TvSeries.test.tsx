import React from "react";
import ReactDOM from "react-dom/client";
import { describe, it, expect, beforeEach } from "@jest/globals";
import { act } from "react-dom/test-utils"

import {ShowList} from "../src/features/";

describe("TvShowsList", () => {
    let container;

    beforeEach(() => {
        container = document.createElement("div");
        document.body.replaceChildren(container);
    });

    const render = (component) => {
        act(() =>
            ReactDOM.createRoot(container).render(component)
        );
    };

    it("renders title", () => {
        render(<ShowList />);
        expect(document.body.textContent).toContain("Tv Shows");
    });

    // it("renders a list of tv series", () => {
    //     render(<TvSeriesList />);
    //     const list = screen.getByRole("list");
    //     expect(list).toBeTruthy();
    // }); 

    // it("renders an ol element to display tv series", () => {
    //     render(<Shows />);
    //     const listElement = document.querySelector("ol");
    //     expect(listElement).not.toBeNull();
    // });
});

// describe("TvServiesView", () => {
//     let container;

//     const twoSeries = [
//         "Game of Thrones",
//         "Breaking Bad"
//     ]

//     beforeEach(() => {
//         container = document.createElement("div");
//         document.body.replaceChildren(container);
//     });

//     const render = (component) => {
//         act(() =>
//             ReactDOM.createRoot(container).render(component)
//         );
//     };

//     it("renders a div with the correct id", () => {
//         render(<Shows />);
//         const div = document.querySelector("div#tv-series-view");
//         expect(div).not.toBeNull();
//     });

//     it("renders an ol element to display tv series", () => {
//         render(<Shows />);
//         const listElement = document.querySelector("ol");
//         expect(listElement).not.toBeNull();
//     });

//     it("renders an li for each tv series", () => {
    
       
//         render(<Show show={Show}/>);

//         const listChildren = document.querySelectorAll("ol > li");

//         expect(listChildren.length).toBe(2);
//     });

//     it("has button element in each li", () => {
//         render(<TvSeriesView tvSeries={twoSeries} />);
//         const buttons = document.querySelectorAll("li > button");
//         expect(buttons.length).toBe(2);
//     });

//     it("renders another tvseries when selected", () => {
//         render(<TvSeriesView tvSeries={twoSeries} />);
//         const button = document.querySelectorAll("button")[1];

//         act(() => button.click());
        
//         expect(document.body.textContent).toContain("Breaking Bad");
//     });

// });