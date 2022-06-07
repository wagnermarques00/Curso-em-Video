package CursoEmVideo.aula11_HerancaParte2;

public final class Bolsista extends Aluno {
    private float bolsa;

    //Método simples
    public void renovarBolsa() {
        System.out.println("Renovando bolsa de " + this.getNome());
    }

    //Sobrescrita
    @Override
    public void pagarMensalidade() {
        System.out.println(this.getNome() + " é bolsista! Pagamento facilitado");
    }

    //Getters e Setters
    public float getBolsa() {
        return bolsa;
    }

    public void setBolsa(float bolsa) {
        this.bolsa = bolsa;
    }

    //To String

    @Override
    public String toString() {
        return super.toString() + " " +
                "Bolsista{" +
                "bolsa=" + bolsa +
                "} ";
    }
}
