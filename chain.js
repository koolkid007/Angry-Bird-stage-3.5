class Chain{
  constructor(bodyA, point) {
    var options ={
       bodyA: bodyA,
       pointB: point,
       stifness: 0.02,
       length: 15
    }  

    this.chain = Constraint.create(options);
    World.add(world,this.chain);
  }

  fly() {
    this.chain.bodyA=null;
  }

  display() {
    if(this.chain.bodyA) {
      var posA = this.chain.bodyA.position
      var posB = this.chain.pointB

      line(posA.x,posA.y,posB.x,posB.y);
    }
  

  }

}