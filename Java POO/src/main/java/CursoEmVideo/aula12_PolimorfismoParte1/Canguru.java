package CursoEmVideo.aula12_PolimorfismoParte1;

public class Canguru extends Mamifero {
    //Métodos de canguru
    public void usarBolsa() {
        System.out.println("Usando bolsa");
    }

    //Sobrescrita de métodos
    @Override
    public void locomover() {
        System.out.println("Saltando");
    }
}
