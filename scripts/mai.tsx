import { signal, property, tool, onready, node } from "../decorators";

@tool
export default class Mai extends godot.KinematicBody2D {

    animation: string = "idle-front";

    @property({ default: 50.0 })
    speed: number;

    velocity: godot.Vector2 = godot.Vector2.ZERO;
    
    @onready("AnimatedSprite")
    animated_sprite: godot.AnimatedSprite;

    _ready() {

    }

    _process(delta: number) {
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
        var collision: godot.KinematicCollision2D = this.move_and_collide(this.velocity);
    }
}