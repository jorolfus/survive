let P = sprites.create(img`
    . . . . . . . . . . . . . b e e b b b b . . . . . . . . . . . . 
    . . . . . . . . . . . . e e b b b b 4 b b . . . . . . . . . . . 
    . . . . . . . . . . . . e b 3 4 4 b b 4 b b . . . . . . . . . . 
    . . . . . . . . . . . . e 4 4 3 3 4 b b 4 b b . . . . . . . . . 
    . . . . . . . . . . . . e b 4 3 3 3 4 4 b 4 b e . . . . . . . . 
    . . . . . . . . . . . 3 4 e b 4 3 3 4 4 4 4 4 b e . . . . . . . 
    . . . . . . . . . . . b d 4 e b 4 3 3 3 3 3 4 4 b b . . . . . . 
    . . . . . . . . . . b 4 5 5 d 4 4 4 3 3 3 3 4 4 4 b b . . . . . 
    . . . . . . . . . . 4 d 5 5 5 5 d 4 4 4 3 3 3 4 4 4 b b . . . . 
    . . . . . . . . . 4 5 5 5 5 5 5 d d 4 b 4 4 4 3 4 4 4 b e . . . 
    . . . . . . . . b d 5 5 5 5 d 5 5 5 d 4 b b 4 4 4 4 4 4 e e . . 
    . . . . . . . . b 5 5 d d d 6 6 5 5 5 5 b b 4 b 4 4 4 4 4 e e . 
    . . . . . . . b d 5 5 5 5 6 7 7 6 5 5 5 5 4 e b b 4 4 4 4 4 e b 
    . . . . . . . 4 3 2 2 2 5 5 8 8 5 5 5 5 5 d 4 e e b 4 4 b 4 e e 
    . . . . . . b 4 2 2 3 3 2 d d d 1 5 5 2 2 2 d 4 e e b b b 4 b e 
    . . . . . . b e 2 2 2 3 2 e d 5 5 5 2 2 3 3 2 d b 4 e b b b b e 
    . . . . . b d e 2 2 2 2 2 e 5 5 5 e 2 2 2 3 2 e d d 4 b b b b e 
    . . . . . b 5 2 e 2 2 2 e 3 5 5 5 e 2 2 2 2 2 e d d d 4 e b e e 
    . . . . b d 5 5 2 e e e 3 5 5 5 5 2 e 2 2 2 e 3 5 5 5 4 4 e e e 
    . . . . 6 6 5 d d 5 5 5 5 5 5 5 5 5 2 e e e 3 5 5 d d 4 d e e e 
    . . . 6 7 7 6 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 1 5 5 4 d 4 e e 
    . . . 4 8 8 5 2 2 2 5 5 5 d d d d 6 6 5 5 5 5 1 5 4 4 d 4 e e e 
    . . b 4 5 5 2 2 3 3 2 5 5 5 d d 6 7 7 6 1 1 d 4 4 4 d d e e e . 
    . . 4 d 5 2 2 2 2 3 2 e 5 5 5 5 5 8 8 1 d 4 4 d d d 4 e e e . . 
    . b d d 5 e 2 2 2 2 2 e 5 5 5 1 1 5 1 1 4 d 5 4 d 4 e e . . . . 
    . b 5 5 d 2 e 2 2 2 e 3 5 1 1 4 4 d 1 d 5 5 e e e e . . . . . . 
    b d 5 d d d 2 e e e 3 d 4 4 4 5 5 5 d d 4 e . . . . . . . . . . 
    b 5 5 5 1 1 5 d d d d 5 5 d 5 4 4 e e d e . . . . . . . . . . . 
    4 5 1 1 d 4 4 4 d 5 5 4 4 e e . . . 4 d e . . . . . . . . . . . 
    4 1 d 4 5 5 5 d 4 e e . . . . . . . . 4 4 . . . . . . . . . . . 
    4 1 5 5 4 e e d e . . . . . . . . . . . . . . . . . . . . . . . 
    4 4 e e . . . 4 e . . . . . . . . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
let dx = 1, dy = 1 
let x = 0
let y = 0 
forever(function () {
    info.changeScoreBy(1)
    x = x + dx
    y = y + dy 
    if (x >= 159) dx = -Math.random()*2
    if (y >= 119) dy = -Math.random()*2           
    if (x <= 0) dx = Math.random()*2
    if (y <= 0) dy = Math.random() *2
 P.setPosition(x, y )
let projectile = sprites.createProjectileFromSprite(img`
    . . 2 . .
    . 2 2 2 .
    2 2 . 2 2
    . 2 2 2 .
    . . 2 . .
`, P,dx*-100,dy*-100)
})
let A = sprites.create(img`
    . . . 9 9 9 9 9 9 9 9 9 . . . .
    . . . 9 . 1 . . 1 . 9 9 . . . .
    . 9 9 9 9 9 9 9 9 9 9 9 9 9 . .
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 .
    9 9 9 9 9 9 9 9 9 9 9 . 9 9 9 9
    9 9 . 9 9 9 9 9 9 9 9 . . 9 9 9
    9 . . 9 9 9 9 9 9 9 9 . . . 9 9
    . . 2 2 2 . . 2 2 2 . . . . . .
    . . 2 2 2 . . 2 2 2 . . . . . .
    . . 2 2 2 . . 2 2 2 . . . . . .
    . . 2 2 2 . . 2 2 2 . . . . . .
    . . 2 2 2 . . 2 2 2 . . . . . .
    . . 2 2 2 . . 2 2 2 . . . . . .
    . . 2 2 2 . . 2 2 2 . . . . . .
    . . 2 2 2 . . 2 2 2 . . . . . .
    . . 2 2 2 . . 2 2 2 . . . . . .
`,SpriteKind.Player)
controller.moveSprite(A)
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function(sprite: Sprite, otherSprite: Sprite) {
    sprites.allOfKind(SpriteKind.Projectile).forEach(function(value: Sprite, index: number) {
     value.destroy()   
    })
    info.changeLifeBy(-1)
})
