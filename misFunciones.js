/**<font></font>
 * Calculo de raices del polinomio<font></font>
 * @method factoreo<font></font>
 * @param Parámetro a<font></font>
 * @param Parámetro b<font></font>
 * @param Parámetro c<font></font>
 * @return x1,x2,x12<font></font>
 */

var auxZ;
var id;
function factoreo() {


    var a = Number(document.getElementById("a").value);
    var b = Number(document.getElementById("b").value);
    var c = Number(document.getElementById("c").value);

    var d= (b*b)-(4*a*c);

    if (d==0)
    {   var x1= -b/2*a;
        var x2= -b/2*a;}

    else

    if(d>0)
    {   x1= -b+Math.sqrt(d)/2*a;
        x2= -b-Math.sqrt(d)/2*a;}

    else
    {   var x= -b/2*a;
        var compleja= Math.sqrt((-1)*d)/2*a;
        x1=x+compleja+"i";
        x2=x-compleja+"i";}

    var raiz= "(x-("+x1+"))"+"(x-("+x2+"))" ;
    document.getElementById("x12").value = raiz ;
    document.getElementById("x1").value = x1 ;
    document.getElementById("x2").value = x2 ;


}

/**<font></font>
 * Dibuja el cuadriculado y el eje de coordenadas<font></font>
 * @method dibujarCuad<font></font>
 */

function dibujarCuad(){

    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");


    ctx.clearRect(0,0,canvas.width,canvas.height);


    ctx.beginPath();

    for(var i=20; i< canvas.width; i=i+20)
    {
        ctx.moveTo(i,0);
        ctx.lineTo(i,canvas.height);
        ctx.strokeStyle="#999999";
        ctx.stroke();
    }

    for( i=20; i<canvas.height; i=i+20)
    {
        ctx.moveTo(0,i);
        ctx.lineTo(canvas.width,i);
        ctx.strokeStyle="#999999";
        ctx.stroke();
    }


    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.strokeStyle="#000000";

    ctx.moveTo(0, canvas.height / 2);
    ctx.lineTo(canvas.width, canvas.height / 2);

    ctx.moveTo(canvas.width / 2, 0);
    ctx.lineTo(canvas.width / 2, canvas.height);

    ctx.stroke();
    ctx.closePath();

}
var can,auxA,auxB,auxC;

/**<font></font>
 * Calculo de vertices y animacion <font></font>
 * @method cuadratica<font></font>
 * @param Parámetro a<font></font>
 * @param Parámetro b<font></font>
 * @param Parámetro c<font></font>
 */
function cuadratica(a,b,c) {

    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");


    var vx= -b/2*a;
    var vy=Number(a*vx*vx)+Number(b*vx)+Number(c);

    document.getElementById("vx").value = vx;
    document.getElementById("vy").value = vy;

    auxZ=-canvas.width/2;
    auxA=a;
    auxB=b;
    auxC=c;
    can=canvas.width;
    id=setInterval(cuadraticaAnimada,1/100);
}

/**<font></font>
 * Dibuja y anima funcion cuadratica<font></font>
 * @method cuadraticaAnimada<font></font>
 */

function cuadraticaAnimada()
{
    if(can<=auxZ)
    {
        clearInterval(id);
    }
    else
    {
        var y=auxA*Math.pow(auxZ, 2)+auxB*auxZ+auxC;
        y*=-1;
        drawfx(auxZ,y);
        auxZ+=0.2;
        console.log("Ciclo"+auxZ);
    }

}

/**<font></font>
 * La funcion te grafica el punto ubicado en la coordenada x e y que fue pasado como parametro<font></font>
 * @method drawfx<font></font>
 * @param Parámetro x<font></font>
 * @param Parámetro y<font></font>
 */
function drawfx(x,y){

    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.strokeStyle = "#e9000b";
    ctx.fillStyle= "#e9000b";

    x=x+400;
    y=y+200;

    ctx.beginPath();
    ctx.arc(x, y, 2, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();

}

/**<font></font>
 * Blanquea el canvas para dibujar una nueva funcion<font></font>
 * @method borrar<font></font>
 */

function borrar() {

    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);

}



