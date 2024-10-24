let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . c c c c c . . . . . . . 
    . . . c d d d d d c . . . . . . 
    . . . c d c c c c c . . . . . . 
    . . . c c d 4 4 4 4 c . . . . . 
    . . . c 1 4 4 4 4 4 d c . . . . 
    . . c 1 4 4 4 4 4 1 4 4 c . . . 
    c c c 1 4 4 4 4 1 4 4 4 4 c . . 
    c 4 4 1 4 4 c c 1 4 4 4 4 4 c . 
    f 4 f 1 4 f 4 4 1 4 4 4 4 4 c . 
    f 4 f d 4 f 4 c 1 4 f 4 4 4 4 f 
    f 4 f f 4 f f 4 1 4 4 4 4 4 4 f 
    f f c b c 4 4 4 4 1 4 4 4 4 f . 
    . . c d d c 4 4 4 4 d f f f . . 
    . . . c c c f f f f f . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
