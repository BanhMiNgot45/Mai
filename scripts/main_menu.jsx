var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { tool } from "../decorators";
let MainMenu = class MainMenu extends godot.Control {
	_on_button_pressed() {
		this.get_tree().change_scene("res://scenes/opening.tscn");
	}
};
MainMenu = __decorate([
	tool
], MainMenu);
export default MainMenu;
//# sourceMappingURL=main_menu.jsx.map

