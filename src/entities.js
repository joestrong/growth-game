Crafty.c('Object', {
    init: function(){
        this.requires('2D, Canvas, Color')  
    }
});

Crafty.c('Player', {
    init: function(){
        this.requires('Object, Gravity, Collision')
            .attr({
                x: 10,
                y: 10,
                w: 10,
                h: 10
            })
            .color('yellow')
            .gravity('Solid');
    }
});

Crafty.c('Solid', {
    init: function(){
        this.requires('Object')
            .color('black');
    }
});