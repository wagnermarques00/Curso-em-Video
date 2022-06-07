package CursoEmVideo.aula13_PolimorfismoParte2;

public class Aula13 {
    public static void main(String[] args) {
        //Animal x = new Animal() ; --> Animal é uma classe abstrata e não pode ser instanciada
        Mamifero m = new Mamifero();
        m.emitirSom();

        Lobo l = new Lobo();
        l.emitirSom();

        Cachorro c = new Cachorro();
        c.emitirSom();

        c.reagir("Olá");
        c.reagir("Vai apanhar");

        c.reagir(11, 45);
        c.reagir(19, 0);

        c.reagir(true);
        c.reagir(false);

        c.reagir(2, 12.5f);
        c.reagir(17, 4.5f);
    }
}