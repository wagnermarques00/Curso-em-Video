package CursoEmVideo.aula09_ExercicioPratico;

public class Pessoa {
    //Atributos
    private String nome;
    private int idade;
    private String sexo;

    //Métodos básicos
    public void fazerAniversario() {
        this.idade++;
    }

    //Métodos especiais
    public Pessoa(String nome, int idade, String sexo) {
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public int getIdade() {
        return idade;
    }

    public void setIdade(int idade) {
        this.idade = idade;
    }

    public String getSexo() {
        return sexo;
    }

    public void setSexo(String sexo) {
        this.sexo = sexo;
    }
}
