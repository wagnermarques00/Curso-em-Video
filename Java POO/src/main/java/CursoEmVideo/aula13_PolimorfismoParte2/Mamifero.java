package CursoEmVideo.aula13_PolimorfismoParte2;

public class Mamifero extends Animal {
    //Atributos específicos de Animal
    protected String corPelo;

    //Sobreposição de métodos
    @Override
    public void emitirSom() {
        System.out.println("Som de mamífero");
    }
}