/* Para insipirarte para la implementacion del ZombieConductor podes usar
al ZombieCaminante de ejemplo. Tene en cuenta que tendra algunas diferencias.
Por ejemplo, la cantidad parametros que recibe su constructor. En ZombieConductor
no son exactamente los mismos parametros que en el objeto Enemigo, a diferencia
del ZombieCaminante que eran los mismos. */

var ZombieConductor = function(sprite, x, y, ancho, alto, velocidad, rangoMov, direccion) {
  /* Completar constructor a partir de Enemigo */
  Enemigo.call(this,sprite,x,y, ancho, alto, velocidad, rangoMov);
  /* No olvidar agregar la/s propiedad/es unicas de ZombieConductor necesarias */
  this.direccion = direccion;
}

/* Completar creacion del ZombieConductor */
ZombieConductor.prototype = new Enemigo();
/* Completar metodos para el movimiento y el ataque */
ZombieConductor.prototype.mover = function(){
  if(this.direccion ==  'h'){
    this.moverseEnX();
    if(this.x == Juego.anchoCanvas)this.x = 0;
  }else{
    this.moverseEnY();
    if(this.y == Juego.altoCanvas)this.y = 0;
  }
}

Enemigo.prototype.atacar = function (jugador) {
  jugador.perderVida(jugador.vidas);
}
