function h(type: string, props: any, ...children: any) {
    return { type, props: { children, ...props } }
}

type TbElement =
    | {
          type: string
          props: {
              [k in string]: string
          } & {
              children: Array<Element>
          }
      }
    | string

// render({type: 'ul', props: {children: [{type: 'li', props: {children: ["Item 1"]}, {type: 'li', props: {children: ["Item 2"]}], style: "color: blue;"})
// <ul style="color:blue;"><li>Item 1</li><li>Item 2</li></ul>
function render(element: TbElement, parentEl = document.getElementById('app')!) {
    if (typeof element === 'string') {
        parentEl.innerText = element
    } else {
        const el = document.createElement(element.type)

        // Copy props from virtual element to DOM element
        for (const name in element.props) {
            const value = element.props[name]
            if (name !== 'children') {
                el.setAttribute(name, value)
            }
        }

        // Render children
        const children = element.props.children
        if (children) {
            children.forEach((childElement: any) => {
                render(childElement, el)
            })
        }

        // Insert element in DOM
        parentEl?.appendChild(el)
    }
}

const app = (
    <div class="chess">
        <div class="left_panel">
            <div class="improvements">
                <h1>Work in progress: Au fait, il est {new Date(Date.now()).toLocaleString()}</h1>
                <p>UI</p>

                <h1>TODO:</h1>
                <ul>
                    <li>Pawn Promotion: Variants</li>
                    <li>Game End: Treefold Repetition</li>
                    <li>Game End: 50 Moves Rule</li>
                    <li>Game End: Insufficient Material</li>
                </ul>
                <p>Arrows?</p>
            </div>

            <div class="playmode">
                <button id="player_vs_player">
                    <div class="playmode_arrow" id="player_vs_player_arrow"></div>
                    <span>Player vs Player</span>
                    <div class="playmode_arrow"></div>
                </button>
                <button id="player_vs_bot">
                    <div class="playmode_arrow" id="player_vs_bot_arrow"></div>
                    <span>Player vs Bot</span>
                    <div class="playmode_arrow"></div>
                </button>
                <button id="bot_vs_bot">
                    <div class="playmode_arrow" id="bot_vs_bot_arrow"></div>
                    <span>Bot vs Bot</span>
                    <div class="playmode_arrow"></div>
                </button>
            </div>
        </div>

        <div class="header">
            <div id="next_player" class="next_player">
                <div id="white_to_move" class="white_to_move">
                    <div class="square"></div>
                    White to move
                </div>
                <div id="black_to_move" class="black_to_move" style="display: none">
                    <div class="square"></div>
                    Black to move
                </div>
                <div id="end_of_game" style="display: none"></div>
            </div>
            <div id="evaluation" class="evaluation"></div>
        </div>

        <canvas id="board" class="board" />

        <div class="panel">
            <div id="moves" class="moves"></div>
            <div class="actions">
                <button id="undo" disabled>
                    &lt;
                </button>
                <button id="redo" disabled>
                    &gt;
                </button>
                <button id="reset">&#x2B6F;</button>
            </div>
        </div>
    </div>
)

render(app)
