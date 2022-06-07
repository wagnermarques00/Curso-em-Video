package CursoEmVideo.aula12_PolimorfismoParte1;

public class Peixe extends Animal{
    //Atributos de peixe
    private String corEscama;

    //Métodos de peixe
    public void soltarBolha() {
        System.out.println("Soltando bolha");
    }

    //Sobrescrita de métodos
    @Override
    public void locomover() {
        System.out.println("Nadando");
    }

    @Override
    public void alimentar() {
        System.out.println("Comendo substâncias");
    }

    @Override
    public void emitirSom() {
        System.out.println("Peixe não emite som");
    }

    //Getters e Setters
    public String getCorEscama() {
        return corEscama;
    }

    public void setCorEscama(String corEscama) {
        this.corEscama = corEscama;
    }
}
