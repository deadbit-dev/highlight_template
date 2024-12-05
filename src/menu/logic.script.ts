/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-this-alias */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */

import { render_pred } from "../utils/utils";

go.property('highlight_sprite', msg.url());
go.property('highlight_material', resource.material()); // "/assets/materials/highlight_sprite.material"
// go.property('render_target', resource.render_target()); // "/assets/display.render_target"

interface props {
    highlight_sprite: url
    highlight_material: hash
    render_target: hash
}

export function init(this: props) {
    Manager.init_script();
    msg.post('.', 'acquire_input_focus');
    EventBus.on('HIGHLIGHT', () => on_highlight(this));
}

export function on_input(this: props, action_id: string | hash, action: any): void {
    // const pos = { x: action.x as number, y: action.y as number};
    // if (action_id == hash('touch') && is_highlighted(this, pos.x, pos.y)) {
    //     print("HIGHLIGHTED");
    // }
}

export function on_message(this: props, message_id: hash, _message: any, sender: hash): void {
    Manager.on_message(this, message_id, _message, sender);
}

export function final(this: props): void {
    Manager.final_script();
}

function on_highlight(data: props) {
    go.set(data.highlight_sprite, 'material', data.highlight_material);
}

// function is_highlighted(_this: props, x: number, y: number) {
//     const value = get_pixel_value(_this, x, y);
//     print("PIXEL VLUE: ", value);
//     return false;
// }

// function get_pixel_value(_this: props, x: number, y: number) {
//     render_pred('highlight_tile');
//     const render_target_info = resource.get_render_target_info(_this.render_target);
//     const texture = render_target_info.attachments[1].texture;
//     const texture_info = resource.get_texture_info(texture);
//     print(texture);
//     return 0;
// }