"use strict";
function h(type, props, ...children) {
    return { type, props: { children, ...props } };
}
// render({type: 'ul', props: {children: [{type: 'li', props: {children: ["Item 1"]}, {type: 'li', props: {children: ["Item 2"]}], style: "color: blue;"})
function render(element, parentEl = document.getElementById('app')) {
    if (typeof element === 'string') {
        parentEl.innerText = element;
    }
    else {
        const el = document.createElement(element.type);
        // Copy props from virtual element to DOM element
        for (const name in element.props) {
            const value = element.props[name];
            if (name !== 'children') {
                el.setAttribute(name, value);
            }
        }
        // Render children
        const children = element.props.children;
        if (children) {
            children.forEach((childElement) => {
                render(childElement, el);
            });
        }
        // Insert element in DOM
        parentEl?.appendChild(el);
    }
}
const app = (h("div", { class: "chess" },
    h("div", { class: "left_panel" },
        h("div", { class: "improvements" },
            h("h1", null,
                "Work in progress: Au fait, il est ",
                new Date(Date.now()).toLocaleString()),
            h("p", null, "UI"),
            h("h1", null, "TODO:"),
            h("ul", null,
                h("li", null, "Pawn Promotion: Variants"),
                h("li", null, "Game End: Treefold Repetition"),
                h("li", null, "Game End: 50 Moves Rule"),
                h("li", null, "Game End: Insufficient Material")),
            h("p", null, "Arrows?")),
        h("div", { class: "playmode" },
            h("button", { id: "player_vs_player" },
                h("div", { class: "playmode_arrow", id: "player_vs_player_arrow" }),
                h("span", null, "Player vs Player"),
                h("div", { class: "playmode_arrow" })),
            h("button", { id: "player_vs_bot" },
                h("div", { class: "playmode_arrow", id: "player_vs_bot_arrow" }),
                h("span", null, "Player vs Bot"),
                h("div", { class: "playmode_arrow" })),
            h("button", { id: "bot_vs_bot" },
                h("div", { class: "playmode_arrow", id: "bot_vs_bot_arrow" }),
                h("span", null, "Bot vs Bot"),
                h("div", { class: "playmode_arrow" })))),
    h("div", { class: "header" },
        h("div", { id: "next_player", class: "next_player" },
            h("div", { id: "white_to_move", class: "white_to_move" },
                h("div", { class: "square" }),
                "White to move"),
            h("div", { id: "black_to_move", class: "black_to_move", style: "display: none" },
                h("div", { class: "square" }),
                "Black to move"),
            h("div", { id: "end_of_game", style: "display: none" })),
        h("div", { id: "evaluation", class: "evaluation" })),
    h("canvas", { id: "board", class: "board" }),
    h("div", { class: "panel" },
        h("div", { id: "moves", class: "moves" }),
        h("div", { class: "actions" },
            h("button", { id: "undo", disabled: true }, "<"),
            h("button", { id: "redo", disabled: true }, ">"),
            h("button", { id: "reset" }, "\u2B6F")))));
render(app);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50c3giLCIuLi9zcmMvdHlwZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLFNBQVMsQ0FBQyxDQUFDLElBQVksRUFBRSxLQUFVLEVBQUUsR0FBRyxRQUFhO0lBQ2pELE9BQU8sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUUsUUFBUSxFQUFFLEdBQUcsS0FBSyxFQUFFLEVBQUUsQ0FBQTtBQUNsRCxDQUFDO0FBYUQsMEpBQTBKO0FBQzFKLFNBQVMsTUFBTSxDQUFDLE9BQWtCLEVBQUUsV0FBVyxRQUFRLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBRTtJQUMxRSxJQUFJLE9BQU8sT0FBTyxLQUFLLFFBQVEsRUFBRSxDQUFDO1FBQzlCLFFBQVEsQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFBO0lBQ2hDLENBQUM7U0FBTSxDQUFDO1FBQ0osTUFBTSxFQUFFLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUE7UUFFL0MsaURBQWlEO1FBQ2pELEtBQUssTUFBTSxJQUFJLElBQUksT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQy9CLE1BQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDakMsSUFBSSxJQUFJLEtBQUssVUFBVSxFQUFFLENBQUM7Z0JBQ3RCLEVBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFBO1lBQ2hDLENBQUM7UUFDTCxDQUFDO1FBRUQsa0JBQWtCO1FBQ2xCLE1BQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFBO1FBQ3ZDLElBQUksUUFBUSxFQUFFLENBQUM7WUFDWCxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsWUFBaUIsRUFBRSxFQUFFO2dCQUNuQyxNQUFNLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQyxD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