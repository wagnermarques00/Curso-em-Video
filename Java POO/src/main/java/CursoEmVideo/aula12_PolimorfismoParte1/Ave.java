package CursoEmVideo.aula12_PolimorfismoParte1;

public class Ave extends Animal{
    //Atributos de ave
    private String corPena;

    //Métodos de ave
    public void fazerNinho() {
        System.out.println("Construindo ninho");
    }

    //Sobrescrita de métodos
    @Override
    public void locomover() {
        System.out.println("Voando");
    }

    @Override
    public void alimentar() {
        System.out.println("Comendo frutas");
    }

    @Override
    public void emitirSom() {
        System.out.println("Som de ave");
    }

    //Getters e Setters
    public String getCorPena() {
        return corPena;
    }

    public void setCorPena(String corPena) {
        this.corPena = corPena;
    }
}
