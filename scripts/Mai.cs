using Godot;
using System;

public class Mai : KinematicBody2D
{
    private string animation = "idle-front";
    private float speed = 50f;
    private Vector2 velocity = Vector2.Zero;
    private AnimatedSprite animatedSprite;

    // Called when the node enters the scene tree for the first time.
    public override void _Ready()
    {
        animatedSprite = GetNode<AnimatedSprite>("AnimatedSprite");
    }

    public override void _PhysicsProcess(float delta)
    {
        if (Input.IsActionPressed("ui_left")) {
            this.velocity.x = -this.speed;
            this.velocity.y = 0;
            this.animation = "walk-left";
        }
        else if (Input.IsActionPressed("ui_right")) {
            this.velocity.x = this.speed;
            this.velocity.y = 0;
            this.animation = "walk-right";
        }
        else if (Input.IsActionPressed("ui_up")) {
            this.velocity.x = 0;
            this.velocity.y = -this.speed;
            this.animation = "walk-back";
        }
        else if (Input.IsActionPressed("ui_down")) {
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
        this.animatedSprite.Play(this.animation);
        KinematicCollision2D collision = MoveAndCollide(this.velocity);
    }
}
