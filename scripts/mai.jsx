var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { property, tool, onready } from "../decorators";
let Mai = class Mai extends godot.KinematicBody2D {
	constructor() {
		super(...arguments);
		this.animation = "idle-front";
		this.velocity = godot.Vector2.ZERO;
	}
	_ready() {
	}
	_process(delta) {
		if (godot.Input.is_action_pressed("ui_left")) {
			this.velocity.x = -this.speed;
			this.velocity.y = 0;
			this.animation = "walk-left";
		}
		else if (godot.Input.is_action_pressed("ui_right")) {
			this.velocity.x = this.speed;
			this.velocity.y = 0;
			this.animation = "walk-right";
		}
		else if (godot.Input.is_action_pressed("ui_up")) {
			this.velocity.x = 0;
			this.velocity.y = -this.speed;
			this.animation = "walk-back";
		}
		else if (godot.Input.is_action_pressed("ui_down")) {
			this.velocity.x = 0;
			this.velocity.y = this.speed;
			this.animation = "walk-front";
		}
		else {
			this.velocity.x = 0;
			this.velocity.y = 0;
			if (this.animation == "walk-left") {
				this.animation = "idle-left";
			}
			else if (this.animation == "walk-right") {
				this.animation = "idle-right";
			}
			else if (this.animation == "walk-back") {
				this.animation = "idle-back";
			}
			else if (this.animation == "walk-front") {
				this.animation = "idle-front";
			}
		}
		this.animated_sprite.play(this.animation);
		var collision = this.move_and_collide(this.velocity);
	}
};
__decorate([
	property({ default: 50.0 })
], Mai.prototype, "speed", void 0);
__decorate([
	onready("AnimatedSprite")
], Mai.prototype, "animated_sprite", void 0);
Mai = __decorate([
	tool
], Mai);
export default Mai;
//# sourceMappingURL=mai.jsx.map
