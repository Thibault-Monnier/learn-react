var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
define("index", ["require", "exports", "react", "react-dom/client"], function (require, exports, React, client_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    React = __importStar(React);
    function h(type, props, ...children) {
        return { type, props: { children, ...props } };
    }
    // render({type: 'ul', props: {children: [{type: 'li', props: {children: ["Item 1"]}, {type: 'li', props: {children: ["Item 2"]}], style: "color: blue;"})
    // <ul style="color:blue;"><li>Item 1</li><li>Item 2</li></ul>
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
    const app = (React.createElement("div", { class: "chess" },
        React.createElement("div", { class: "left_panel" },
            React.createElement("div", { class: "improvements" },
                React.createElement("h1", null,
                    "Work in progress: Au fait, il est ",
                    new Date(Date.now()).toLocaleString()),
                React.createElement("p", null, "UI"),
                React.createElement("h1", null, "TODO:"),
                React.createElement("ul", null,
                    React.createElement("li", null, "Pawn Promotion: Variants"),
                    React.createElement("li", null, "Game End: Treefold Repetition"),
                    React.createElement("li", null, "Game End: 50 Moves Rule"),
                    React.createElement("li", null, "Game End: Insufficient Material")),
                React.createElement("p", null, "Arrows?")),
            React.createElement("div", { class: "playmode" },
                React.createElement("button", { id: "player_vs_player" },
                    React.createElement("div", { class: "playmode_arrow", id: "player_vs_player_arrow" }),
                    React.createElement("span", null, "Player vs Player"),
                    React.createElement("div", { class: "playmode_arrow" })),
                React.createElement("button", { id: "player_vs_bot" },
                    React.createElement("div", { class: "playmode_arrow", id: "player_vs_bot_arrow" }),
                    React.createElement("span", null, "Player vs Bot"),
                    React.createElement("div", { class: "playmode_arrow" })),
                React.createElement("button", { id: "bot_vs_bot" },
                    React.createElement("div", { class: "playmode_arrow", id: "bot_vs_bot_arrow" }),
                    React.createElement("span", null, "Bot vs Bot"),
                    React.createElement("div", { class: "playmode_arrow" })))),
        React.createElement("div", { class: "header" },
            React.createElement("div", { id: "next_player", class: "next_player" },
                React.createElement("div", { id: "white_to_move", class: "white_to_move" },
                    React.createElement("div", { class: "square" }),
                    "White to move"),
                React.createElement("div", { id: "black_to_move", class: "black_to_move", style: "display: none" },
                    React.createElement("div", { class: "square" }),
                    "Black to move"),
                React.createElement("div", { id: "end_of_game", style: "display: none" })),
            React.createElement("div", { id: "evaluation", class: "evaluation" })),
        React.createElement("canvas", { id: "board", class: "board" }),
        React.createElement("div", { class: "panel" },
            React.createElement("div", { id: "moves", class: "moves" }),
            React.createElement("div", { class: "actions" },
                React.createElement("button", { id: "undo", disabled: true }, "<"),
                React.createElement("button", { id: "redo", disabled: true }, ">"),
                React.createElement("button", { id: "reset" }, "\u2B6F")))));
    //render(app)
    const root = (0, client_1.createRoot)(document.getElementById('app'));
    console.log("app", JSON.stringify(app));
    root.render(React.createElement("h1", null, "Hello, world"));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBR0EsU0FBUyxDQUFDLENBQUMsSUFBWSxFQUFFLEtBQVUsRUFBRSxHQUFHLFFBQWE7UUFDakQsT0FBTyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRSxRQUFRLEVBQUUsR0FBRyxLQUFLLEVBQUUsRUFBRSxDQUFBO0lBQ2xELENBQUM7SUFhRCwwSkFBMEo7SUFDMUosOERBQThEO0lBQzlELFNBQVMsTUFBTSxDQUFDLE9BQWtCLEVBQUUsV0FBVyxRQUFRLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBRTtRQUMxRSxJQUFJLE9BQU8sT0FBTyxLQUFLLFFBQVEsRUFBRSxDQUFDO1lBQzlCLFFBQVEsQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFBO1FBQ2hDLENBQUM7YUFBTSxDQUFDO1lBQ0osTUFBTSxFQUFFLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUE7WUFFL0MsaURBQWlEO1lBQ2pELEtBQUssTUFBTSxJQUFJLElBQUksT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUMvQixNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO2dCQUNqQyxJQUFJLElBQUksS0FBSyxVQUFVLEVBQUUsQ0FBQztvQkFDdEIsRUFBRSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUE7Z0JBQ2hDLENBQUM7WUFDTCxDQUFDO1lBRUQsa0JBQWtCO1lBQ2xCLE1BQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFBO1lBQ3ZDLElBQUksUUFBUSxFQUFFLENBQUM7Z0JBQ1gsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFlBQWlCLEVBQUUsRUFBRTtvQkFDbkMsTUFBTSxD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