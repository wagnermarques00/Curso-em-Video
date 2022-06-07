package CursoEmVideo.aula11_HerancaParte2;

public class Aula11 {
    public static void main(String[] args) {
        //Programa principal
        //Pessoa p1 = new Pessoa();  --> Pessoa é uma classe abstrata e não pode ser instanciada <--
        Visitante v1 = new Visitante();
        v1.setIdade(22);
        v1.setNome("Juvenal");
        v1.setSexo("Masculino");
        System.out.println(v1.toString());

        Aluno a1 = new Aluno();
        a1.setCurso("Informática");
        a1.setIdade(16);
        a1.setMatricula(1111);
        a1.setNome("Cláudio");
        a1.setSexo("Masculino");
        a1.pagarMensalidade();
        System.out.println(a1.toString());

        Bolsista b1 = new Bolsista();
        b1.setBolsa(12.5f);
        b1.setMatricula(1112);
        b1.setNome("Jubileu");
        b1.setSexo("Masculino");
        b1.pagarMensalidade();
        System.out.println(b1.toString());




    }
}
