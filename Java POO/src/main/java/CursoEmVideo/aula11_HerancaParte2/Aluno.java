package CursoEmVideo.aula11_HerancaParte2;

public class Aluno extends Pessoa {
    private int matricula;
    private String curso;

    //Métodos simples
    public void pagarMensalidade() {
        System.out.println("Pagando mensalidade do aluno " + this.getNome());
    }

    //Getters e Setters
    public int getMatricula() {
        return matricula;
    }

    public void setMatricula(int matricula) {
        this.matricula = matricula;
    }

    public String getCurso() {
        return curso;
    }

    public void setCurso(String curso) {
        this.curso = curso;
    }

    //To String

    @Override
    public String toString() {
        return super.toString() + " " +
                "Aluno{" +
                "matricula=" + matricula +
                ", curso='" + curso + '\'' +
                "} ";
    }
}
