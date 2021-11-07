import { signal, property, tool, onready, node } from "../decorators";

@tool
export default class MainMenu extends godot.Control {
    
    _on_button_pressed() {
        this.get_tree().change_scene("res://scenes/opening.tscn");
    }
}