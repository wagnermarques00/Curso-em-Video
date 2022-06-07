package CursoEmVideo.aula12_PolimorfismoParte1;

public class Aula12 {
    public static void main(String[] args) {
        //Animal n = new Animal(); --> Animal é uma classe abstrata e não pode ser instanciada
        Ave a = new Ave();
        System.out.println("Ave");
        a.setCorPena("Azul");
        a.alimentar();
        a.setPeso(1.5f);
        a.locomover();
        a.emitirSom();

        Arara e = new Arara();
        System.out.println("Arara");
        e.setCorPena("Amarelo");
        e.alimentar();
        e.setPeso(2.5f);
        e.locomover();
        e.emitirSom();

        Cachorro k = new Cachorro();
        System.out.println("Cachorro");
        k.setCorPelo("Marrom");
        k.alimentar();
        k.setPeso(6f);
        k.locomover();
        k.emitirSom();

        Canguru c = new Canguru();
        System.out.println("Canguru");
        c.setCorPelo("Marrom");
        c.alimentar();
        c.setPeso(35.4f);
        c.locomover();
        c.emitirSom();
        c.usarBolsa();

        Cobra j = new Cobra();
        System.out.println("Cobra");
        j.setCorEscama("Preta");
        j.alimentar();
        j.setPeso(2.5f);
        j.locomover();
        j.emitirSom();

        Goldfish g = new Goldfish();
        System.out.println("Goldfish");
        g.setCorEscama("Dourada");
        g.alimentar();
        g.setPeso(0.1f);
        g.locomover();
        g.emitirSom();

        Mamifero m = new Mamifero();
        System.out.println("Mamífero");
        m.setPeso(35.3f);
        m.setCorPelo("Marrom");
        m.alimentar();
        m.locomover();
        m.emitirSom();

        Peixe p = new Peixe();
        System.out.println("Peixe");
        p.setPeso(5f);
        p.setCorEscama("Verde");
        p.alimentar();
        p.locomover();
        p.emitirSom();

        Reptil r = new Reptil();
        System.out.println("Réptil");
        r.setPeso(12f);
        r.setCorEscama("Laranja");
        r.alimentar();
        r.locomover();
        r.emitirSom();

        Tartaruga t = new Tartaruga();
        System.out.println("Tartaruga");
        t.setPeso(25f);
        p.setCorEscama("Verde");
        p.alimentar();
        p.locomover();
        p.emitirSom();
    }
}
